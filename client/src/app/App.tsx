import '../scss/vendor/normalize.scss'
import '../scss/app.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Header, Main, Footer } from 'components/index'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { checkAuth } from '../redux/auth/auth.actions'
import { useBasket, useHome } from '../hooks/useStateSelectors'
import { useActions } from '../hooks/useActions'

const App: React.FC = () => {
  const { dataBasketItems } = useBasket()
  const { favoriteData } = useHome()
  const { checkBasketItems } = useActions()

  useEffect(() => {
    const newFavorites = JSON.stringify(favoriteData)
    localStorage.setItem('favorites', newFavorites)
  }, [favoriteData])

  useEffect(() => {
    const newItems = JSON.stringify(dataBasketItems)
    localStorage.setItem('items', newItems)
    checkBasketItems()
  }, [dataBasketItems])

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      checkAuth()
    }
  }, [])

  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
