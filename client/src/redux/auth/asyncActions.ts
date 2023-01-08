import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MAIN_API } from 'app/constants'

export const registerUser: any = createAsyncThunk('auth/registerUser', async (data: any) => {
  const request = await axios.post(`${MAIN_API}/auth/register`, data)
  return request.data
})
