import { IItem, imageTypes } from '../types/itemTypes'
import imageNotFound from '../images/notFound.png'
import { IBasketPushItem } from 'redux/basket/types'

export const getBasketItem = (item: IItem, currentColor: string): IBasketPushItem => {
  return {
    _id: item._id,
    title: item.title,
    price: item.price,
    oldPrice: item.oldPrice,
    image: getCardImages(item.cardImages),
    specs: item.specs,
    color: currentColor,
    article: item.article,
    category: item.category,
  }
}

export const getCardImages = (images: imageTypes[]) => {
  return images?.find((item: imageTypes) => item)?.image || imageNotFound
}
