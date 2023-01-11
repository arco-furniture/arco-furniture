import { reducer as authReducer } from './auth/auth.slice'
import { reducer as homeReducer } from './home/home.slice'
import { reducer as basketReducer } from './basket/basket.slice'
import { reducer as categoryReducer } from './category/category.slice'
import { reducer as otherReducer } from './other/other.slice'
import { reducer as productReducer } from './product/product.slice'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const reducers = {
  toastr: toastrReducer,
  basket: basketReducer,
  auth: authReducer,
  home: homeReducer,
  category: categoryReducer,
  other: otherReducer,
  product: productReducer,
}
