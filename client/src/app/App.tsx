import '../scss/vendor/normalize.scss'
import '../scss/app.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Header, Main, Footer } from 'components/index'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { checkAuth } from '../redux/auth/auth.actions'
import { useBasket, useHome } from '../hooks/useStateSelectors'
import { useActions } from '../hooks/useActions'
import { useLocation } from 'react-router-dom'

const App: React.FC = () => {
  const { dataBasketItems } = useBasket()
  const { favoriteData } = useHome()
  const { checkBasketItems, setSizeBody } = useActions()
  const pathname = useLocation()

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

  useEffect(() => {
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    if (height && width) {
      setSizeBody({ height, width })
    }
  }, [pathname])

  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
