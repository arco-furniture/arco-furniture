// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAlert, IOtherState } from './types'

const initialState: IOtherState = {
  statusAlert: false,
  itemIsLiked: false,
  alert: {
    message: '',
    type: '',
  },
  statusAuthorsPopup: false,
  statusPaymentPopup: false,
  statusPopupProject: false,
  paymentValue: null,
  activePreloader: false,
  isLoading: true,
}

export const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = false
    },
    openAlertBar(state, { payload }: PayloadAction<IAlert>) {
      state.alert = payload
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
    openPaymentPopup(state, { payload }: PayloadAction<number>) {
      state.statusPaymentPopup = true
      state.paymentValue = payload
    },
    closePaymentPopup(state) {
      state.statusPaymentPopup = false
      state.paymentValue = null
    },
    closePopupProject(state) {
      state.statusPopupProject = false
    },
    openPopupProject(state) {
      state.statusPopupProject = true
    },
    setActivePreloader(state, { payload }: PayloadAction<boolean>) {
      state.activePreloader = payload
    },
  },
})

export const { reducer, actions } = otherSlice

export const { openPaymentPopup, setIsLoading } = otherSlice.actions
