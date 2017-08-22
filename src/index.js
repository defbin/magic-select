import 'bootstrap/dist/css/bootstrap.css'
import 'react-select/dist/react-select.css'
import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import { watchSuggestions } from './sagas'
import configureStore from './configureStore'

const store = configureStore()
store.runSaga(watchSuggestions)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
