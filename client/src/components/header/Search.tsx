import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from '../../scss/modules/search.module.scss'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import debounce from 'lodash/debounce'
import { useNavigate } from 'react-router-dom'
import { useHome } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const Search: React.FC = () => {
  const { searchData } = useHome()
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const { getSearchItems, setClearSearchData } = useActions()
  const styleSearch = { boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.15)', backgroundColor: '#f7f7f7' }
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
    getSearchItems(searchValue)
    inputRef.current.focus()
  }

  useEffect(() => {
    if (searchValue.length) {
      updateDebounceSearch(searchValue)
    }
  }, [searchValue])

  const updateDebounceSearch = useCallback(
    debounce((value) => {
      getSearchItems(value)
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
    setClearSearchData()
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
