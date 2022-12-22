import React from 'react'
import styles from '../../scss/modules/main.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Home, Favorite } from '../../pages'
import AlertBar from '../alertBar/AlertBar'
import AuthorsPopup from '../popups/AuthorsPopup'
import { Preloader, ProtectedRoute } from '../index'
import { useAppSelector } from '../../hooks/redux'
import Loadable from 'react-loadable'
import PageNotFound from '../../pages/PageNotFound'

const Main: React.FC = () => {
  const favoriteData = useAppSelector((state) => state.home.favoriteData)
  const dataBasketItems = useAppSelector((state) => state.basket.dataBasketItems)

  const Category = Loadable({
    loader: () => import(/* webpackChunkName: "Category" */ '../../pages/category/Category'),
    loading: () => <Preloader />,
  })

  const Product = Loadable({
    loader: () => import(/* webpackChunkName: "Product" */ '../../pages/product/Product'),
    loading: () => <Preloader />,
  })

  const BasketControl = Loadable({
    loader: () => import(/* webpackChunkName: "BasketControl" */ '../../pages/basket/BasketControl'),
    loading: () => <Preloader />,
  })

  const BasketOrder = Loadable({
    loader: () => import(/* webpackChunkName: "BasketOrder" */ '../../pages/basket/BasketOrder'),
    loading: () => <Preloader />,
  })

  const BasketApproval = Loadable({
    loader: () => import(/* webpackChunkName: "BasketApproval" */ '../../pages/basket/BasketApproval'),
    loading: () => <Preloader />,
  })

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/arco-furniture' element={<Home />} />
            <Route path='/category/:categoryName' element={<Category />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route
              path='/favorite'
              element={
                <ProtectedRoute existData={favoriteData.length}>
                  <Favorite />
                </ProtectedRoute>
              }
            />
            <Route
              path='/basket'
              element={
                <ProtectedRoute existData={dataBasketItems.length}>
                  <BasketControl />
                </ProtectedRoute>
              }
            />
            <Route
              path='/basket/order'
              element={
                <ProtectedRoute existData={dataBasketItems.length}>
                  <BasketOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path='/basket/order/approval'
              element={
                <ProtectedRoute existData={dataBasketItems.length}>
                  <BasketApproval />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
      <AlertBar />
      <AuthorsPopup />
    </main>
  )
}

export default Main
