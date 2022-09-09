import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const fetchAdvice = createAsyncThunk('home/fetchAdvice', async (requestFilter) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/advice${requestFilter}`)
    return data
})


const initialState = {
    adviceData: [],
    adviceStatus: '',
    favoriteData: [],
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        postFavoriteItem(state, actions) {
            state.favoriteData = [...state.favoriteData, actions.payload]
        },
        deleteFavoriteItem(state, actions) {
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdvice.pending, (state) => {
            state.adviceData = [];
            state.adviceStatus = 'loading';
        });
        builder.addCase(fetchAdvice.fulfilled, (state, action) => {
            state.adviceData = action.payload
            state.adviceStatus = 'success'
        });
        builder.addCase(fetchAdvice.rejected, (state) => {
            state.statusItems = 'error'
            state.adviceStatus = [];
        });
    },
})

export const { postFavoriteItem, deleteFavoriteItem } = homeSlice.actions;
export const homeSelector = (state) => state.homeReducer
export default homeSlice.reducer;