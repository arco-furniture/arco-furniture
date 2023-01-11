import { createSlice } from '@reduxjs/toolkit'
import { findColor } from '../../utils/findColor'
import { IItem } from '../../types/itemTypes'
import { IProductState } from '../types'
import { fetchProduct } from './product.actions'

const initialState: IProductState = {
  productData: {},
  productStatus: 'loading',
  currentColor: {},
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
    builder.addCase(fetchProduct.pending, (state) => {
      state.productData = {}
      state.productStatus = 'loading'
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.productData = action.payload
      state.productStatus = 'success'
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.productData = {}
      state.productStatus = 'error'
    })
  },
})

export const { reducer, actions } = productSlice
