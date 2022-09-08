import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import countReducer from "./basket/countOfItems";
import arrayReducer from "./basket/arrayOfCards";

export const store = configureStore({
    reducer: {
        homeReducer,
        countReducer,
        arrayReducer,
    },
})
