import { createSlice } from '@reduxjs/toolkit'
import { IHomeState } from '../types'
import { filterAdvice, getSearchItems } from './home.actions'

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
    builder.addCase(filterAdvice.fulfilled, (state, action) => {
      state.adviceData = action.payload
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
    builder.addCase(getSearchItems.fulfilled, (state, action) => {
      state.searchData = action.payload
      state.searchStatus = 'success'
    })
    builder.addCase(getSearchItems.rejected, (state) => {
      state.searchStatus = 'error'
      state.searchData = []
    })
  },
})

export const { reducer, actions } = homeSlice
