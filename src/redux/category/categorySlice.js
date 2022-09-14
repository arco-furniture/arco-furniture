import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const fetchDataCategory = createAsyncThunk('category/fetchDataCategory', async (requestFilter) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/advice${requestFilter}`)
    return data
})

const initialState = {
    categoryData: [],
    categoryStatus: '',
    categoryParams: {
        id: 0,
        name: ''
    }
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryParams(state, action) {
            state.categoryParams = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataCategory.pending, (state) => {
            state.categoryData = [];
            state.categoryStatus = 'loading';
        });
        builder.addCase(fetchDataCategory.fulfilled, (state, action) => {
            state.categoryData = action.payload
            state.categoryStatus = 'success'
        });
        builder.addCase(fetchDataCategory.rejected, (state) => {
            state.categoryStatus = 'error'
            state.categoryData = [];
        });
    },
})

export const {setCategoryParams} = categorySlice.actions;
export const categorySelector = (state) => state.categoryReducer
export const paramsSelector = (state) => state.categoryReducer.categoryParams
export default categorySlice.reducer;