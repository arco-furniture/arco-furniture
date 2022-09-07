import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./home/homeSlice";
import stageReducer from "./test/numberOfStage";
import cardReducer from "./test/numberOfCard";

export const store = configureStore({
    reducer: {
        homeReducer,
        stageReducer,
        cardReducer,
    },
})
