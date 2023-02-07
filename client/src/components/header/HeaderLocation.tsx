import React, { memo, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { INITIAL_CATEGORIES } from 'app/constants'
import { IInitialCategories } from 'types/constantsTypes'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useAuth } from '../../hooks/useStateSelectors'

const HeaderLocation: React.FC = (): JSX.Element => {
  const location = useLocation()
  const { user } = useAuth()
  // const { productData } = useProduct()
  const locationArray = location.pathname.split('/').filter((item) => item)
  const initialCategory: IInitialCategories = { name: null, link: null, categoryId: null }
  const isCategory: boolean = locationArray.indexOf('category') !== -1
  const [category, setCategory] = useState<IInitialCategories | null>(initialCategory)
  const isBasket: boolean = locationArray.indexOf('basket') !== -1
  const isFavorite: boolean = locationArray.indexOf('favorite') !== -1
  const isProduct: boolean = locationArray.indexOf('product') !== -1
  const isProfile: boolean = locationArray.indexOf('profile') !== -1

  useEffect(() => {
    if (isCategory) {
      let isCurrentCategory: any = locationArray.indexOf('category')
      isCurrentCategory = locationArray[isCurrentCategory + 1]
      const findCategory = INITIAL_CATEGORIES.find((item) => item.link === isCurrentCategory)
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
        {/* {isProduct && productData && ( */}
        {/*  <li className='header__paramsItem'> */}
        {/*    <span className='header__arrow'> */}
        {/*      <KeyboardArrowRightIcon fontSize='small' /> */}
        {/*    </span> */}
        {/*    <Link className='header__paramsLink' to={`/category/${productData.category}/product/${productData._id}`}> */}
        {/*      {productData.title} */}
        {/*    </Link> */}
        {/*  </li> */}
        {/* )} */}
        {isProfile && user && (
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

export default memo(HeaderLocation)
