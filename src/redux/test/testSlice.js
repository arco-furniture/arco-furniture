import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

// AsyncThunk для асинхронных запросов
// export const fetchItems = createAsyncThunk('test/fetchItemsStatus', async () => {
//     const {data} = await axios.get(`https://6291e4289d159855f081d72e.mockapi.io/acro`)
//     return data
// })

const initialState = {
    count: 0,
    // data: [],
    // status: ''
}

export const testSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        plusCount(state) {
            state.count += 1
        },
        minusCount(state) {
            state.count -= 1
        },
    },

    // extraReducers нужны для асинхронных запросов
    // Помимо статуса success должен быть еще loading и error
    // extraReducers: (builder) => {
    //     builder.addCase(fetchItems.fulfilled, (state, action) => {
    //         state.data = action.payload;
    //         state.status = 'success'
    //     });
    // },
})


export const testSelector = (state) => state.testReducer
export const {plusCount, minusCount} = testSlice.actions;
export default testSlice.reducer;