import { getFavoriteFromLS } from './getFavoriteFromLS'
import { IItem } from '../types/itemTypes'

export const handleChangeFavorite = ({ isFavorite, item }) => {
  const { favorites } = getFavoriteFromLS()
  if (!isFavorite) {
    const newFavorite = [...favorites, item]
    localStorage.setItem('favorites', JSON.stringify(newFavorite))
  } else {
    const deleteFavorite = favorites.filter((favorite: IItem) => favorite._id !== item._id)
    localStorage.setItem('favorites', JSON.stringify(deleteFavorite))
  }
}
