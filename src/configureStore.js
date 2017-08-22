import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducer'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer,
    compose(applyMiddleware(sagaMiddleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}
