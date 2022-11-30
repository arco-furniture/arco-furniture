import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { setCategoryParams } from '../../../redux/category/categorySlice'
import { useDispatch } from 'react-redux'
import { IInitialCategories } from './types'

const HeaderNav: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const initialCategories: IInitialCategories[] = [
    { name: 'Кухни', link: 'kitchens', categoryId: 1 },
    { name: 'Гостиные', link: 'living-rooms', categoryId: 2 },
    { name: 'Спальни', link: 'bed-rooms', categoryId: 3 },
    { name: 'Прихожие', link: 'hallways', categoryId: 4 },
    { name: 'Шкафы-купе', link: 'wardrobes', categoryId: 5 },
    { name: 'Детские', link: 'childish', categoryId: 6 },
    { name: 'Диваны', link: 'sofas', categoryId: 7 },
    { name: 'Столы и стулья', link: 'tables-and-chairs', categoryId: 8 },
  ]

  const isActiveCategory = (path: string) => {
    return location.pathname === `/category/${path}`
  }

  useEffect(() => {
    const findCategory = initialCategories.find((item) => isActiveCategory(item.link))
    if (findCategory) {
      pushItemParams(findCategory)
    }
  }, [])

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
