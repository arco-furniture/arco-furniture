import React from 'react'
import logo from '../../images/logo-black.svg'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Search from './Search'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import BlackTooltip from '../BlackTooltip/BlackTooltip'
import { ITitleTooltip } from './types'
import ListIcon from '@mui/icons-material/List'
import { useBasket, useHome } from '../../hooks/useStateSelectors'

const HeaderMiddle: React.FC = () => {
  const { dataBasketItems, totalPrice } = useBasket()
  const { favoriteData } = useHome()
  const badgeBasketPrice = totalPrice ? `${getPriceWithFormat(totalPrice)}  ₽` : 'Корзина'
  const countBasketItems = dataBasketItems.reduce((sum: number, currentItem: any) => {
    return sum + currentItem.count
  }, 0)

  const TitleTooltip: React.FC<ITitleTooltip> = ({ title }) => {
    return <span className='header__tooltip-title'>{title}</span>
  }

  return (
    <div className='header__middle'>
      <div className='header__content'>
        <div className='header__contain'>
          <Link to='/'>
            <img src={logo} alt='Логотип' className='header__logo' />
          </Link>
          <Search />
        </div>
        <div className='header__middle-nav-content'>
          <Link to='/' className='header__middle-item'>
            <ListIcon color='primary' />
            <span className='header__middle-item-span'>Лента заказов</span>
          </Link>
          {favoriteData.length ? (
            <Link to='/favorite' className='header__middle-item'>
              <Badge badgeContent={favoriteData.length} color='error'>
                <FavoriteBorderIcon color='primary' />
              </Badge>
              <span className='header__middle-item-span'>Избранное</span>
            </Link>
          ) : (
            <BlackTooltip title={<TitleTooltip title='В избранном ничего нет' />} placement='bottom'>
              <div className='header__middle-item' style={{ cursor: 'default' }}>
                <Badge badgeContent={favoriteData.length} color='error'>
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
export default HeaderMiddle
