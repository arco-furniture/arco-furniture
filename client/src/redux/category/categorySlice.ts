import { createSlice } from '@reduxjs/toolkit'
import { filterCategory } from './asyncActions'

const initialState: any = {
  categoryData: [],
  minMaxPrice: [0, 0],
  categoryStatus: 'loading',
  categorySort: 'rating',
  categoryParams: {
    paramsId: null,
    name: '',
  },
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
    setCategorySort(state, action) {
      state.categorySort = action.payload
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
  },
  extraReducers: (builder) => {
    builder.addCase(filterCategory.pending, (state) => {
      state.categoryStatus = 'loading'
      state.categoryData = []
    })
    builder.addCase(filterCategory.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.categoryStatus = 'success'
      state.categoryData = payload.data
      state.minMaxPrice = payload.minMaxPrice
    })
    builder.addCase(filterCategory.rejected, (state) => {
      state.categoryStatus = 'error'
      state.categoryData = []
    })
  },
})

export const { setCategoryParams, setCategorySort, setStyles, setMaterial, setColors, setTags, setPrice } =
  categorySlice.actions
export default categorySlice.reducer
