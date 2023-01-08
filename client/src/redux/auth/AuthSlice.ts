import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './asyncActions'

const initialState: any = {
  eyeStatus: false,
  isLoading: false,
  popupRegister: false,
  popupAuth: false,
  isLoggedIn: false,
  statusRegister: false,
  user: {
    firstName: '',
    email: '',
  },
}

export const authSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setEyeStatus(state) {
      state.eyeStatus = !state.eyeStatus
    },
    setPopupRegister(state) {
      state.popupRegister = !state.popupRegister
    },
    setPopupAuth(state) {
      state.popupAuth = !state.popupAuth
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
      state.user = {}
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.user.firstName = payload.user.firstName
      state.user.email = payload.user.email
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false
      state.user = {}
    })
  },
})

export const { setEyeStatus, setPopupRegister, setPopupAuth } = authSlice.actions
export default authSlice.reducer
