import React from 'react'
import styles from '../../scss/modules/main.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Home, Favorite } from 'pages/index'
import AlertBar from '../alertBar/AlertBar'
import AuthorsPopup from '../popups/AuthorsPopup'
import { Preloader } from '../index'
import Loadable from 'react-loadable'
import PageNotFound from 'pages/notFound/PageNotFound'
import RegisterPopup from 'components/popups/RegisterPopup'
import AuthPopup from 'components/popups/AuthPopup'

const Main: React.FC = () => {
  const Category = Loadable({
    loader: () => import(/* webpackChunkName: "Category" */ 'pages/category/Category'),
    loading: () => <Preloader />,
  })

  const Product = Loadable({
    loader: () => import(/* webpackChunkName: "Product" */ 'pages/product/Product'),
    loading: () => <Preloader />,
  })

  const BasketControl = Loadable({
    loader: () => import(/* webpackChunkName: "BasketControl" */ 'pages/basket/BasketControl'),
    loading: () => <Preloader />,
  })

  const BasketOrder = Loadable({
    loader: () => import(/* webpackChunkName: "BasketOrder" */ 'pages/basket/BasketOrder'),
    loading: () => <Preloader />,
  })

  const BasketApproval = Loadable({
    loader: () => import(/* webpackChunkName: "BasketApproval" */ 'pages/basket/BasketApproval'),
    loading: () => <Preloader />,
  })

  const Profile = Loadable({
    loader: () => import(/* webpackChunkName: "Category" */ 'pages/profile/Profile'),
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
            <Route path='/basket/' element={<BasketControl />} />
            <Route path='/basket/order' element={<BasketOrder />} />
            <Route path='/basket/order/approval' element={<BasketApproval />} />
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

export default Main
