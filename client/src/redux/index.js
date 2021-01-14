import { applyMiddleware, createStore, compose } from 'redux'
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchFetchProducts } from './sagas/fetchProductesSaga/undex'

const sagaMiddleware = createSagaMiddleware()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), devTools)
)

sagaMiddleware.run(watchFetchProducts)

export default store
