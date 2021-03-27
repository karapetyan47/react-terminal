import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    color: '#3498db',
    width: 100,
  },
  list: {
    listStyleType: 'none',
  },
  listItem: {
    color: '#3498db',
  },
  incorrect: {
    color: '#ff4d4d',
  },
}));

export default useStyles;
