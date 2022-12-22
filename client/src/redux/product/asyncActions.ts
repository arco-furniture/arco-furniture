import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MAIN_API } from '../../app/constants'

export const fetchProduct: any = createAsyncThunk('product/fetchProduct', async (id: string) => {
  const { data } = await axios.get(`${MAIN_API}/products/${id}/`)
  return data
})
