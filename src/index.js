import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import dashboardApp from './store'
import storeLogger from './middlewares/storeLogger'

const store = createStore(
  dashboardApp,
  applyMiddleware(thunk, storeLogger)
)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)