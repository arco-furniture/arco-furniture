import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from '../scss/modules/main.module.scss'
import { Home, Favorite, PageNotFound } from '../pages'
import { AlertBar, AuthorsPopup, RegisterPopup, AuthPopup, PaymentPopup, ProjectPopup } from '../components'
import Preloader from '../components/preloader'
import LocationPopup from '../components/popups/LocationPopup'

const AppRoutes: React.FC = () => {
  const Category = React.lazy(() => import('../pages/category/Category'))
  const Product = React.lazy(() => import('../pages/product/Product'))
  const Profile = React.lazy(() => import('../pages/profile/Profile'))
  const Basket = React.lazy(() => import('../pages/basket/Basket'))

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:profileId' element={<Profile />} />
            <Route path='/category/:categoryName' element={<Category />} />
            <Route path='/category/:categoryName/product/:productId' element={<Product />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
      <AlertBar />
      <AuthorsPopup />
      <RegisterPopup />
      <AuthPopup />
      <PaymentPopup />
      <ProjectPopup />
      <LocationPopup />
    </main>
  )
}

export default AppRoutes
