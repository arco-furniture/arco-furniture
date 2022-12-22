import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MAIN_API } from 'app/constants'

export const filterCategory: any = createAsyncThunk('home/filterCategory', async ({ data, filter }: any) => {
  const request = await axios.post(`${MAIN_API}/category?value=${filter}`, data)
  return request.data
})
