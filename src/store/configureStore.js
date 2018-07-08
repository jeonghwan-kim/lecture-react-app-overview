import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import storeLogger from '../middlewares/storeLogger'
import rootSaga from '../sagas'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [storeLogger, thunk, sagaMiddleware]
  const enhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer, enhancer)
  
  sagaMiddleware.run(rootSaga)
  
  return store
}
