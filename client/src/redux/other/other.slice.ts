// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAlert, IOtherState } from './types'
import { searchLocation } from './other.actions'

const initialState: IOtherState = {
  statusAlert: false,
  itemIsLiked: false,
  currentLocation: sessionStorage.getItem('location'),
  locations: [],
  statusLocations: 'initial',
  alert: {
    message: '',
    type: '',
  },
  statusAuthorsPopup: false,
  statusPaymentPopup: false,
  statusPopupProject: false,
  statusPopupLocation: false,
  paymentValue: null,
}

export const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
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
    closePopupLocation(state) {
      state.statusPopupLocation = false
    },
    openPopupLocation(state) {
      state.statusPopupLocation = true
    },
    clearLocation(state) {
      state.statusLocations = 'initial'
      state.locations = []
    },
    setCurrentLocation(state, { payload }: PayloadAction<string>) {
      state.currentLocation = payload
      sessionStorage.setItem('location', payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchLocation.fulfilled, (state, { payload }) => {
      state.locations = payload
      state.statusLocations = 'success'
    })
    builder.addCase(searchLocation.rejected, (state) => {
      state.locations = []
      state.statusLocations = 'error'
    })
    builder.addCase(searchLocation.pending, (state) => {
      state.locations = []
      state.statusLocations = 'loading'
    })
  },
})

export const { reducer, actions } = otherSlice

export const { openPaymentPopup } = otherSlice.actions
