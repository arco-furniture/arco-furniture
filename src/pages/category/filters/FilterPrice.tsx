import { InputAdornment, Slider, TextField } from '@mui/material'
import React, { SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react'
import { getPriceWithFormat } from '../../../utils/getPriceWithFormat'
import { categorySelector, filterPriceSelector, setFilteredData } from '../../../redux/category/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { getMinMaxPrice } from '../../../utils/getMinMaxPrice'
import { IItem } from '../../../types/itemTypes'

const FilterPrice: React.FC = () => {
  const minMaxPrice = useSelector(filterPriceSelector)
  const [value, setValue] = useState(minMaxPrice)
  const dispatch = useDispatch()
  const { categoryData, searchStyles, fetchData } = useSelector(categorySelector)
  const isMounted = useRef(false)

  const inputPropsTextField = (text: string) => {
    return {
      startAdornment: (
        <InputAdornment sx={{ fontSize: '2px' }} position='start'>
          {text}
        </InputAdornment>
      ),
    }
  }

  useEffect(() => {
    setValue(minMaxPrice)
  }, [minMaxPrice])

  useEffect(() => {
    updateDebouncePrice(value)
  }, [value, searchStyles])

  const updateDebouncePrice = useCallback(
    debounce((value) => {
      getCardsForPrice(value)
    }, 500),
    [],
  )

  const getCardsForPrice = (value: number[]) => {
    if (fetchData.length) {
      const filteredCards = fetchData.filter((item: IItem) => item.price >= value[0] && item.price <= value[1])
      dispatch(setFilteredData(filteredCards))
    }
  }

  const handleChangeValue = (evt: any, newValue: any) => {
    setValue(newValue)
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

export default React.memo(FilterPrice)
