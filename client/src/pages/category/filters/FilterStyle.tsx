import Chip from '@mui/material/Chip'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IItem } from '../../../types/itemTypes'
import { specsTypes } from '../../../types/basketTypes'
import { setStyles } from '../../../redux/category/categorySlice'
import { styles } from 'app/constants'

const FilterStyle: React.FC = () => {
  const searchStyles = useAppSelector((state) => state.category.dataFilter.styles)
  const activeStyles = { backgroundColor: '#4675CE', opacity: 0.6, color: '#fff' }
  const defaultStyles = { backgroundColor: '#F5F5F5', color: '#555' }
  const dispatch = useAppDispatch()

  const onClickButtonStyle = (style: string) => {
    const findAlreadyAdded = searchStyles.find((str) => str === style)
    if (findAlreadyAdded) {
      const removeAlreadyAdded = searchStyles.filter((str) => str !== findAlreadyAdded)
      dispatch(setStyles(removeAlreadyAdded))
    } else {
      const isExcess = searchStyles.length + 1 >= styles.length
      dispatch(setStyles(isExcess ? [] : [...searchStyles, style]))
    }
  }

  return (
    <div className='filters__filter-style'>
      <ul>
        {styles.map((item) => {
          const findStyle = searchStyles.find((str) => str === item.style)
          return (
            <li key={item.style}>
              <Chip
                variant='outlined'
                style={findStyle ? activeStyles : defaultStyles}
                label={item.style}
                onClick={() => onClickButtonStyle(item.style)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FilterStyle
