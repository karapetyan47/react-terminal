import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import ConsolesApi from '../../api/consolesApi';
import { ATTEMPT_RUN_COMMAND, runCommandFail, runCommandSucceed } from './actions';

const api = new ConsolesApi('entries');

function* getCommandResult({ payload: { data } }) {
  try {
    const res = yield all(data.map((p) => call(api.getResult, { params: { category: p } })));

    yield put(runCommandSucceed(res || []));
  } catch (error) {
    console.log('', error);
    yield put(runCommandFail(error.response.data.message));
  }
}

function* watchGetCommandResult() {
  yield takeLatest(ATTEMPT_RUN_COMMAND, getCommandResult);
}

export default function* rootSaga() {
  yield all([fork(watchGetCommandResult)]);
}
