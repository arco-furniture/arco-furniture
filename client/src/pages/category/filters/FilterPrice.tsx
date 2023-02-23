import { ListItemButton, ListItemText, Slider, styled } from '@mui/material'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { getPriceWithFormat } from '../../../utils/getPriceWithFormat'
import debounce from 'lodash/debounce'
import { useCategory } from '../../../hooks/useStateSelectors'
import { useActions } from '../../../hooks/useActions'

const FilterPrice: React.FC = (): JSX.Element => {
  const { dataFilter, minMaxPrice } = useCategory()
  const { price } = dataFilter
  const { setPrice } = useActions()
  const [values, setValues] = useState<number | number[]>(minMaxPrice)
  const [changeValues, setChangeValues] = useState<boolean>(false)

  useEffect(() => {
    setValues(price)
  }, [minMaxPrice])

  useEffect(() => {
    if (changeValues) {
      updateDebouncePrice(values)
      setChangeValues(false)
    }
  }, [values])

  const updateDebouncePrice = useCallback(
    debounce((value) => {
      setPrice(value)
    }, 500),
    [],
  )

  const handleChangeValue = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValues([Math.min(newValue[0], values[1] - 20000), values[1]])
    } else {
      setValues([values[0], Math.max(newValue[1], values[0] + 20000)])
    }
    setChangeValues(true)
  }

  const MyListItemButton = styled(ListItemButton)({
    backgroundColor: '#F5F5F5',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    minHeight: '45px',
    padding: '0 10px',
    cursor: 'default',
  })

  return (
    <div className='filters__filter-price'>
      <div className='filters__filter-box'>
        <MyListItemButton className='filters__filter-listItem'>
          <ListItemText primary={getPriceWithFormat(values[0]) + ' ₽'} />
        </MyListItemButton>
        <MyListItemButton className='filters__filter-listItem'>
          <ListItemText primary={getPriceWithFormat(values[1]) + ' ₽'} />
        </MyListItemButton>
      </div>
      <div>
        <div className='filters__filter-slide'>
          <Slider
            className='filters__filter-slide'
            disableSwap
            onChange={handleChangeValue}
            value={values}
            step={10000}
            min={30000}
            max={210000}
            marks
          />
        </div>
      </div>
    </div>
  )
}

export default memo(FilterPrice)
