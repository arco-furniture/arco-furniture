import { getCards } from '../../utils/getCards'
import React, { useEffect } from 'react'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { useOther } from '../../hooks/useStateSelectors'
import { useNavigate } from 'react-router-dom'

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
