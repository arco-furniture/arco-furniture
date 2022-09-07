import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    count: 1,
}

export const numberOfCard = createSlice({
    name: 'count',
    initialState,

    reducers: {
        nextCount(state) {
            state.count += 1
        },
        previousСount(state) {
            if (state.count > 1) {
                state.count -= 1
            }
            return
        },
    },
})

export const stageSelector = (state) => state.cardReducer
export const { nextCount, previousСount } = numberOfCard.actions;
export default numberOfCard.reducer;