import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../configs/config'
import { HomeService } from '../../services/home.service'
import { IAdviceParam } from './types'
import { IItem } from '../../types/itemTypes'

export const filterAdvice = createAsyncThunk<IItem[], IAdviceParam>('home/filterAdvice', async (queryParam) => {
  const { data } = await axios.get(`${API_URL}/advice/filter?value=${queryParam}`)
  return data
})

export const getSearchItems = createAsyncThunk<IItem[], string>('home/getSearchItems', async (value, thunkAPI) => {
  try {
    return await HomeService.searchItems(value)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
