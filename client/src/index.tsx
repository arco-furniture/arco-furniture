import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import MainProvider from './providers/MainProvider'

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <MainProvider>
        <App />
      </MainProvider>
    </React.StrictMode>,
    root,
  )
}
