import React from 'react'
import s from '../../scss/modules/search.module.scss'
import BlackTooltip from 'components/BlackTooltip/BlackTooltip'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'
import { IconButton } from '@mui/material'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { iconsCategory } from 'app/constants'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useHome } from '../../hooks/useStateSelectors'
import SearchError from 'components/search/SearchError'

const SearchContent: React.FC<any> = ({ searchData, setSearchValue }) => {
  const navigate = useNavigate()
  const { setClearSearchData } = useActions()
  const { searchStatus } = useHome()
  const isError = searchStatus === 'error'

  const getPrefixName = (category) => {
    const res = iconsCategory.find((item) => {
      if (item.category === category) {
        return item.name
      }
    })
    return res.name || ''
  }

  const onClickCategory = (item, evt) => {
    evt.stopPropagation()
    navigate(`/category/${item.category}`)
    setSearchValue('')
    setClearSearchData()
  }

  const onClickSearchItem = (item, evt) => {
    evt.stopPropagation()
    navigate(`/category/${item.category}/product/${item._id}`)
    setSearchValue('')
    setClearSearchData()
  }

  const getIconItem = (category) => {
    const res = iconsCategory.find((item) => {
      if (item.category === category) {
        return item.icon
      }
    })
    return res.icon || null
  }

  return isError ? (
    <SearchError />
  ) : (
    <div className={s.search__content}>
      {searchData.map((item) => (
        <div key={item._id} className={s.search__itemContent} onClick={(evt) => onClickSearchItem(item, evt)}>
          <div className={s.search__leftContent}>
            <BlackTooltip title={<TitleTooltip title='Перейти в категорию' />} placement='top'>
              <IconButton
                sx={{ border: '1px solid #4675CE' }}
                color='primary'
                size='small'
                onClick={(evt) => onClickCategory(item, evt)}
              >
                {getIconItem(item.category)}
              </IconButton>
            </BlackTooltip>
            <p className={s.search__item} onClick={(evt) => onClickSearchItem(item, evt)}>
              {getPrefixName(item.category) + ' '}
              <b>{item.title}</b>
            </p>
          </div>
          <span className={s.search__price}>{getPriceWithFormat(item.price) + ' ' + '₽'}</span>
        </div>
      ))}
    </div>
  )
}

export default SearchContent
