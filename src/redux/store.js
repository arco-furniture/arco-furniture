import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";

export const store = configureStore({
    reducer: {
        homeReducer,
    },
})
