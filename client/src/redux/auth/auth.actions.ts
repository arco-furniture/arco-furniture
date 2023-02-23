import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from '../../api/api.helpers'
import { AuthService } from '../../services/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../api/withToastrErrorRedux'
import { IAuth, IAuthUser, IRegisterUser } from './types'

export const checkAuth = createAsyncThunk<IAuth>('auth/check-auth', async (_, thunkAPI) => {
  try {
    const response = await AuthService.getNewTokens()
    return response.data
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      toastr.error('Авторизация', 'Ваша авторизация завершена, пожалуйста, войдите в систему еще раз')
      logout()
    }
    return thunkAPI.rejectWithValue(error)
  }
})

export const registerUser = createAsyncThunk<IAuth, IRegisterUser>('auth/register', async (dataRegister, thunkAPI) => {
  try {
    const response = await AuthService.register(dataRegister)
    toastr.success('Регистрация', 'прошла успешно!')
    return response.data
  } catch (error) {
    toastError(error)
    return thunkAPI.rejectWithValue(error)
  }
})

export const loginUser = createAsyncThunk<IAuth, IAuthUser>('auth/login', async (dataAuth, thunkAPI) => {
  try {
    const response = await AuthService.login(dataAuth)
    toastr.success('Авторизация', 'прошла успешно!')
    return response.data
  } catch (error) {
    toastError(error)
    return thunkAPI.rejectWithValue(error)
  }
})

export const logout = () => {
  AuthService.logout()
}
