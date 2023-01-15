import { actions as categoryActions } from './category/category.slice'
import { actions as authActions } from './auth/auth.slice'
import { actions as homeActions } from './home/home.slice'
import { actions as basketActions } from './basket/basket.slice'
import { actions as otherActions } from './other/other.slice'
import { actions as productActions } from './product/product.slice'

// async actions
import * as categoryAsyncActions from './category/category.actions'
import * as authAsyncActions from './auth/auth.actions'
import * as homeAsyncActions from './home/home.actions'

export const allActions = {
  ...categoryActions,
  ...authActions,
  ...homeActions,
  ...basketActions,
  ...otherActions,
  ...productActions,
  // async actions
  ...categoryAsyncActions,
  ...authAsyncActions,
  ...homeAsyncActions,
}
