import { IItem, imagesTypes } from '../types/itemTypes'
import imageNotFound from '../images/notFound.png'

export const getBasketItem = (item: IItem, currentColor: any) => {
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

export const getCardImages = (images: imagesTypes[]) => {
  return images?.find((item: imagesTypes) => item)?.image || imageNotFound
}
