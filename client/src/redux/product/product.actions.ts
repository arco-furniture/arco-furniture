import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastError } from '../../api/withToastrErrorRedux'
import { ProductService } from '../../services/product.service'

export const getProduct = createAsyncThunk<any, any>('product/getProduct', async (id, thunkAPI) => {
  try {
    return await ProductService.getProduct(id)
  } catch (error) {
    toastError(error)
    return thunkAPI.rejectWithValue(error)
  }
})
