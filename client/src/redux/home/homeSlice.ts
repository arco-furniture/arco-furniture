import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'
import { IHomeState } from '../types'
import { IItem } from '../../types/itemTypes'
import { MAIN_API } from '../../api/constants'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'

export const fetchAdvice: any = createAsyncThunk('home/fetchAdvice', async () => {
  const { data } = await axios.get(`${MAIN_API}/products/`)
  console.log(data)
  return data
})

const { favorites } = getFavoriteFromLS()

const initialState: IHomeState = {
  adviceData: [],
  adviceStatus: 'loading',
  favoriteData: favorites,
  searchStatus: 'loading',
  searchData: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    postFavoriteItem(state, actions) {
      state.favoriteData = [...state.favoriteData, actions.payload]
    },
    deleteFavoriteItem(state, actions) {
      state.favoriteData = actions.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdvice.pending, (state) => {
      state.adviceData = []
      state.adviceStatus = 'loading'
    })
    builder.addCase(fetchAdvice.fulfilled, (state, action) => {
      state.adviceData = action.payload.filter((item: IItem) => item.advice || item.advice === 0)
      state.adviceStatus = 'success'
    })
    builder.addCase(fetchAdvice.rejected, (state) => {
      state.adviceStatus = 'error'
      state.adviceData = []
    })
  },
})

export const { postFavoriteItem, deleteFavoriteItem } = homeSlice.actions
export const homeSelector = (state: RootState) => state.homeReducer
export default homeSlice.reducer
