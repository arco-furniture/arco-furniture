import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MAIN_API } from 'app/constants'

export const filterCategory: any = createAsyncThunk('home/filterCategory', async ({ data, filter, page }: any) => {
  const request = await axios.post(`${MAIN_API}/category?value=${filter}&page=${page}`, data)
  return request.data
})
