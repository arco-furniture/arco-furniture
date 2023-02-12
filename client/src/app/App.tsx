import React, { useEffect } from 'react'
import { Header, Footer } from '../components'
import AppRoutes from './AppRoutes'
import '../scss/vendor/normalize.scss'
import '../scss/app.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { useActions } from '../hooks/useActions'

const App: React.FC = (): JSX.Element => {
  const { getTopProduct } = useActions()
  useEffect(() => {
    getTopProduct()
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
