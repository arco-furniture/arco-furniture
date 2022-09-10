import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import productReducer from "./product/productSlice"
import otherReducer from "../redux/other/otherSlice"
import basketReducer from "../redux/basket/basketSlice"
import arrayReducer from "./basket/arrayOfCards";
import statusReducer from "./basket/btnStatus";
import formDataReducer from "./basket/basketFormInfo";

export const store = configureStore({
    reducer: {
        homeReducer,
        productReducer,
        otherReducer,
        arrayReducer,
        statusReducer,
        basketReducer
    },
})
