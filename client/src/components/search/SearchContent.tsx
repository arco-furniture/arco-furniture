import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICONS_CATEGORY } from 'app/constants'
import { useActions } from '../../hooks/useActions'
import { useHome } from '../../hooks/useStateSelectors'
import { getPrefixTitle } from '../../utils/getPrefixTitle'
import { BlackTooltip, TitleTooltip, SearchError } from 'components'
import s from '../../scss/modules/search.module.scss'
import { IconButton } from '@mui/material'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { ISearchContent } from 'components/search/types'
import { IItem } from '../../types/itemTypes'

const SearchContent: React.FC<ISearchContent> = ({ searchData, setSearchValue }): JSX.Element => {
  const navigate = useNavigate()
  const { setClearSearchData } = useActions()
  const { searchStatus } = useHome()
  const isError = searchStatus === 'error'
  const data = searchData.slice(0, 4)

  const onClickCategory = (item: IItem, evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.stopPropagation()
    navigate(`/category/${item.category}`)
    setSearchValue('')
    setClearSearchData()
  }

  const onClickSearchItem = (item: IItem, evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation()
    navigate(`/category/${item.category}/product/${item._id}`)
    setSearchValue('')
    setClearSearchData()
  }

  const getIconItem = (category): JSX.Element | null => {
    const res = ICONS_CATEGORY.find((item) => {
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
      {data.map((item) => (
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
              {getPrefixTitle(item)}
            </p>
          </div>
          <span className={s.search__price}>{getPriceWithFormat(item.price) + ' ' + '₽'}</span>
        </div>
      ))}
    </div>
  )
}

export default SearchContent
