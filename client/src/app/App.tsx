import '../scss/vendor/normalize.scss'
import '../scss/app.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Header, Footer } from 'components/index'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { checkAuth } from '../redux/auth/auth.actions'
import AppRoutes from './AppRoutes'

const App: React.FC = () => {
  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      checkAuth()
    }
  }, [])

  return (
    <div className='App'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
