import Chip from '@mui/material/Chip'
import React, { useEffect, useState } from 'react'
import { getSkeletonCards } from '../../utils/getSkeletonCards'
import SwiperCards from '../../components/card/SwiperCards'
import { getCards } from '../../utils/getCards'
import { useHome } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const HomeAdvice: React.FC = () => {
  const { adviceData, adviceStatus } = useHome()
  const { filterAdvice } = useActions()
  const [sortIndex, setSortIndex] = useState(0)
  const sortActiveStyles = { backgroundColor: '#4675CE', opacity: 0.6, color: '#fff' }
  const sortDefaultStyles = { backgroundColor: '#F5F5F5', color: '#555', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)' }
  const sortArray = [
    { name: 'Все', advice: 'all' },
    { name: 'Хиты продаж', advice: 'top' },
    { name: 'Новинки', advice: 'new' },
    { name: 'Скидки', advice: 'discount' },
    { name: 'Экологичные материалы', advice: 'eco' },
  ]

  // Получаем данные из mockAPI по заданным фильтрам
  useEffect(() => {
    filterAdvice('all')
  }, [])

  const handleSortItems = (index: number) => {
    setSortIndex(index)
    const request = sortArray[index].advice
    filterAdvice(request)
  }

  return (
    <article className='advice'>
      <ul className='advice__sort'>
        {sortArray.map((item, currentIndex) => (
          <li key={currentIndex}>
            <Chip
              style={sortIndex === currentIndex ? sortActiveStyles : sortDefaultStyles}
              onClick={() => handleSortItems(currentIndex)}
              label={item.name}
            />
          </li>
        ))}
      </ul>
      <div className='advice__cards'>
        {adviceStatus === 'loading' && getSkeletonCards(4)}
        {adviceStatus === 'success' && <SwiperCards>{getCards(adviceData)}</SwiperCards>}
      </div>
    </article>
  )
}
export default HomeAdvice
