import React from 'react'
import styles from '../scss/modules/main.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Home, Favorite } from 'pages/index'
import AlertBar from 'components/alertBar/AlertBar'
import AuthorsPopup from 'components/popups/AuthorsPopup'
import { Preloader } from 'components/index'
import Loadable from 'react-loadable'
import PageNotFound from 'pages/notFound/PageNotFound'
import RegisterPopup from 'components/popups/RegisterPopup'
import AuthPopup from 'components/popups/AuthPopup'

const AppRoutes: React.FC = () => {
  const Category = Loadable({
    loader: () => import(/* webpackChunkName: "Category" */ 'pages/category/Category'),
    loading: () => <Preloader />,
  })

  const Product = Loadable({
    loader: () => import(/* webpackChunkName: "Product" */ 'pages/product/Product'),
    loading: () => <Preloader />,
  })

  const Profile = Loadable({
    loader: () => import(/* webpackChunkName: "Category" */ 'pages/profile/Profile'),
    loading: () => <Preloader />,
  })

  const Basket = Loadable({
    loader: () => import(/* webpackChunkName: "Basket" */ 'pages/basket/Basket'),
    loading: () => <Preloader />,
  })

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:profileId' element={<Profile />} />
            <Route path='/category/:categoryName' element={<Category />} />
            <Route path='/category/:categoryName/product/:productId' element={<Product />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
      <AlertBar />
      <AuthorsPopup />
      <RegisterPopup />
      <AuthPopup />
    </main>
  )
}

export default AppRoutes