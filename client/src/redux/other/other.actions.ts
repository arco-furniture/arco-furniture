import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { LocationService } from '../../services/location.service'

export const searchLocation = createAsyncThunk<any, any>('basket/searchLocation', async (value, thunkAPI) => {
  try {
    let data = await LocationService.searchLocation(value)
    data = data.filter((item) => item?.localityType?.name === 'город' && item.name)
    data = data.map((item) => item.name)
    return data
  } catch (error) {
    toastr.error('Ошибка', 'Не удается получить геолокацию')
    return thunkAPI.rejectWithValue(error)
  }
})
