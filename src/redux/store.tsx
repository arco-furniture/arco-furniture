import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import productReducer from "./product/productSlice"
import otherReducer from "../redux/other/otherSlice"
import basketReducer from "../redux/basket/basketSlice"
import categoryReducer from "./category/categorySlice";

export const store = configureStore({
    reducer: {
        homeReducer,
        productReducer,
        otherReducer,
        basketReducer,
        categoryReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
