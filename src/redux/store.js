import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import stageReducer from "./test/numberOfStage";

export const store = configureStore({
    reducer: {
        homeReducer,
        stageReducer,

    },
})
