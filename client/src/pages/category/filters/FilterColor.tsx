import React, { memo } from 'react'
import { ButtonColor } from '../../../components'
import { COLORS } from '../../../app/constants'
import { useActions } from '../../../hooks/useActions'
import { useCategory } from '../../../hooks/useStateSelectors'

const FilterColor: React.FC = (): JSX.Element => {
  const { setColors } = useActions()
  const { dataFilter } = useCategory()
  const searchColors = dataFilter.colors

  const onClickButtonColor = (color: string) => {
    const findAlreadyAdded = searchColors.find((str: string) => str === color)
    if (findAlreadyAdded) {
      const removeAlreadyAdded = searchColors.filter((str: string) => str !== findAlreadyAdded)
      setColors(removeAlreadyAdded)
    } else {
      const isExcess = searchColors.length + 1 >= COLORS.length
      setColors(isExcess ? [] : [...searchColors, color])
    }
  }

  return (
    <div className='filters__filter-color'>
      <ul style={{ padding: '2px' }}>
        {COLORS.map((obj) => (
          <ButtonColor key={obj.nameColor} objColor={obj} onClick={onClickButtonColor} />
        ))}
      </ul>
    </div>
  )
}

export default memo(FilterColor)
