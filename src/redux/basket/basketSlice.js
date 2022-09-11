import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    totalOldPrice: 0,
    totalBenefit: 0,
    basketBtnStatus: true,
    basketOrderBtnStatus: true,
    dataBuyInfo: [],
    dataBasketItems: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemForCart(state, action) {
            action.payload.count = 1;
            state.dataBasketItems = [...state.dataBasketItems, action.payload];
            state.totalPrice += action.payload.price;
            state.totalOldPrice += action.payload.oldPrice;
            state.totalBenefit += action.payload.oldPrice - action.payload.price;
        },
        removeItemForCart(state, action) {
            state.dataBasketItems = state.dataBasketItems.filter(item => item.id !== action.payload.id);
            state.totalPrice -= action.payload.item.count * action.payload.item.price;
            state.totalOldPrice -= action.payload.item.oldPrice;
            state.totalBenefit -= action.payload.item.oldPrice - action.payload.item.price;
        },
        moreCoutItem(state, action) {
            state.dataBasketItems.map(item => {
                if (item.id === action.payload.id) {
                    item.count++
                    state.totalPrice += item.price
                    state.totalOldPrice += item.oldPrice;
                    state.totalBenefit += action.payload.oldPrice - action.payload.price;
                }
            })
        },
        lessCoutItem(state, action) {
            if (action.payload.item.count > 1) {
                state.dataBasketItems.map(item => {
                    if (item.id === action.payload.id) {
                        item.count = item.count - 1
                        state.totalPrice -= item.price
                        state.totalOldPrice -= item.oldPrice;
                        state.totalBenefit -= action.payload.oldPrice - action.payload.price;
                    }
                })
            }
            return
        },
        changeBasketBtnStatus(state, action) {
            if (action.payload === true) {
                state.basketBtnStatus = false
            } else {
                state.basketBtnStatus = true
            }
        },
        getBuyInfo(state, action) {
            state.dataBuyInfo = action.payload;
            // console.log(action.payload, 'ВИТЯ ЖУК')
        },
    },
})

export const { addItemForCart, removeItemForCart, moreCoutItem, lessCoutItem, changeBasketBtnStatus, getBuyInfo } = basketSlice.actions;
export const basketSelector = (state) => state.basketReducer
export default basketSlice.reducer;