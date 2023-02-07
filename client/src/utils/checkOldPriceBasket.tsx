import { IBasketItem } from 'pages/basket/types'

export const checkOldPriceBasket = (items: IBasketItem[]) => {
  return items.reduce((sum: number, currentItem: any) => {
    return sum + currentItem.count * currentItem.oldPrice
  }, 0)
}
