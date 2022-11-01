import {IBasketItem} from "../types/basketTypes";
import {IItem} from "../types/itemTypes";
import {searchStyleType} from "../pages/category/types"

export interface IBasketState {
    totalPrice: number
    totalOldPrice: number
    totalBenefit: number
    basketBtnStatus: boolean
    basketOrderBtnStatus: boolean
    dataBuyInfo: []
    dataBasketItems: IBasketItem[]
}

export interface ICategoryState {
    fetchData: IItem[]
    categoryData: IItem[]
    categoryStatus: 'success' | 'error' | 'loading'
    categoryParams: {
        paramsId: null | number
        name: string
    },
    categorySort:  string // с переносом сортировки на фронт, переделать по аналогии как с categoryStatus
    filterPrice: number[]
    searchColors: searchColorType[]
    searchStyles: searchStyleType[]
    searchMaterial: 'Все' | 'Массив' | 'ЛДСП' | 'МДФ'
}

export interface IHomeState  {
    adviceData: IItem[]
    searchData: IItem[]
    adviceStatus: 'success' | 'error' | 'loading'
    searchStatus:  'success' | 'error' | 'loading'
    favoriteData: IItem[] | []
}

export interface IOtherState {
    statusAlert: boolean
    alert: {
        message: string
        type: string
    },
    statusAuthorsPopup: boolean
}

export interface IProductState  {
    product: any
    productStatus: 'success' | 'error' | 'loading'
    currentColor: object
}

type searchColorType = {
    nameColor?: string
}

