import { createSlice } from "@reduxjs/toolkit"
import { findColor } from "../../utils/findColor"

const initialState = {
    product: {},
    currentColor: {},
    dataBasketItems: []
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
        addItemForCart(state, action) {
            state.dataBasketItems = [...state.dataBasketItems, action.payload]
        },
        removeItemForCart(state, action) {
            state.dataBasketItems = state.dataBasketItems.filter(item => item.id !== action.payload) 
        },
    },
})

export const { setCurrentColor, setProduct, getFirstColor, addItemForCart, removeItemForCart } = productSlice.actions;
export const productSelector = (state) => state.productReducer
export default productSlice.reducer;