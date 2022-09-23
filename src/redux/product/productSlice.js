import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { findColor } from "../../utils/findColor"
import axios from "axios";


export const fetchProduct = createAsyncThunk('product/fetchDataProduct', async (id) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/acro?id=${id}`)
    return data
})

const initialState = {
    product: {},
    productStatus: '',
    currentColor: {},
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getFirstColor(state, action) {
            state.currentColor = findColor(action.payload)
        },
        setProduct(state, action) {
            state.product = action.payload
        },
        setCurrentColor(state, action) {
            state.currentColor = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.product = {}
            state.productStatus = 'loading';
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload[0]
            state.productStatus = 'success'
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.product = {}
            state.productStatus = 'error'
        });
    },
})

export const { setCurrentColor, setProduct, getFirstColor } = productSlice.actions;
export const productSelector = (state) => state.productReducer
export default productSlice.reducer;