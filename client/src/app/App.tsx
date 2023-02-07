import React from 'react'
import { Header, Footer } from '../components'
import AppRoutes from './AppRoutes'
import '../scss/vendor/normalize.scss'
import '../scss/app.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const App: React.FC = (): JSX.Element => (
  <div className='App'>
    <Header />
    <AppRoutes />
    <Footer />
  </div>
)

export default App
