import React, { memo } from 'react'
import ButtonColor from 'components/buttonColor/ButtonColor'
import { colors } from 'app/constants'
import { useActions } from '../../../hooks/useActions'
import { useCategory } from '../../../hooks/useStateSelectors'

const FilterColor: React.FC = () => {
  const { setColors } = useActions()
  const { dataFilter } = useCategory()
  const searchColors = dataFilter.colors

  const onClickButtonColor = (color: string) => {
    const findAlreadyAdded = searchColors.find((str) => str === color)
    if (findAlreadyAdded) {
      const removeAlreadyAdded = searchColors.filter((str) => str !== findAlreadyAdded)
      setColors(removeAlreadyAdded)
    } else {
      const isExcess = searchColors.length + 1 >= colors.length
      setColors(isExcess ? [] : [...searchColors, color])
    }
  }

  return (
    <div className='filters__filter-color'>
      <ul style={{ padding: '2px' }}>
        {colors.map((obj) => (
          <ButtonColor key={obj.nameColor} objColor={obj} onClick={onClickButtonColor} />
        ))}
      </ul>
    </div>
  )
}

export default memo(FilterColor)
