import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import productReducer from "./product/productSlice"
import otherReducer from "../redux/other/otherSlice"
import basketReducer from "../redux/basket/basketSlice"

export const store = configureStore({
    reducer: {
        homeReducer,
        productReducer,
        otherReducer,
        basketReducer
    },
})
