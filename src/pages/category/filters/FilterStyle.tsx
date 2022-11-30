import Chip from '@mui/material/Chip'
import React, { useEffect, useState } from 'react'
import { categorySelector, setSearchStyles, setFilteredData } from '../../../redux/category/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { IItem } from '../../../types/itemTypes'
import { specsTypes } from '../../../types/basketTypes'
import { searchStyleType } from '../types'

const FilterStyle: React.FC = () => {
  const activeStyles = { backgroundColor: '#4675CE', opacity: 0.6, color: '#fff' }
  const defaultStyles = { backgroundColor: '#F5F5F5', color: '#555' }
  const { searchStyles, fetchData, searchMaterial } = useSelector(categorySelector)
  const dispatch = useDispatch()
  // const [activeMaterial, setActiveMaterial] = useState(searchMaterial);
  const styles = [
    { style: 'Классический' },
    { style: 'Прованс' },
    { style: 'Модерн' },
    { style: 'Лофт' },
    { style: 'Скандинавский' },
  ]

  useEffect(() => {
    const limitStyle = searchStyles.length !== styles.length
    if (searchStyles.length || !limitStyle) {
      const filterDataStyles = fetchData.filter((item: IItem) => {
        const findSpecs = item.specs.find((item: specsTypes) => item.specsId === 'style')
        return searchStyles.some((item: searchStyleType) => item.style === findSpecs?.value)
      })
      dispatch(setFilteredData(filterDataStyles))
    } else {
      dispatch(setFilteredData(fetchData))
    }
  }, [searchStyles])

  return (
    <div className='filters__filter-style'>
      <ul>
        {styles.map((item, index) => {
          const findStyle = searchStyles.find((searchItem: searchStyleType) => searchItem.style === item.style)
          return (
            <li key={index}>
              <Chip
                variant='outlined'
                style={findStyle ? activeStyles : defaultStyles}
                label={item.style}
                onClick={() => dispatch(setSearchStyles(item.style))}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FilterStyle
