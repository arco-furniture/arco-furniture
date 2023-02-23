import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, BlackTooltip, TitleTooltip } from '../index'
import { Badge } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import ListIcon from '@mui/icons-material/List'
import { useAuth, useBasket, useOther } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { getRequestItems } from '../../utils/getRequestItems'
import logo from '../../images/logo-black.svg'
import { IBasketItem } from '../../pages/basket/types'

const HeaderMiddle: React.FC = (): JSX.Element => {
  const { dataBasketItems, totalPrice } = useBasket()
  const { favorites } = getFavoriteFromLS()
  const { checkBasketItems, postBasketItems, setIsLoadingBasket } = useActions()
  const { itemIsLiked } = useOther()
  const { user } = useAuth()
  const badgeBasketPrice: string = totalPrice ? `${getPriceWithFormat(totalPrice)}  ₽` : 'Корзина'
  const countBasketItems: number = dataBasketItems.reduce((sum: number, currentItem: IBasketItem) => {
    return sum + currentItem.count
  }, 0)

  useEffect(() => {
    const newFavorites = JSON.stringify(favorites)
    localStorage.setItem('favorites', newFavorites)
  }, [itemIsLiked])

  useEffect(() => {
    const newItems = JSON.stringify(dataBasketItems)
    localStorage.setItem('items', newItems)
    checkBasketItems()
    postItems()
  }, [dataBasketItems, user])

  const postItems = async () => {
    if (user) {
      setIsLoadingBasket(false)
      await postBasketItems(getRequestItems(dataBasketItems))
    }
    setIsLoadingBasket(true)
  }

  return (
    <div className='header__middle'>
      <div className='header__content'>
        <div className='header__contain'>
          <Link to='/'>
            <img draggable={false} src={logo} alt='Логотип' className='header__logo' />
          </Link>
          <Search />
        </div>
        <div className='header__middle-nav-content'>
          <BlackTooltip title={<TitleTooltip title='В разработке' />} placement='bottom'>
            <Link to='/' className='header__middle-item'>
              <ListIcon color='primary' />
              <span className='header__middle-item-span'>Лента заказов</span>
            </Link>
          </BlackTooltip>
          {favorites.length ? (
            <Link to='/favorite' className='header__middle-item'>
              <Badge badgeContent={favorites.length} color='error'>
                <FavoriteBorderIcon color='primary' />
              </Badge>
              <span className='header__middle-item-span'>Избранное</span>
            </Link>
          ) : (
            <BlackTooltip title={<TitleTooltip title='В избранном ничего нет' />} placement='bottom'>
              <div className='header__middle-item' style={{ cursor: 'default' }}>
                <Badge badgeContent={favorites.length} color='error'>
                  <FavoriteBorderIcon color='primary' />
                </Badge>
                <span className='header__middle-item-span'>Избранное</span>
              </div>
            </BlackTooltip>
          )}
          {dataBasketItems.length ? (
            <Link to='/basket' className='header__middle-item'>
              <Badge badgeContent={countBasketItems} color='error'>
                <ShoppingCartOutlined color='primary' />
              </Badge>
              <span className='header__middle-item-span'>{badgeBasketPrice}</span>
            </Link>
          ) : (
            <BlackTooltip title={<TitleTooltip title='Добавьте товар в корзину' />} placement='bottom'>
              <div className='header__middle-item' style={{ cursor: 'default' }}>
                <Badge badgeContent={countBasketItems} color='error'>
                  <ShoppingCartOutlined color='primary' />
                </Badge>
                <span className='header__middle-item-span'>{badgeBasketPrice}</span>
              </div>
            </BlackTooltip>
          )}
        </div>
      </div>
    </div>
  )
}
export default memo(HeaderMiddle)
