export const getRequestItems = (items) => {
  return items.map((item) => {
    return {
      _id: item._id,
      color: item.color,
      count: item.count,
    }
  })
}
