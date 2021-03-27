import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    height: 25,
    margin: 1,
    display: 'flex',
    position: 'fixed',
    width: '100%',
  },
  listItem: {
    color: '#c8d6e5',
    textAlign: 'center',
    fontSize: 16,
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: '#535c68',
    border: '1px solid #222f3e',
    boxSizing: 'border-box',
    borderRadius: 2,
  },
  active: {
    backgroundColor: '#4b6584',
  },
  xButton: {
    width: 20,
    height: 'calc(100% - 1px)',
    position: 'absolute',
    top: 1,
    right: 5,
    borderRadius: '50%',
    backgroundColor: '#222f3e',
    textAlign: 'center',
  },
  label: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    margin: '2px 0',
    width: `calc(100% - 25px)`,
  },
}));

export default useStyles;
