import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import arrayReducer from "./basket/arrayOfCards";
import statusReducer from "./basket/btnStatus";
import formDataReducer from "./basket/basketFormInfo";

export const store = configureStore({
    reducer: {
        homeReducer,
        arrayReducer,
        statusReducer,
        formDataReducer,
    },
})
