import { MenuItem, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { setMaterial } from '../../../redux/category/categorySlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux'

const FilterMaterial: React.FC = () => {
  const searchMaterial = useAppSelector((state) => state.category.dataFilter.material)
  const dispatch = useAppDispatch()
  const materials = [{ material: 'Все' }, { material: 'Массив' }, { material: 'ЛДСП' }, { material: 'МДФ' }]

  const onChangeInputValue = (value) => {
    const isAll = value.toLowerCase() === 'все'
    dispatch(setMaterial(isAll ? '' : value))
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
        {materials.map((item) => {
          return (
            <MenuItem style={{ marginTop: '-5px' }} key={item.material} value={item.material}>
              <span className='filters__filter-item'>{item.material}</span>
            </MenuItem>
          )
        })}
      </TextField>
    </div>
  )
}

export default FilterMaterial
