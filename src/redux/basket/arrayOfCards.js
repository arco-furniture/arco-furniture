import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    count: [],
}

export const arrayOfCards = createSlice({
    name: 'arrayOfCards',
    initialState: {
        count: [],
    },

    reducers: {
        add(state) {
            console.log(state, '2222')
        },
        remove(state) {
            console.log(state, '3333')
        },
    },
})

export const arraySelector = (state) => state.arrayReducer
export const { add, remove } = arrayOfCards.actions;
export default arrayOfCards.reducer;