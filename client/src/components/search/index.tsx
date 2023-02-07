import React, { useCallback, useEffect, useRef, useState, memo } from 'react'
import s from '../../scss/modules/search.module.scss'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import debounce from 'lodash/debounce'
import { useActions } from '../../hooks/useActions'
import { useHome } from '../../hooks/useStateSelectors'
import SearchContent from 'components/search/SearchContent'

const Search: React.FC = (): JSX.Element => {
  const { searchData } = useHome()
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const { getSearchItems, setClearSearchStatus } = useActions()
  const styleSearch = { backgroundColor: '#f7f7f7' }
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSearchValue = (value) => {
    setSearchValue(value)
  }

  const onClickClearButton = () => {
    setSearchValue('')
    inputRef.current.focus()
  }

  useEffect(() => {
    if (searchValue.length) {
      updateDebounceSearch(searchValue)
    } else {
      setClearSearchStatus()
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

  return (
    <div className={s.search} style={isFocus ? styleSearch : {}}>
      <div className={s.search__top}>
        <input
          className={s.search__input}
          placeholder='Поиск по товару или категории'
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
          <IconButton size='small' color={isFocus ? 'primary' : 'default'}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      {isFocus && <SearchContent setSearchValue={setSearchValue} searchData={searchData} />}
    </div>
  )
}

export default memo(Search)
