import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import {getMinMaxPrice} from "../../utils/getMinMaxPrice";

export const fetchDataCategory = createAsyncThunk('category/fetchDataCategory', async (requestFilter) => {
    const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/acro${requestFilter}`)
    return data
})

const initialState = {
    fetchData: [],
    categoryData: [],
    categoryStatus: '',
    categoryParams: {
        paramsId: null,
        name: ''
    },
    categorySort: 'rating',
    filterPrice: [10000, 100000],
    searchColors: [],
    searchStyles: [],
    searchMaterial: "Все"
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryParams(state, action) {
            state.categoryParams = action.payload;
        },
        setCategorySort(state, action) {
            state.categorySort = action.payload;
        },
        setCategoryPrice(state, action) {
            state.filterPrice = action.payload;
        },
        setFilteredData(state, action) {
            state.categoryData = action.payload
        },
        changeCategoryStatus(state, action) {
            state.categoryStatus = action.payload
        },
        setSearchColors(state, action) {
            const currentColorName = action.payload
            const findColor = state.searchColors.find((item) => item.nameColor === currentColorName);
            if (findColor) {
                state.searchColors = state.searchColors.filter((item) => item.nameColor !== currentColorName)
            } else {
                state.searchColors = [...state.searchColors, {nameColor: currentColorName}]
            }
        },
        setSearchStyles(state, action) {
            const currentStyleName = action.payload;
            const findStyle = state.searchStyles.find((item) => item.style === currentStyleName);
            if (findStyle) {
                state.searchStyles = state.searchStyles.filter((item) => item.style !== currentStyleName)
            } else {
                state.searchStyles = [...state.searchStyles, {style: currentStyleName}]
            }
        },
        setSearchMaterial(state, action) {
            state.searchMaterial = action.payload
        },
        resetSettingsCategory(state) {
            state.filterPrice = [10000, 100000]
            state.searchColors = []
            state.searchStyles = []
            state.searchMaterial = "Все"
        }


    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataCategory.pending, (state) => {
            state.categoryStatus = 'loading';
            state.fetchData = [];
        });
        builder.addCase(fetchDataCategory.fulfilled, (state, action) => {
            state.fetchData = action.payload
            state.categoryData = action.payload
            state.filterPrice = getMinMaxPrice(action.payload);
            state.categoryStatus = 'success'
        });
        builder.addCase(fetchDataCategory.rejected, (state) => {
            state.categoryStatus = 'error'
            state.fetchData = [];
        });
    },
})

export const {
    setCategoryParams,
    setCategorySort,
    setFilteredData,
    changeCategoryStatus,
    setCategoryPrice,
    setSearchColors,
    setSearchStyles,
    setSearchMaterial,
    resetSettingsCategory
} = categorySlice.actions;
export const categorySelector = (state) => state.categoryReducer
export const paramsSelector = (state) => state.categoryReducer.categoryParams
export const filterPriceSelector = (state) => state.categoryReducer.filterPrice
export const searchColorSelector = (state) => state.categoryReducer.searchColors
export default categorySlice.reducer;