import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import dashboardApp from './store'
import storeLogger from './middlewares/storeLogger'
import rootSaga from './sagas'

const sagaMw = createSagaMiddleware()
const mws = [thunk, storeLogger, sagaMw]
const store = createStore(
  dashboardApp,
  applyMiddleware(...mws)
)

sagaMw.run(rootSaga)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)