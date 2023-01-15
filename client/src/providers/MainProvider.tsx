import { store } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import React from 'react'
import AuthProvider from './AuthProvider'
import Toaster from 'components/toaster/Toaster'
import MuiProvider from './MuiProvider'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: React.FC<any> = ({ children }) => {
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
