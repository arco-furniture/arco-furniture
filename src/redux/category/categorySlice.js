import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import {getMinMaxPrice} from "../../utils/getMinMaxPrice"

export const fetchDataCategory = createAsyncThunk('category/fetchDataCategory', async (requestFilter) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/acro${requestFilter}`)
    return data
})

const initialState = {
    categoryData: [],
    categoryStatus: '',
    categoryParams: {
        paramsId: null,
        name: ''
    },
    categorySort: 'rating',
    filterPrice: [10000, 100000]
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryParams(state, action) {
            state.categoryParams = action.payload;
        },
        setCategorySort(state, action) {
            state.categorySort = action.payload;
        },
        setCategoryPrice(state, action) {
            state.filterPrice = action.payload;
        },
        setFilteredData(state, action) {
            state.categoryData = action.payload
        },
        changeCategoryStatus(state, action) {
            state.categoryStatus = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataCategory.pending, (state) => {
            state.categoryStatus = 'loading';
        });
        builder.addCase(fetchDataCategory.fulfilled, (state, action) => {
            state.categoryData = action.payload
            state.filterPrice = getMinMaxPrice(action.payload);
            state.categoryStatus = 'success'
        });
        builder.addCase(fetchDataCategory.rejected, (state) => {
            state.categoryStatus = 'error'
        });
    },
})

export const {setCategoryParams, setCategorySort, setFilteredData, changeCategoryStatus} = categorySlice.actions;
export const categorySelector = (state) => state.categoryReducer
export const paramsSelector = (state) => state.categoryReducer.categoryParams
export const sortSelector = (state) => state.categoryReducer.categorySort
export const filterPriceSelector = (state) => state.categoryReducer.filterPrice
export default categorySlice.reducer;