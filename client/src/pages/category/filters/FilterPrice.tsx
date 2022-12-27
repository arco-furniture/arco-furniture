import { InputAdornment, Slider, TextField } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getPriceWithFormat } from '../../../utils/getPriceWithFormat'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import debounce from 'lodash/debounce'
import { IItem } from '../../../types/itemTypes'
import { setPrice } from '../../../redux/category/categorySlice'

const FilterPrice: React.FC = () => {
  const minMaxPrice = useAppSelector((state) => state.category.minMaxPrice)
  const categoryData = useAppSelector((state) => state.category.categoryData)
  const [value, setValue] = useState(minMaxPrice)
  const dispatch = useAppDispatch()

  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    setValue(minMaxPrice)
  }, [categoryData])

  useEffect(() => {
    updateDebouncePrice(value)
  }, [value])

  const updateDebouncePrice = useCallback(
    debounce((value) => {
      // setPushValue(value)
    }, 500),
    [],
  )

  const handleChangeValue = (evt: any, newValue: any) => {
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
        step={5000}
        min={minMaxPrice[0]}
        max={minMaxPrice[1]}
      />
    </div>
  )
}

export default FilterPrice
