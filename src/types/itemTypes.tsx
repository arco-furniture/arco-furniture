export interface IItem {
    id: number,
    category: number,
    rating: number,
    article: string,
    title: string,
    advice: number,
    specs: specsTypes[],
    price: number,
    oldPrice: number,
    mark?: string,
    description: string,
    "colors": colorsTypes[],
    "productImages": imagesTypes[],
    "cardImages": imagesTypes[],
    count?: number,
}

export type specsTypes = {
    value: string;
    specsId: string;
}

export type colorsTypes = {
    nameColor: string;
    color: string;
    exist: boolean;
}

export type imagesTypes = {
    image: string;
}
