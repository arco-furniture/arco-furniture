import { createAsyncThunk } from '@reduxjs/toolkit'
// import { IAuthResponse, InterfaceEmailPassword } from './user.interface'
import { errorCatch } from '../../api/api.helpers'
import { AuthService } from 'services/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../api/withToastrErrorRedux'

export const registerUser = createAsyncThunk<any, any>(
  'auth/register',
  async ({ email, password, firstName }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password, firstName)
      toastr.success('Регистрация', 'Регистрация прошла успешно!')
      return response.data
    } catch (error) {
      toastError(error)
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const login = createAsyncThunk<any, any>('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.login(email, password)
    // toaster.success('Login', 'Completed successfully')
    return response.data
  } catch (error) {
    // toastError(error)
    return thunkAPI.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
})

export const checkAuth = createAsyncThunk<any>('auth/check-auth', async (_, thunkAPI) => {
  try {
    const response = await AuthService.getNewTokens()
    return response.data
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      // toaster.error('Logout', 'Your authorizaiton is finished, plz sign in again')
      thunkAPI.dispatch(logout())
    }
    return thunkAPI.rejectWithValue(error)
  }
})
