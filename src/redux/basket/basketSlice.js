import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    dataBasketItems: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        getPriceItem(state, action) {
            action.payload.map(item => {
                state.totalPrice = state.totalPrice + item.price / 2;
            })
        },
        addItemForCart(state, action) {
            state.dataBasketItems = [...state.dataBasketItems, action.payload]
        },
        removeItemForCart(state, action) {
            state.dataBasketItems = state.dataBasketItems.filter(item => item.id !== action.payload)
        },
    },
})

export const { getPriceItem, addItemForCart, removeItemForCart } = basketSlice.actions;
export const basketSelector = (state) => state.basketReducer
export default basketSlice.reducer;