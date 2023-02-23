import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCards } from '../../utils/getCards'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { useOther } from '../../hooks/useStateSelectors'

const Favorite: React.FC = (): JSX.Element => {
  const { favorites } = getFavoriteFromLS()
  const { itemIsLiked } = useOther()
  const navigate = useNavigate()

  useEffect(() => {
    const newFavorites = JSON.stringify(favorites)
    localStorage.setItem('favorites', newFavorites)
  }, [itemIsLiked])

  if (!favorites.length) {
    navigate('/')
  }

  return (
    <section className='favorite'>
      <h2 className='title'>Избранное</h2>
      <div className='favorite__items'>{getCards(favorites)}</div>
    </section>
  )
}

export default Favorite
