import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app/App'

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    root,
  )
}
