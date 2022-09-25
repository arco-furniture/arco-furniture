import React from "react";
import {IItem} from "../types/itemTypes";

export const getMinMaxPrice = (items: IItem[]) => {
    if (!items.length) return [0, 0]

    const allPrice = items.map((item) => item.price)
    const minPrice = allPrice.sort((a, b) => (a - b))[0]
    const maxPrice = allPrice.sort((a, b) => (b - a))[0]

    return getRoundingPrice(minPrice, maxPrice)
}

const getRoundingPrice = (min: number, max: number) => {
    const minLastValue = min % 5000
    const maxLastValue = max % 5000

    return [(min - (5000 + minLastValue) + 5000), (max + (5000 - maxLastValue))]
}