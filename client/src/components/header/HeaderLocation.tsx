import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { initialCategories } from 'app/constants'
import { IInitialCategories } from 'components/header/types'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useAuth, useProduct } from '../../hooks/useStateSelectors'

const HeaderLocation: React.FC = () => {
  const location = useLocation()
  const locationArray = location.pathname.split('/').filter((item) => item)
  const { productData } = useProduct()
  const { user } = useAuth()

  const isCategory = locationArray.indexOf('category') !== -1
  const [category, setCategory] = useState<IInitialCategories | null>({ name: '', link: '', categoryId: null })

  const isBasket = locationArray.indexOf('basket') !== -1
  const isFavorite = locationArray.indexOf('favorite') !== -1

  const isProduct = locationArray.indexOf('product') !== -1
  const isProfile = locationArray.indexOf('profile') !== -1

  useEffect(() => {
    if (isCategory) {
      let isCurrentCategory: any = locationArray.indexOf('category')
      isCurrentCategory = locationArray[isCurrentCategory + 1]
      const findCategory = initialCategories.find((item) => item.link === isCurrentCategory)
      setCategory(findCategory)
    }
  }, [locationArray])

  return (
    <div className='header__params'>
      <ul className='header__paramsItems'>
        <li className='header__paramsItem'>
          <Link className='header__paramsLink' to='/'>
            Главная страница
          </Link>
        </li>
        {isCategory && (
          <li className='header__paramsItem'>
            <span className='header__arrow'>
              <KeyboardArrowRightIcon fontSize='small' />
            </span>
            <Link className='header__paramsLink' to={`/category/${category.link}`}>
              {category.name}
            </Link>
          </li>
        )}
        {isBasket && (
          <li className='header__paramsItem'>
            <span className='header__arrow'>
              <KeyboardArrowRightIcon fontSize='small' />
            </span>
            <Link className='header__paramsLink' to='/basket'>
              Корзина
            </Link>
          </li>
        )}
        {isFavorite && (
          <li className='header__paramsItem'>
            <span className='header__arrow'>
              <KeyboardArrowRightIcon fontSize='small' />
            </span>
            <Link className='header__paramsLink' to='/favorite'>
              Избранное
            </Link>
          </li>
        )}
        {isProduct && (
          <li className='header__paramsItem'>
            <span className='header__arrow'>
              <KeyboardArrowRightIcon fontSize='small' />
            </span>
            <Link className='header__paramsLink' to={`/category/${productData.category}/product/${productData._id}`}>
              {productData.title}
            </Link>
          </li>
        )}
        {isProfile && (
          <li className='header__paramsItem'>
            <span className='header__arrow'>
              <KeyboardArrowRightIcon fontSize='small' />
            </span>
            <Link className='header__paramsLink' to={`/profile/${user._id}`}>
              Личный профиль
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HeaderLocation
