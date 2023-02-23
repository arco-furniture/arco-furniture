// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { checkPriceBasket } from '../../utils/checkPriceBasket'
import { checkOldPriceBasket } from '../../utils/checkOldPriceBasket'
import { getBasketFromLS } from '../../utils/getBasketFromLS'
import { clearBasketItems, paymentBasketItems } from './basket.actions'
import { IBasketPushItem, IBasketState, ICountBasket } from './types'
import { IBasketItem } from '../../pages/basket/types'

const { items } = getBasketFromLS()

const initialState: IBasketState = {
  totalPrice: 0,
  totalOldPrice: 0,
  dataBasketItems: items,
  isLoadingBasket: false,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setIsLoadingBasket(state, action: PayloadAction<boolean>) {
      state.isLoadingBasket = action.payload
    },
    addItemForBasket(state, { payload }: PayloadAction<IBasketPushItem>) {
      const findItem = state.dataBasketItems.find((item: IBasketItem) => item._id === payload._id)
      if (findItem) {
        findItem.count++
        const filterItems = state.dataBasketItems.filter((item: IBasketItem) => item !== findItem)
        state.dataBasketItems = [...filterItems, findItem]
      } else {
        state.dataBasketItems.push({ ...payload, count: 1 })
      }
      state.totalPrice = checkPriceBasket(state.dataBasketItems)
      state.totalOldPrice = checkOldPriceBasket(state.dataBasketItems)
    },
    removeItemForBasket(state, { payload }: PayloadAction<IBasketPushItem>) {
      state.dataBasketItems = state.dataBasketItems.filter((item: IBasketItem) => item._id !== payload._id)
      state.totalPrice = checkPriceBasket(state.dataBasketItems)
      state.totalOldPrice = checkOldPriceBasket(state.dataBasketItems)
    },
    handleCountItem(state, { payload }: PayloadAction<ICountBasket>) {
      const currentId = payload._id
      const statusBoolean = payload.status
      const newItems = state.dataBasketItems.map((item: IBasketItem) => {
        if (item._id === currentId) {
          switch (statusBoolean) {
            case true: {
              item.count += 1
              return item
            }
            case false: {
              if (item.count > 1) {
                item.count -= 1
                return item
              }
            }
          }
        }
        return item
      })
      state.dataBasketItems = [...newItems]
      state.totalPrice = checkPriceBasket(state.dataBasketItems)
      state.totalOldPrice = checkOldPriceBasket(state.dataBasketItems)
    },
    checkBasketItems(state) {
      state.totalPrice = checkPriceBasket(state.dataBasketItems)
      state.totalOldPrice = checkOldPriceBasket(state.dataBasketItems)
    },
    setClearBasketState(state) {
      state.dataBasketItems = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearBasketItems.fulfilled, (state) => {
      state.dataBasketItems = []
    })
    builder.addCase(paymentBasketItems.fulfilled, (state) => {
      state.dataBasketItems = []
    })
  },
})

export const { reducer, actions } = basketSlice
