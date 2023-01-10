import { store } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import React from 'react'
import AuthProvider from './AuthProvider'
import Toaster from 'components/toaster/Toaster'

const MainProvider: React.FC<any> = ({ children }) => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Toaster />
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default MainProvider
