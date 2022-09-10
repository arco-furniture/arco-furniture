import { createSlice } from "@reduxjs/toolkit"
import { findColor } from "../../utils/findColor"

const initialState = {
    sumOfItems: 0,
}

export const basketSlice = createSlice({
    name: 'sumOfItems',
    initialState,
    reducers: {
        getPriceItem(state, action) {
            action.payload.map(item => {
                state.sumOfItems = state.sumOfItems + item.price / 2;
            })

        },
    },
})

export const { getPriceItem } = basketSlice.actions;
export const basketSelector = (state) => state.basketReducer
export default basketSlice.reducer;