import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from '../../scss/modules/search.module.scss'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import debounce from 'lodash/debounce'
import { getSearchItems } from '../../redux/home/asyncActions'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/named
import { setClearSearchData } from '../../redux/home/homeSlice'

const Search: React.FC = () => {
  const dispatch = useAppDispatch()
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const searchData = useAppSelector((state) => state.home.searchData)
  const styleSearch = { boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.10)', transform: 'scale(1.03)' }
  const filterData = searchData.filter((_item, i) => i < 4)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleSearchValue = (value) => {
    setSearchValue(value)
  }

  const onClickClearButton = () => {
    setSearchValue('')
    inputRef.current.focus()
  }

  const onClickSearchButton = () => {
    dispatch(getSearchItems(searchValue))
    inputRef.current.focus()
  }

  useEffect(() => {
    if (searchValue.length) {
      updateDebounceSearch(searchValue)
    }
  }, [searchValue])

  const updateDebounceSearch = useCallback(
    debounce((value) => {
      dispatch(getSearchItems(value))
    }, 700),
    [],
  )

  const updateDebounceFocus = useCallback(
    debounce((value) => {
      setIsFocus(value)
    }, 100),
    [],
  )

  const onClickSearchItem = (item) => {
    navigate(`/category/${item.category}/product/${item._id}`)
    setSearchValue('')
    dispatch(setClearSearchData())
  }

  return (
    <div className={s.search} style={isFocus ? styleSearch : {}}>
      <div className={s.search__top}>
        <input
          className={s.search__input}
          placeholder='Поиск товаров...'
          type='text'
          onChange={(evt) => handleSearchValue(evt.target.value)}
          onFocus={() => updateDebounceFocus(true)}
          onBlur={() => updateDebounceFocus(false)}
          value={searchValue}
          ref={inputRef}
        />
        <div className={s.search__buttons}>
          {searchValue.length >= 1 && (
            <IconButton size='small' color='primary' onClick={() => onClickClearButton()}>
              <CloseIcon />
            </IconButton>
          )}
          <IconButton disabled={!searchValue.length} size='small' color='primary' onClick={() => onClickSearchButton()}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      {searchData.length >= 1 && isFocus && (
        <div className={s.search__content}>
          {filterData.map((item) => (
            <button key={item._id} className={s.search__itemButton} onClick={() => onClickSearchItem(item)}>
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
