import React, { memo, useEffect } from 'react'
import logo from '../../images/logo-black.svg'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Search from '../search/Search'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import BlackTooltip from '../BlackTooltip/BlackTooltip'
import ListIcon from '@mui/icons-material/List'
import { useAuth, useBasket, useOther } from '../../hooks/useStateSelectors'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'
import { useActions } from '../../hooks/useActions'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'

const HeaderMiddle: React.FC = () => {
  const { dataBasketItems, totalPrice } = useBasket()
  const { favorites } = getFavoriteFromLS()
  const { checkBasketItems } = useActions()
  const { itemIsLiked } = useOther()
  const { user } = useAuth()
  const badgeBasketPrice = totalPrice ? `${getPriceWithFormat(totalPrice)}  ₽` : 'Корзина'
  const countBasketItems = dataBasketItems.reduce((sum: number, currentItem: any) => {
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
  }, [dataBasketItems])

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
                <ShoppingCartOutlinedIcon color='primary' />
              </Badge>
              <span className='header__middle-item-span'>{badgeBasketPrice}</span>
            </Link>
          ) : (
            <BlackTooltip title={<TitleTooltip title='Добавьте товар в корзину' />} placement='bottom'>
              <div className='header__middle-item' style={{ cursor: 'default' }}>
                <Badge badgeContent={countBasketItems} color='error'>
                  <ShoppingCartOutlinedIcon color='primary' />
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
