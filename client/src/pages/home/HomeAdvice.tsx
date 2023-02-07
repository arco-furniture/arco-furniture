import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip'
import { SwiperCards } from 'components'
import { getCards } from '../../utils/getCards'
import { useHome } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { ADVICE_NAME } from 'app/constants'
import { adviceNameTypes } from '../../types/constantsTypes'

const HomeAdvice: React.FC = (): JSX.Element => {
  const { adviceData, adviceStatus } = useHome()
  const { filterAdvice } = useActions()
  const [sortIndex, setSortIndex] = useState<number>(0)
  const sortActiveStyles = {
    backgroundColor: '#4675CE',
    opacity: 0.6,
    color: '#fff',
    boxShadow:
      '0 3px 1px -2px rgba(0, 0, 0, 0.07), 0 4px 4px 0px rgba(0, 0, 0, 0.06), 0 2px 5px 0px rgba(0, 0, 0, 0.02)',
  }
  const sortDefaultStyles = {
    backgroundColor: '#F5F5F5',
    color: '#555',
    boxShadow:
      '0 3px 1px -2px rgba(0, 0, 0, 0.07), 0 4px 4px 0px rgba(0, 0, 0, 0.06), 0 2px 5px 0px rgba(0, 0, 0, 0.02)',
  }

  // Получаем данные из mockAPI по заданным фильтрам
  useEffect(() => {
    filterAdvice('all')
  }, [])

  const handleSortItems = (index: number) => {
    setSortIndex(index)
    const request = ADVICE_NAME[index].advice
    filterAdvice(request)
  }

  return (
    <article className='advice'>
      <ul className='advice__sort'>
        {ADVICE_NAME.map((item: adviceNameTypes, currentIndex: number) => (
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
        {adviceStatus === 'success' && <SwiperCards>{getCards(adviceData)}</SwiperCards>}
      </div>
    </article>
  )
}
export default HomeAdvice
