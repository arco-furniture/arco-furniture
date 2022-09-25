import {colorsTypes} from "../types/itemTypes";

export const findColor = (items:colorsTypes[]) => {
    const colorsArray = items.map(item => item.color)
    const objColor = items.find(item => item.exist)
    let index = {};
    if (objColor?.color) {
        index = colorsArray.indexOf(objColor.color)
    }

    return Object.assign({}, {index: index !== -1 ? index : 0}, objColor)
}