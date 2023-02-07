// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { findColor } from '../../utils/findColor'
import { ICurrentColor, IProductState } from './types'

const initialState: IProductState = {
  currentColor: { color: '', exist: false, index: 0 },
  productStatus: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getFirstColor(state, action) {
      state.currentColor = findColor(action.payload)
    },
    setCurrentColor(state, { payload }: PayloadAction<ICurrentColor>) {
      state.currentColor = payload
    },
  },
})

export const { reducer, actions } = productSlice
