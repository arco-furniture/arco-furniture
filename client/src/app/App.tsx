import '../scss/vendor/normalize.scss'
import '../scss/app.scss'
import { Header, Main, Footer } from 'components/index'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { checkBasketItems } from '../redux/basket/basketSlice'

const App: React.FC = () => {
  const favoriteData = useAppSelector((state) => state.home.favoriteData)
  const dataBasketItems = useAppSelector((state) => state.basket.dataBasketItems)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const newFavorites = JSON.stringify(favoriteData)
    localStorage.setItem('favorites', newFavorites)
  }, [favoriteData])

  useEffect(() => {
    const newItems = JSON.stringify(dataBasketItems)
    localStorage.setItem('items', newItems)
    dispatch(checkBasketItems())
  }, [dataBasketItems])

  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
