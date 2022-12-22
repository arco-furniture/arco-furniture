import { useAppSelector } from '../../hooks/redux'
import { getCards } from '../../utils/getCards'
import React from 'react'

const Favorite: React.FC = () => {
  const favoriteData = useAppSelector((state) => state.home.favoriteData)

  return (
    <section className='favorite'>
      <h2 className='title'>Избранное</h2>
      <div className='favorite__items'>{getCards(favoriteData)}</div>
    </section>
  )
}

export default Favorite
