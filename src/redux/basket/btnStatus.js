import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    status: true,
}

export const btnStatus = createSlice({
    name: 'status',
    initialState,

    reducers: {
        positive(state) {
            state.status = false
        },
        negative(state) {
            state.status = true
        },
    },
})

export const statusSelector = (state) => state.statusReducer
export const { positive, negative } = btnStatus.actions;
export default btnStatus.reducer;