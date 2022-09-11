import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    statusAlert: false,
    alert: {
        message: '',
        type: '',
    },
    statusAuthorsPopup: false,
}

export const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {
        openAlertBar(state, actions) {
            state.alert = actions.payload;
            state.statusAlert = true;
        },
        closeAlertBar(state) {
            state.statusAlert = false;
        },
        openAuthorsPopup(state) {
            state.statusAuthorsPopup = true;
        },
        closeAuthorsPopup(state) {
            state.statusAuthorsPopup = false;
        },
    },
})

export const { openAlertBar, closeAlertBar, openAuthorsPopup, closeAuthorsPopup } = otherSlice.actions;
export const otherSelector = (state) => state.otherReducer
export default otherSlice.reducer;