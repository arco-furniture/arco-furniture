import { createSlice } from '@reduxjs/toolkit'
import { findColor } from '../../utils/findColor'
import { IProductState } from '../types'
// eslint-disable-next-line import/named
import { getProduct } from './product.actions'

const initialState: IProductState = {
  currentColor: {},
  productData: null,
  productStatus: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getFirstColor(state, action) {
      state.currentColor = findColor(action.payload)
    },
    setProduct(state, action) {
      state.productData = action.payload
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.productData = null
      state.productStatus = 'loading'
    })
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productData = action.payload
      state.productStatus = 'success'
    })
    builder.addCase(getProduct.rejected, (state) => {
      state.productStatus = 'error'
      state.productData = null
    })
  },
})

export const { reducer, actions } = productSlice
