import { InputAdornment, Slider, TextField } from '@mui/material'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { getPriceWithFormat } from '../../../utils/getPriceWithFormat'
import debounce from 'lodash/debounce'
import { IItem } from '../../../types/itemTypes'
import { useCategory } from '../../../hooks/useStateSelectors'
import { useActions } from '../../../hooks/useActions'

const FilterPrice: React.FC = () => {
  const { categoryData, price, searchPrice } = useCategory()
  const { setPrice } = useActions()
  const [value, setValue] = useState(searchPrice)
  const [changeValue, setChangeValue] = useState(false)

  const isMounted = useRef<boolean>(false)

  // minMax определение должно быть на стороне фронта

  useEffect(() => {
    setChangeValue(false)
    setValue(searchPrice)
  }, [categoryData])

  useEffect(() => {
    if (changeValue) {
      updateDebouncePrice(value)
    }
  }, [value])

  const updateDebouncePrice = useCallback(
    debounce((value) => {
      setPrice(value)
    }, 500),
    [],
  )

  const handleChangeValue = (evt: any, newValue: any) => {
    setChangeValue(true)
    setValue(newValue)
  }

  const inputPropsTextField = (text: string) => {
    return {
      startAdornment: (
        <InputAdornment sx={{ fontSize: '2px' }} position='start'>
          {text}
        </InputAdornment>
      ),
    }
  }

  return (
    <div className='filters__filter-price'>
      <div className='filters__filter-box'>
        <TextField
          size='small'
          value={getPriceWithFormat(value[0])}
          inputProps={{ style: { fontSize: 14, textAlign: 'start' } }}
          InputProps={inputPropsTextField('от')}
        />
        <TextField
          size='small'
          variant='outlined'
          value={getPriceWithFormat(value[1])}
          inputProps={{ style: { fontSize: 14, textAlign: 'start' } }}
          InputProps={inputPropsTextField('до')}
        />
      </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChangeValue}
        size='small'
        step={price[0]}
        min={0}
        max={price[1]}
      />
    </div>
  )
}

export default memo(FilterPrice)
