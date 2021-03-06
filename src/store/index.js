import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './saga';

import createRootReducers from './reducer';
import 'regenerator-runtime/runtime';

const makeStore = () => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
  });
  middleware.push(loggerMiddleware);

  const store = createStore(createRootReducers(), applyMiddleware(...middleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default makeStore();
