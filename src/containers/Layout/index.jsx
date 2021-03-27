import React from 'react';
import Console from '../Console';
import {
  activeConsoleIdSelector,
  bgColorSelector,
  consolesSelector,
  fontColorSelector,
} from '../../store/consoles/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveConsole, changeColor, closeConsole } from '../../store/consoles/actions';
import useStyles from './styles';
import PreferencesModal from '../../components/PreferencesModal';

export default function Layout() {
  const classes = useStyles();

  const [preferencesOpen, setPreferencesOpen] = React.useState(false);

  const consoles = useSelector(consolesSelector);
  const activeConsoleId = useSelector(activeConsoleIdSelector);
  const fontColor = useSelector(fontColorSelector);
  const bgColor = useSelector(bgColorSelector);
  const dispatch = useDispatch();

  const clo = consoles.find(({ id }) => id === activeConsoleId);

  return (
    <section className={classes.container}>
      <ul className={classes.list}>
        {consoles.map((clo) => (
          <li
            className={`${classes.listItem} ${clo.id === activeConsoleId ? classes.active : ''}`}
            style={{ width: `calc(${100 / consoles.length}% - 1px)` }}
            key={clo.id}
            onClick={() => {
              dispatch(changeActiveConsole(clo.id));
            }}>
            <h5 className={classes.label}>{clo.id}</h5>
            {consoles.length > 1 && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(closeConsole(clo.id));
                }}
                className={classes.xButton}>
                &times;
              </span>
            )}
          </li>
        ))}
      </ul>
      <Console
        clo={clo}
        editConsole={() => {
          setPreferencesOpen(true);
        }}
        fontColor={fontColor}
        bgColor={bgColor}
      />
      <PreferencesModal
        open={preferencesOpen}
        onClose={() => {
          setPreferencesOpen(false);
        }}
        onChange={(colors) => {
          dispatch(changeColor(colors));
        }}
        fontColor={fontColor}
        bgColor={bgColor}
      />
    </section>
  );
}
