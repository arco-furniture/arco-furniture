import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  price: [0, 250000],
  searchPrice: [0, 0],
  sort: 'rating',
  categoryParams: {
    paramsId: null,
    name: '',
  },
  allPages: 1,
  currentPage: 1,
  dataFilter: {
    minMaxPrice: [0, 0], // [min, max]
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
    setCategoryPrice(state, action) {
      state.filterPrice = action.payload
    },
    setFilteredData(state, action) {
      state.categoryData = action.payload
    },
    changeCategoryStatus(state, action) {
      state.categoryStatus = action.payload
    },
    setMaterial(state, action) {
      state.dataFilter.material = action.payload
    },
    setColors(state, action) {
      state.dataFilter.colors = [...action.payload]
    },
    setStyles(state, action) {
      state.dataFilter.styles = [...action.payload]
    },
    setTags(state, action) {
      state.dataFilter.tags = [...action.payload]
    },
    setPrice(state, action) {
      state.dataFilter.minMaxPrice = action.payload
    },
    setChangePage(state, action) {
      state.currentPage = action.payload
    },
    setChangeSort(state, action) {
      state.sort = action.payload
    },
  },
})

export const { reducer, actions } = categorySlice
