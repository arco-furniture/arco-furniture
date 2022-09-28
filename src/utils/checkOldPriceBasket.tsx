import {IBasketItem} from "../types/basketTypes";

export const checkOldPriceBasket = (items: IBasketItem[]) => {
    return items.reduce((sum: number, currentItem: any) => {
        return sum + currentItem.count * currentItem.oldPrice
    }, 0)
}