import {imagesTypes} from "../../types/itemTypes";

export interface IProductPreview {
    images: imagesTypes[],
    thumbsSwiper: any,
}

export interface IProductSlides {
    images: imagesTypes[],
    setThumbsSwiper: any,
}

export type specsNamesTypes = {
    name: string,
    specsNameId: "style" | "material" | "size",
}