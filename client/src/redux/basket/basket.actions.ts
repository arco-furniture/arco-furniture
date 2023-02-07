import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { BasketService } from '../../services/basket.service'
import { setUser } from '../auth/auth.slice'
import { toastError } from '../../api/withToastrErrorRedux'
import { openPaymentPopup } from '../other/other.slice'
import { IUser } from '../../types/userTypes'
import { IPayment, IPostItems } from '../auth/types'

export const clearBasketItems = createAsyncThunk<IUser>('basket/clearBasketItems', async (_, thunkAPI) => {
  try {
    const data = await BasketService.clearBasketItems()
    thunkAPI.dispatch(setUser(data))
    localStorage.removeItem('items')
  } catch (error) {
    toastr.error('Ошибка', 'Не удалось очистить корзину')
    return thunkAPI.rejectWithValue(error)
  }
})

export const paymentBasketItems = createAsyncThunk<IPayment>('basket/paymentBasketItems', async (_, thunkAPI) => {
  try {
    const { user, orderAmount } = await BasketService.paymentBasketItems()
    await thunkAPI.dispatch(setUser(user))
    await thunkAPI.dispatch(openPaymentPopup(orderAmount))
    window.scrollTo(0, 0)
    localStorage.removeItem('items')
  } catch (error) {
    toastError(error)
    return thunkAPI.rejectWithValue(error)
  }
})

export const postBasketItems = createAsyncThunk<void, IPostItems[]>(
  'basket/postBasketItems',
  async (item, thunkAPI) => {
    try {
      await BasketService.postBasketItems(item)
    } catch (error) {
      toastr.error('Ошибка', 'Не получается добавить товар в корзину')
      return thunkAPI.rejectWithValue(error)
    }
  },
)
