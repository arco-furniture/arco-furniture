import {colorsTypes, IItem, specsTypes, imagesTypes} from "../../types/itemTypes";

export interface ICard {
    item: IItem,
    isTop: boolean,
    favoriteData: IItem[],
}

export interface IBasketItem {
    id: number,
    title: string,
    price: number,
    oldPrice: number,
    image: string,
    specs: specsTypes[]
    color: string,
    article: string,
}


export interface ICardColors {
    colorPalette: colorsTypes[],
    visible: boolean,
    setVisible: any,
    selectedColor: string,
    setSelectedColor: any,
    isTop: boolean,
}

export interface ISwiperCards {
    children: JSX.Element[];
}

export interface ISwiperImages {
    images: imagesTypes[],
    visible: boolean,

}