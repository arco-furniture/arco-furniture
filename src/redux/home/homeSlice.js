import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const fetchAdvice = createAsyncThunk('home/fetchAdvice', async () => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/advice`)
    return data
})

const initialState = {
    adviceData: [],
    adviceStatus: ''
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdvice.fulfilled, (state, action) => {
            state.adviceData = action.payload;
            state.adviceStatus = 'success'
        });
        builder.addCase(fetchAdvice.rejected, (state) => {
            state.adviceData = [];
            state.adviceStatus = 'error'
        });
        builder.addCase(fetchAdvice.pending, (state) => {
            state.adviceData = [];
            state.adviceStatus = 'loading'
        });
    },
})


export const homeSelector = (state) => state.homeReducer
export default homeSlice.reducer;