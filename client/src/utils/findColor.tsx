import { colorType } from '../types/constantsTypes'

export const findColor = (items: colorType[]) => {
  const colorsArray = items.map((item) => item.color)
  const objColor = items.find((item) => item.exist)
  let index = {}
  if (objColor?.color) {
    index = colorsArray.indexOf(objColor.color)
  }

  return Object.assign({}, { index: index !== -1 ? index : 0 }, objColor)
}
