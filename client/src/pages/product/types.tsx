import { imageTypes } from '../../types/itemTypes'

export interface IProductPreview {
  images: imageTypes[]
  thumbsSwiper: any
}

export interface IProductSlides {
  images: imageTypes[]
  setThumbsSwiper: any
}

export type specsNamesTypes = {
  name: string
  specsNameId: 'style' | 'material' | 'size'
}

export interface IProductSpecs {
  specs: specsNamesTypes[]
}
