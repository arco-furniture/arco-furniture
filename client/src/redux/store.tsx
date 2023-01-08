import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './home/homeSlice'
import productReducer from './product/productSlice'
import otherReducer from './other/otherSlice'
import basketReducer from './basket/basketSlice'
import categoryReducer from './category/categorySlice'
import authReducer from './auth/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    product: productReducer,
    other: otherReducer,
    basket: basketReducer,
    category: categoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
