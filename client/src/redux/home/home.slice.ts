// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterAdvice, getSearchItems } from './home.actions'
import { IItem } from '../../types/itemTypes'
import { IHomeState } from './types'

const initialState: IHomeState = {
  adviceData: [],
  adviceStatus: 'loading',
  searchStatus: 'initial',
  searchData: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setClearSearchData(state) {
      state.searchData = []
    },
    setClearSearchStatus(state) {
      state.searchStatus = 'initial'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filterAdvice.pending, (state) => {
      state.adviceData = []
      state.adviceStatus = 'loading'
    })
    builder.addCase(filterAdvice.fulfilled, (state, { payload }: PayloadAction<IItem[]>) => {
      state.adviceData = payload
      state.adviceStatus = 'success'
    })
    builder.addCase(filterAdvice.rejected, (state) => {
      state.adviceStatus = 'error'
      state.adviceData = []
    })
    builder.addCase(getSearchItems.pending, (state) => {
      state.searchData = []
      state.searchStatus = 'loading'
    })
    builder.addCase(getSearchItems.fulfilled, (state, { payload }: PayloadAction<IItem[]>) => {
      state.searchData = payload
      state.searchStatus = 'success'
    })
    builder.addCase(getSearchItems.rejected, (state) => {
      state.searchStatus = 'error'
      state.searchData = []
    })
  },
})

export const { reducer, actions } = homeSlice
