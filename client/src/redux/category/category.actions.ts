import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastError } from '../../api/withToastrErrorRedux'
import { CategoryService } from '../../services/category.service'

export const filterCategory = createAsyncThunk<any, any>('home/filterCategory', async (request, thunkAPI) => {
  try {
    return await CategoryService.filterCategory(request)
  } catch (error) {
    toastError('Ошибка', 'Не удалось получить категории товаров :(')
    return thunkAPI.rejectWithValue(error)
  }
})
