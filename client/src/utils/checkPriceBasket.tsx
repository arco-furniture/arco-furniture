import { IBasketItem } from '../types/basketTypes'

export const checkPriceBasket = (items: IBasketItem[]) => {
  return items.reduce((sum: number, currentItem: any) => {
    return sum + currentItem.count * currentItem.price
  }, 0)
}
