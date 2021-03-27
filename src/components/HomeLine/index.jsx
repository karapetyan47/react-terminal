import React from 'react';
import useStyles from './styles';

const HomeLine = () => {
  const classes = useStyles();

  return <label className={classes.label}>home@user:~$ </label>;
};

export default HomeLine;
