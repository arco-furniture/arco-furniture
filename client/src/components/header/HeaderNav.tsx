import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { IInitialCategories } from 'types/constantsTypes'
import { INITIAL_CATEGORIES } from 'app/constants'
import { useActions } from '../../hooks/useActions'

const HeaderNav: React.FC = (): JSX.Element => {
  const location = useLocation()
  const { setCategoryParams } = useActions()

  const isActiveCategory = (path: string): boolean => {
    return location.pathname.indexOf(`/category/${path}`) !== -1
  }

  useEffect(() => {
    const findCategory = INITIAL_CATEGORIES.find((item) => isActiveCategory(item.link))
    if (findCategory) {
      pushItemParams(findCategory)
    }
  }, [location.pathname])

  const pushItemParams = (item: IInitialCategories) => {
    setCategoryParams({ paramsId: item.categoryId, name: item.name })
  }

  return (
    <div className='header__tabs'>
      <div className='header__content'>
        <div className='header__tabs-wrapper'>
          {INITIAL_CATEGORIES.map((item) => {
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
