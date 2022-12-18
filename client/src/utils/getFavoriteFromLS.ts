export const getFavoriteFromLS = () => {
  const data = localStorage.getItem('favorites')
  const favorites = data ? JSON.parse(data) : []
  return { favorites }
}
