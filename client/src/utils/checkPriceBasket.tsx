import { IBasketItem } from '../pages/basket/types'

export const checkPriceBasket = (items: IBasketItem[]) => {
  return items.reduce((sum: number, currentItem: IBasketItem) => {
    return sum + currentItem.count * currentItem.price
  }, 0)
}
