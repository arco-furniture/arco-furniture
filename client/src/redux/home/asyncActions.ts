import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MAIN_API } from 'app/constants'
import { adviceFilterParam } from '../types'

export const filterAdvice: any = createAsyncThunk('home/filterAdvice', async (queryParam: adviceFilterParam) => {
  const { data } = await axios.get(`${MAIN_API}/advice/filter?value=${queryParam}`)
  return data
})

export const getSearchItems: any = createAsyncThunk('home/getSearchItems', async (value) => {
  const { data } = await axios.get(`${MAIN_API}/search/${value}`)
  return data
})
