import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    count: 2,
}

export const numberOfStage = createSlice({
    name: 'count',
    initialState,

    reducers: {
        less(state) {
            if (state.count > 2) {
                state.stage -= 1
            }
            return
        },
        more(state) {
            state.stage += 1
        },
    },
})

export const stageSelector = (state) => state.countReducer
export const { less, more } = numberOfStage.actions;
export default numberOfStage.reducer;