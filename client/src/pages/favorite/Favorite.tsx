import { getCards } from '../../utils/getCards'
import React from 'react'
import { useHome } from '../../hooks/useStateSelectors'

const Favorite: React.FC = () => {
  const { favoriteData } = useHome()

  return (
    <section className='favorite'>
      <h2 className='title'>Избранное</h2>
      <div className='favorite__items'>{getCards(favoriteData)}</div>
    </section>
  )
}

export default Favorite
