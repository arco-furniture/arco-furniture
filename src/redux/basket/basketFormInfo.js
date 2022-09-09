import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    formData: {},
}

export const basketFormInfo = createSlice({
    name: 'form',
    initialState,

    reducers: {
        addInfo(state) {
            state.formData = false
        },
        removeInfo(state) {
            state.formData = true
        },
    },
})

export const formDataSelector = (state) => state.formDataReducer
export const { addInfo, removeInfo } = basketFormInfo.actions;
export default basketFormInfo.reducer;