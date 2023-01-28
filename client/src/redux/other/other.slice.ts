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
  statusPaymentPopup: false,
  paymentValue: null,
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
    openPaymentPopup(state, action) {
      state.statusPaymentPopup = true
      state.paymentValue = action.payload
    },
    closePaymentPopup(state) {
      state.statusPaymentPopup = false
      state.paymentValue = null
    },
  },
})

export const { reducer, actions } = otherSlice

export const { openPaymentPopup } = otherSlice.actions
