// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { checkAuth, loginUser, registerUser } from './auth.actions'
import { IAuthState, IAuth } from './types'
import { IUser } from '../../types/userTypes'

const initialState: IAuthState = {
  eyeStatus: false,
  isLoadingAuth: false,
  popupRegister: false,
  popupAuth: false,
  statusRegister: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
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
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.user = payload
    },
    setIsLoadingAuth(state) {
      state.isLoadingAuth = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload }: PayloadAction<IAuth>) => {
      state.user = payload.user
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.user = null
    })

    builder.addCase(loginUser.fulfilled, (state, { payload }: PayloadAction<IAuth>) => {
      state.user = payload.user
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.user = null
    })

    builder.addCase(checkAuth.fulfilled, (state, { payload }: PayloadAction<IAuth>) => {
      state.user = payload.user
    })
  },
})

export const { reducer, actions } = authSlice

export const { setUser } = authSlice.actions
