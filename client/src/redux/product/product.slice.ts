import { createSlice } from '@reduxjs/toolkit'
import { findColor } from '../../utils/findColor'
import { IProductState } from '../types'

const initialState: IProductState = {
  currentColor: {},
  productStatus: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getFirstColor(state, action) {
      state.currentColor = findColor(action.payload)
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload
    },
  },
})

export const { reducer, actions } = productSlice
