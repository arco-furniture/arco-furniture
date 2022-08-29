import { configureStore } from '@reduxjs/toolkit'
import testReducer from "./test/testSlice";
import stageReducer from "./test/numberOfStage";

export const store = configureStore({
    reducer: {
        testReducer,
        stageReducer
    },
})
