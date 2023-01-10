import { store } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import React from 'react'
import AuthProvider from './AuthProvider'
import Toaster from 'components/toaster/Toaster'
import MuiProvider from './MuiProvider'

const MainProvider: React.FC<any> = ({ children }) => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <MuiProvider>
          <Toaster />
          <AuthProvider>{children}</AuthProvider>
        </MuiProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default MainProvider
