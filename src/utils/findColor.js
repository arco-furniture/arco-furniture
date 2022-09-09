export const findColor = (items) => {
    const colorsArray = items.map(item => item.color)
    const objColor = items.find(item => item.exist)
    const index = colorsArray.indexOf(objColor.color)

    return Object.assign({}, {index: index !== -1 ? index : 0}, objColor)
}