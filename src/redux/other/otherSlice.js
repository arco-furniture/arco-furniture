import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    statusAlert: false,
    message: '',
}

export const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {
        openAlertBar(state, actions) {
            state.message = actions.payload.message;
            state.statusAlert = true;
        },
        closeAlertBar(state) {
            state.statusAlert = false;
        },
    },
})

export const { openAlertBar, closeAlertBar } = otherSlice.actions;
export const otherSelector = (state) => state.otherReducer
export default otherSlice.reducer;