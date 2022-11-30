import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { findColor } from '../../utils/findColor'
import axios from 'axios'
import { RootState } from '../store'
import { IItem } from '../../types/itemTypes'
import { IProductState } from '../types'
import { MAIN_API } from '../../api/constants'

export const fetchProduct: any = createAsyncThunk('product/fetchDataProduct', async (id) => {
  const { data } = await axios.get(`${MAIN_API}/acro?id=${id}`)
  return data
})

const initialState: IProductState = {
  product: {},
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
      state.product = action.payload
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.product = {}
      state.productStatus = 'loading'
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload.find((item: IItem) => item)
      state.productStatus = 'success'
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.product = {}
      state.productStatus = 'error'
    })
  },
})

export const { setCurrentColor, setProduct, getFirstColor } = productSlice.actions
export const productSelector = (state: RootState) => state.productReducer
export default productSlice.reducer
