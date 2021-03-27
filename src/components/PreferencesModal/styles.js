import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    width: 700,
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
  wrapper: {
    width: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  field: {
    marginBottom: 20,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  cancelButton: {
    marginRight: 20,
  },
}));

export default useStyles;
