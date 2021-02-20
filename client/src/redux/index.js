import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

sagaMiddleware.run(rootSaga);
