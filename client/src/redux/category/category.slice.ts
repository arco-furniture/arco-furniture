// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategoryState } from './types'

const initialState: ICategoryState = {
  minMaxPrice: [30000, 210000],
  sort: 'rating',
  categoryParams: {
    paramsId: null,
    name: '',
  },
  allPages: 1,
  currentPage: 1,
  dataFilter: {
    price: [0, 0], // [min, max]
    colors: [], // ['gray', 'yellow', 'vinous', 'brown', 'green', 'blue', 'black']
    styles: [], // ['классический', 'прованс'....]
    material: '', // '' | 'массив' | 'лдлп' | 'мдф'
    tags: [], // ['классический', 'прованс'....]
  },
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryParams(state, action) {
      state.categoryParams = action.payload
    },
    setMaterial(state, { payload }: PayloadAction<string>) {
      state.dataFilter.material = payload
    },
    setColors(state, { payload }: PayloadAction<string[]>) {
      state.dataFilter.colors = [...payload]
    },
    setStyles(state, { payload }: PayloadAction<string[]>) {
      state.dataFilter.styles = [...payload]
    },
    setTags(state, { payload }: PayloadAction<string[]>) {
      state.dataFilter.tags = [...payload]
    },
    setPrice(state, { payload }: PayloadAction<[number, number]>) {
      state.dataFilter.price = payload
    },
    setChangePage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload
    },
    setChangeSort(state, { payload }: PayloadAction<string>) {
      state.sort = payload
    },
    setResetFilters(state) {
      state.minMaxPrice = [30000, 210000]
      state.dataFilter = {
        price: [30000, 210000],
        colors: [],
        styles: [],
        material: '',
        tags: [],
      }
    },
  },
})

export const { reducer, actions } = categorySlice
