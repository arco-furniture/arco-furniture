import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plusCount(state) {
            state.count += 1
        },
        minusCount(state) {
            state.count -= 1
        },

        addValueForCount(state, action) {
            state.count += action.payload
        },
    }
})

export const {plusCount, minusCount, addValueForCount} = counterSlice.actions;
export default counterSlice.reducer;