import { createSlice } from '@reduxjs/toolkit'
import { IOtherState } from '../types'

const initialState: IOtherState = {
  statusAlert: false,
  itemIsLiked: false,
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
    setItemIsLiked(state) {
      state.itemIsLiked = !state.itemIsLiked
    },
  },
})

export const { reducer, actions } = otherSlice
