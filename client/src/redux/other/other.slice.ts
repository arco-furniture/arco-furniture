import { createSlice } from '@reduxjs/toolkit'
import { IOtherState } from '../types'

const initialState: IOtherState = {
  statusAlert: false,
  alert: {
    message: '',
    type: '',
  },
  statusAuthorsPopup: false,
  height: null,
  width: null,
}

export const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    openAlertBar(state, actions) {
      state.alert = actions.payload
      state.statusAlert = true
    },
    closeAlertBar(state) {
      state.statusAlert = false
    },
    openAuthorsPopup(state) {
      state.statusAuthorsPopup = true
    },
    closeAuthorsPopup(state) {
      state.statusAuthorsPopup = false
    },
    setSizeBody(state, { payload }) {
      state.width = payload.width
      state.height = payload.height
    },
  },
})

export const { reducer, actions } = otherSlice
