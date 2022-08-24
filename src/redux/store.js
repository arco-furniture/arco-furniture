import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./item/counterSlice";

export const store = configureStore({
    reducer: {
        counterReducer,
    },
})
