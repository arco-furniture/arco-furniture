import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { setCategoryParams } from '../../redux/category/categorySlice'
import { useAppDispatch } from '../../hooks/redux'
import { IInitialCategories } from './types'
import { initialCategories } from 'app/constants'

const HeaderNav: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()

  const isActiveCategory = (path: string) => {
    return location.pathname.indexOf(`/category/${path}`) !== -1
  }

  useEffect(() => {
    const findCategory = initialCategories.find((item) => isActiveCategory(item.link))
    if (findCategory) {
      pushItemParams(findCategory)
    }
  }, [location.pathname])

  const pushItemParams = (item: IInitialCategories) => {
    dispatch(setCategoryParams({ paramsId: item.categoryId, name: item.name }))
  }

  return (
    <div className='header__tabs'>
      <div className='header__content'>
        <div className='header__tabs-wrapper'>
          {initialCategories.map((item) => {
            return (
              <Link
                to={`category/${item.link}`}
                key={item.categoryId}
                className={`header__tab ${isActiveCategory(item.link) ? 'header__tab_active' : ''}`}
                onClick={() => pushItemParams(item)}
              >
                <Button style={{ color: '#fff', minHeight: '100%', borderRadius: '0', fontSize: '12px' }}>
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderNav
