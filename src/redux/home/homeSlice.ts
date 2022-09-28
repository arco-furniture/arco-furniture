import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import {RootState} from "../store";
import {IHomeState} from "../types";
import {IItem} from "../../types/itemTypes";

export const fetchAdvice: any = createAsyncThunk('home/fetchAdvice', async (requestFilter) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/acro${requestFilter}`)
    return data
})

const initialState: IHomeState = {
    adviceData: [],
    adviceStatus: 'loading',
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
            state.favoriteData = actions.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdvice.pending, (state) => {
            state.adviceData = [];
            state.adviceStatus = 'loading';
        });
        builder.addCase(fetchAdvice.fulfilled, (state, action) => {
            state.adviceData = action.payload.filter((item: IItem) => item.advice || item.advice === 0)
            state.adviceStatus = 'success'
        });
        builder.addCase(fetchAdvice.rejected, (state) => {
            state.adviceStatus = 'error'
            state.adviceData = [];
        });
    },
})

export const { postFavoriteItem, deleteFavoriteItem } = homeSlice.actions;
export const homeSelector = (state: RootState) => state.homeReducer
export default homeSlice.reducer;