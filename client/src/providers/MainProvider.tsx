import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import AuthProvider from './AuthProvider'
import MuiProvider from './MuiProvider'
import { Toaster } from '../components'
import { IProvider } from './types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: React.FC<IProvider> = ({ children }): JSX.Element => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <MuiProvider>
            <Toaster />
            <AuthProvider>{children}</AuthProvider>
          </MuiProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default MainProvider
