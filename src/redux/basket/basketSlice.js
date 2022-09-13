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
        addItemForBasket(state, action) {
            let result = state.dataBasketItems.find(item => item.id === action.payload.id);
            if (result) {
                console.log(action.payload.count, 'уже есть')
                let objIndex = state.dataBasketItems.findIndex((item => item.id == action.payload.id));
                state.dataBasketItems[objIndex].count += 1
                state.totalPrice += action.payload.price;
            } else {
                console.log('добавил')
                action.payload.count = 1;
                action.payload.active = true;
                state.dataBasketItems = [...state.dataBasketItems, action.payload];
                state.totalPrice += action.payload.price;
                state.totalOldPrice += action.payload.oldPrice;
                state.totalBenefit += action.payload.oldPrice - action.payload.price;
            }

        },
        removeItemForBasket(state, action) {
            let objIndex = state.dataBasketItems.findIndex((item => item.id == action.payload.id));
            if (state.dataBasketItems[objIndex].active) {
                state.dataBasketItems = state.dataBasketItems.filter(item => item.id !== action.payload.id);
                state.totalPrice -= action.payload.item.count * action.payload.item.price;
                state.totalBenefit -= (action.payload.oldPrice - action.payload.item.price) * action.payload.item.count;
                state.totalOldPrice -= action.payload.oldPrice * action.payload.item.count;
            }
            state.dataBasketItems = state.dataBasketItems.filter(item => item.id !== action.payload.id);
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
        },
        getBuyStatusItem(state, action) {
            let objIndex = state.dataBasketItems.findIndex((item => item.id == action.payload.id));
            state.dataBasketItems[objIndex].active = !state.dataBasketItems[objIndex].active
            if (state.dataBasketItems[objIndex].active === false) {
                state.totalPrice -= action.payload.price * action.payload.item.count;
                state.totalOldPrice -= action.payload.oldPrice * action.payload.item.count;
                state.totalBenefit -= (action.payload.oldPrice - action.payload.item.price) * action.payload.item.count;
            } else {
                state.totalPrice += action.payload.price * action.payload.item.count;
            }
        },
    },
})

export const { addItemForBasket, removeItemForBasket, moreCoutItem, lessCoutItem, changeBasketBtnStatus, getBuyInfo, getBuyStatusItem } = basketSlice.actions;
export const basketSelector = (state) => state.basketReducer
export default basketSlice.reducer;