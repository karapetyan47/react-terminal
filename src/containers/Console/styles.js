import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  console: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    minHeight: 'calc(100vh - 50px)',
    marginTop: 25,
  },
  input: {
    outline: 'none',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#3498db',
    width: '100%',
    fontSize: '1rem',
  },
  menu: {
    position: 'absolute',
    zIndex: 10,
    padding: '12px 0',
    width: '240px',
    backgroundColor: '#2f3640',
    borderRadius: 7,
    border: 'none',
  },
  menuItem: {
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#0097e6',
    },
  },
  progressBar: {
    margin: '3px 1px',
  },
}));

export default useStyles;
