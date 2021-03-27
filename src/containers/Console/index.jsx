import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Box, CircularProgress, MenuItem } from '@material-ui/core';
import HomeLine from '../../components/HomeLine';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  attemptRunCommand,
  clearTerminal,
  closeConsole,
  createConsole,
} from '../../store/consoles/actions';
import positionMenu from '../../utils/positionMenu';
import useStyles from './styles';
import { commandLoadingSelector, consolesCountSelector } from '../../store/consoles/selectors';
import ConsoleHistory from '../../components/ConsoleHistory';

const Console = ({ clo, editConsole, fontColor, bgColor }) => {
  const inputText = React.useRef();
  const menu = React.useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = useSelector(consolesCountSelector);
  const loading = useSelector(commandLoadingSelector);

  let idx = clo.commandsHistory.length - 1;

  React.useEffect(() => {
    if (inputText.current) {
      inputText.current.value = '';
      inputText.current.focus();
    }
  });

  React.useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useOnClickOutside(menu, handleClose);

  const newConsole = () => {
    dispatch(createConsole({ id: uuidv4() }));
    handleClose();
  };

  const handleCloseConsole = () => {
    dispatch(closeConsole());
    handleClose();
  };

  const handleRightClick = (e) => {
    let isRightMB;
    e = e || window.event;

    if ('which' in e) isRightMB = e.which === 3;
    else if ('button' in e) isRightMB = e.button === 2;

    if (isRightMB) {
      positionMenu(e, menu);
      handleClick(e);
    }

    e.preventDefault();
  };

  const handleRunCommand = (value, key) => {
    if (key === 'Enter') {
      if (value.trim().toLowerCase() === 'clear') {
        dispatch(clearTerminal());
      } else {
        dispatch(
          attemptRunCommand({
            type: 'command',
            data: value.trim().split(' '),
          }),
        );
      }
    }
  };

  const handleUpDownPress = (e) => {
    if (clo.commandsHistory.length) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        inputText.current.value = clo.commandsHistory[idx--];
        if (idx === -1) {
          idx = clo.commandsHistory.length - 1;
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        inputText.current.value = clo.commandsHistory[idx++];
        if (idx === clo.commandsHistory.length) {
          idx = 0;
        }
      }
    }
  };

  return (
    <>
      <Box
        onClick={() => {
          inputText.current.focus();
        }}
        onContextMenu={handleRightClick}
        className={classes.console}>
        <ConsoleHistory consoleOutput={clo.consoleHistory} textColor={fontColor} />
        <Box width="100%" display="flex">
          {!loading ? (
            <>
              <HomeLine />
              <input
                style={{ color: fontColor }}
                className={classes.input}
                type="text"
                ref={inputText}
                onKeyPress={({ target: { value }, key }) => {
                  handleRunCommand(value, key);
                }}
                onKeyDown={(e) => {
                  handleUpDownPress(e);
                }}
              />
            </>
          ) : (
            <CircularProgress
              size={16}
              style={{ color: fontColor }}
              className={classes.progressBar}
            />
          )}
        </Box>
        <ul
          style={{
            display: `${Boolean(anchorEl) ? 'block' : 'none'}`,
          }}
          className={classes.menu}
          ref={menu}>
          <MenuItem className={classes.menuItem} onClick={newConsole}>
            New Terminal
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={editConsole}>
            Preferences
          </MenuItem>
          {count > 1 && (
            <MenuItem className={classes.menuItem} onClick={handleCloseConsole}>
              Close
            </MenuItem>
          )}
        </ul>
      </Box>
    </>
  );
};

export default Console;
