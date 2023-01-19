import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from '../../api/api.helpers'
import { AuthService } from 'services/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../api/withToastrErrorRedux'

export const registerUser = createAsyncThunk<any, any>(
  'auth/register',
  async ({ email, password, firstName }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password, firstName)
      toastr.success('Регистрация', 'прошла успешно!')
      return response.data
    } catch (error) {
      toastError(error)
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const loginUser = createAsyncThunk<any, any>('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.login(email, password)
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

export const checkAuth = createAsyncThunk<any>('auth/check-auth', async (_, thunkAPI) => {
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
