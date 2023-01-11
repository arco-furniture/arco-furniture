import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { adviceFilterParam } from '../types'
import { API_URL } from '../../configs/config'

export const filterAdvice: any = createAsyncThunk('home/filterAdvice', async (queryParam: adviceFilterParam) => {
  const { data } = await axios.get(`${API_URL}/advice/filter?value=${queryParam}`)
  return data
})

export const getSearchItems: any = createAsyncThunk('home/getSearchItems', async (value) => {
  const { data } = await axios.get(`${API_URL}/search/${value}`)
  return data
})
