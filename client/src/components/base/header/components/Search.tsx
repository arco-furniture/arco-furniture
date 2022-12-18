import React, { useState } from 'react'
import Box from '@mui/material/Box'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { InputBase } from '@mui/material'
import s from '../../../../scss/modules/search.module.scss'
import SearchContent from './SearchContent'

const Search: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className={s.searchPage}>
      <SearchContent isVisible={isVisible} value={searchValue} setIsVisible={setIsVisible} />
      <Box className={s.search}>
        <Box className={s.search__backgroundIcon} />
        <SearchOutlinedIcon
          className={s.search__searchIcon}
          sx={{ color: '#fff', mr: 1, ml: 1, width: 22, height: 22 }}
        />
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            minWidth: '20em',
            paddingRight: '12px',
            color: '#414141',
            fontSize: '14px',
          }}
          placeholder='Поиск по сайту...'
          type='search'
          onChange={(evt) => setSearchValue(evt.target.value)}
          onFocus={() => setIsVisible(true)}
        />
      </Box>
    </div>
  )
}

export default Search
