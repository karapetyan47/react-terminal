import { combineReducers } from 'redux';
import consolesReducer from './consoles/reducer';

const createRootReducers = (history) =>
  combineReducers({
    consoles: consolesReducer,
  });

export default createRootReducers;
