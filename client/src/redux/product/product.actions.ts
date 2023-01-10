import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../configs/config'

export const fetchProduct: any = createAsyncThunk('product/fetchProduct', async (id: string) => {
  const { data } = await axios.get(`${API_URL}/products/${id}/`)
  return data
})
