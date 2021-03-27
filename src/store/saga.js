import { all } from 'redux-saga/effects';
import consolesSaga from './consoles/sagas';

export default function* rootSaga() {
  yield all([consolesSaga()]);
}
