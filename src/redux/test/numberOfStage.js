import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    stage: 1,
}

export const numberOfStage = createSlice({
    name: 'stage',
    initialState,

    reducers: {
        nextCount(state) {
            state.stage += 1
        },
        previousСount(state) {
            state.stage -= 1
        },
    },
})

export const stageSelector = (state) => state.stageReducer
export const {nextCount, previousСount} = numberOfStage.actions;
export default numberOfStage.reducer;
