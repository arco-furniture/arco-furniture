export const getBasketFromLS = () => {
  const data = localStorage.getItem('items')
  const items = data ? JSON.parse(data) : []
  return { items }
}
