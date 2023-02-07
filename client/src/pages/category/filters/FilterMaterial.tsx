import { MenuItem, TextField } from '@mui/material'
import React, { memo } from 'react'
import { useCategory } from '../../../hooks/useStateSelectors'
import { useActions } from '../../../hooks/useActions'
import { MaterialType } from 'pages/category/types'

const FilterMaterial: React.FC = (): JSX.Element => {
  const { dataFilter } = useCategory()
  const { setMaterial } = useActions()
  const searchMaterial: string = dataFilter.material
  const materials: MaterialType[] = [
    { material: 'Все' },
    { material: 'Массив' },
    { material: 'ЛДСП' },
    { material: 'МДФ' },
  ]

  const onChangeInputValue = (value: string) => {
    const isAll = value.toLowerCase() === 'все'
    setMaterial(isAll ? '' : value)
  }

  return (
    <div className='filters__filter-material'>
      <TextField
        select
        size='small'
        fullWidth
        value={searchMaterial === '' ? 'Все' : searchMaterial}
        onChange={(event) => onChangeInputValue(event.target.value)}
        margin='none'
      >
        {materials.map((item: MaterialType) => (
          <MenuItem style={{ marginTop: '-5px' }} key={item.material} value={item.material}>
            <span className='filters__filter-item'>{item.material}</span>
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}

export default memo(FilterMaterial)
