import { createSlice } from '@reduxjs/toolkit'
import { checkPriceBasket } from '../../utils/checkPriceBasket'
import { checkOldPriceBasket } from '../../utils/checkOldPriceBasket'
import { IBasketItem } from '../../types/basketTypes'
import { RootState } from '../store'
import { IBasketState } from '../types'

const initialState: IBasketState = {
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
      const findItem = state.dataBasketItems.find((item: IBasketItem) => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
        const filterItems = state.dataBasketItems.filter((item: IBasketItem) => item !== findItem)
        state.dataBasketItems = [...filterItems, findItem]
      } else {
        state.dataBasketItems.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = checkPriceBasket(state.dataBasketItems)
      state.totalOldPrice = checkOldPriceBasket(state.dataBasketItems)
    },
    removeItemForBasket(state, action) {
      state.dataBasketItems = state.dataBasketItems.filter((item: IBasketItem) => item.id !== action.payload.id)
      state.totalPrice = checkPriceBasket(state.dataBasketItems)
      state.totalOldPrice = checkOldPriceBasket(state.dataBasketItems)
    },
    handleCountItem(state, action) {
      const currentId = action.payload.id
      const statusBoolean = action.payload.status
      const newItems = state.dataBasketItems.map((item: IBasketItem) => {
        if (item.id === currentId) {
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

    // все что ниже, нужно рефакторить
    changeBasketBtnStatus(state, action) {
      state.basketBtnStatus = !!action.payload
    },
    getBuyInfo(state, action) {
      state.dataBuyInfo = action.payload
    },
  },
})

export const { addItemForBasket, removeItemForBasket, handleCountItem, changeBasketBtnStatus, getBuyInfo } =
  basketSlice.actions
export const basketSelector = (state: RootState) => state.basketReducer
export default basketSlice.reducer
