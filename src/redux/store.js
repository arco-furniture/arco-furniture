import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import stageReducer from "./test/numberOfStage";
import productReducer from "./product/productSlice"
import otherReducer from "../redux/other/otherSlice"

export const store = configureStore({
    reducer: {
        homeReducer,
        stageReducer,
        productReducer,
        otherReducer,
    },
})
