import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import React from 'react'
import { setColors } from '../../../redux/category/categorySlice'
import ButtonColor from 'pages/category/components/ButtonColor'
import { colors } from 'app/constants'

const FilterColor: React.FC = () => {
  const searchColors = useAppSelector((state) => state.category.dataFilter.colors)
  const dispatch = useAppDispatch()

  const onClickButtonColor = (color: string) => {
    const findAlreadyAdded = searchColors.find((str) => str === color)
    if (findAlreadyAdded) {
      const removeAlreadyAdded = searchColors.filter((str) => str !== findAlreadyAdded)
      dispatch(setColors(removeAlreadyAdded))
    } else {
      const isExcess = searchColors.length + 1 >= colors.length
      dispatch(setColors(isExcess ? [] : [...searchColors, color]))
    }
  }

  return (
    <div className='filters__filter-color'>
      <ul>
        {colors.map((obj) => (
          <ButtonColor key={obj.nameColor} objColor={obj} onClick={onClickButtonColor} />
        ))}
      </ul>
    </div>
  )
}

export default FilterColor
