import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Modal,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { SketchPicker } from 'react-color';
import useStyles from './styles';

const PreferencesModal = ({ open, onClose, fontColor, bgColor, onChange }) => {
  const classes = useStyles();

  const [colors, setColors] = React.useState({ text: fontColor, bg: bgColor });

  React.useEffect(() => {
    setColors({ text: fontColor, bg: bgColor });
  }, [fontColor, bgColor]);

  const handleChangeColors = (color, field) => {
    setColors({
      ...colors,
      [field]: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
    });
  };

  const handleChangeColor = () => {
    if (fontColor !== colors.text || bgColor !== colors.bg) {
      onChange(colors);
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.container}>
        <Card className={classes.wrapper}>
          <CardHeader title="Preferences" />
          <Divider />
          <CardContent className={classes.content}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography className={classes.field} variant="h5">
                Text Color
              </Typography>
              <SketchPicker
                color={colors.text}
                onChangeComplete={(e) => {
                  handleChangeColors(e, 'text');
                }}
              />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography className={classes.field} variant="h5">
                Background Color
              </Typography>
              <SketchPicker
                color={colors.bg}
                onChangeComplete={(e) => {
                  handleChangeColors(e, 'bg');
                }}
              />
            </Box>
          </CardContent>
          <Divider />
          <CardActions className={classes.footer}>
            <Button
              className={classes.cancelButton}
              color="primary"
              variant="contained"
              onClick={onClose}>
              Cancel
            </Button>
            <Button color="primary" variant="contained" onClick={handleChangeColor}>
              Save
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
};

export default PreferencesModal;
