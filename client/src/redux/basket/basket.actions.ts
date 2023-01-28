import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { BasketService } from '../../services/basket.service'
import { setUser } from '../auth/auth.slice'
import { toastError } from '../../api/withToastrErrorRedux'
import { openPaymentPopup } from '../other/other.slice'

export const clearBasketItems = createAsyncThunk('basket/clearBasketItems', async (_, thunkAPI) => {
  try {
    const data = await BasketService.clearBasketItems()
    thunkAPI.dispatch(setUser(data))
    localStorage.removeItem('items')
  } catch (error) {
    toastr.error('Ошибка', 'Не удалось очистить корзину')
    return thunkAPI.rejectWithValue(error)
  }
})

export const paymentBasketItems = createAsyncThunk('basket/paymentBasketItems', async (_, thunkAPI) => {
  try {
    const { user, orderAmount } = await BasketService.paymentBasketItems()
    await thunkAPI.dispatch(setUser(user))
    await thunkAPI.dispatch(openPaymentPopup(orderAmount))
    localStorage.removeItem('items')
  } catch (error) {
    toastError(error)
    return thunkAPI.rejectWithValue(error)
  }
})
