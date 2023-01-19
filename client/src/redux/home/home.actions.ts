import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { adviceFilterParam } from '../types'
import { API_URL } from '../../configs/config'
import { HomeService } from '../../services/home.service'

export const filterAdvice: any = createAsyncThunk('home/filterAdvice', async (queryParam: adviceFilterParam) => {
  const { data } = await axios.get(`${API_URL}/advice/filter?value=${queryParam}`)
  return data
})

export const getSearchItems = createAsyncThunk<any, any>('home/getSearchItems', async (value, thunkAPI) => {
  try {
    return await HomeService.searchItems(value)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
