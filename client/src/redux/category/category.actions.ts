import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../configs/config'

export const filterCategory = createAsyncThunk<any, any>('home/filterCategory', async ({ data, filter, page }) => {
  const request = await axios.post(`${API_URL}/category?value=${filter}&page=${page}`, data)
  return request.data
})
