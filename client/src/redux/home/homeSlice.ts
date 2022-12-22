import { createSlice } from '@reduxjs/toolkit'
import { IHomeState } from '../types'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { filterAdvice } from './asyncActions'

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
    builder.addCase(filterAdvice.pending, (state) => {
      state.adviceData = []
      state.adviceStatus = 'loading'
    })
    builder.addCase(filterAdvice.fulfilled, (state, action) => {
      state.adviceData = action.payload
      state.adviceStatus = 'success'
    })
    builder.addCase(filterAdvice.rejected, (state) => {
      state.adviceStatus = 'error'
      state.adviceData = []
    })
  },
})

export const { postFavoriteItem, deleteFavoriteItem } = homeSlice.actions
export default homeSlice.reducer
