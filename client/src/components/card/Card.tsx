import SwiperImages from './SwiperImages'
import { Button, IconButton } from '@mui/material'
import CardColors from './CardColors'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Tag from '../tag/Tag'
import BlackTooltip from '../BlackTooltip/BlackTooltip'
import { Link } from 'react-router-dom'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { ICard } from './types'
import { colorsTypes, IItem, imagesTypes } from '../../types/itemTypes'
import { getBasketItem } from '../../utils/getBasketItem'
import imageNotFound from '../../images/notFound.png'
import { useActions } from '../../hooks/useActions'
import { useHome } from '../../hooks/useStateSelectors'
import { iconsCategory } from 'app/constants'

const Card: React.FC<ICard> = ({ item, isTop = false }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { favoriteData } = useHome()
  const isFavorite = favoriteData.some((favorite: IItem) => favorite._id === item._id)
  const [selectedColor, setSelectedColor] = useState('')
  const { addItemForBasket, postFavoriteItem, deleteFavoriteItem, openAlertBar, setProduct, getFirstColor } =
    useActions()

  useEffect(() => {
    if (isFavorite) {
      setIsLiked(true)
    }
  }, [])

  useEffect(() => {
    if (isTop) {
      const findItem: any = item.colors.find((item: colorsTypes) => item.color) || ''
      setSelectedColor(findItem.color)
    }
  }, [isTop])

  const onClickBuyButton = () => {
    setProduct(item)
    getFirstColor(item.colors)
  }

  const handleIsFavorite = () => {
    if (!isFavorite) {
      postFavoriteItem(item)
      return true
    }
    const withoutItemsFavorite = favoriteData.filter((favorite: IItem) => favorite._id !== item._id)
    deleteFavoriteItem(withoutItemsFavorite)
    return false
  }

  const onClickFavoriteButton = () => {
    setIsLiked(handleIsFavorite())
    openAlertBar({
      message: item.title,
      type: 'favorite',
    })
  }

  const handlerOnSubmit = () => {
    openAlertBar({
      message: item.title,
      type: 'cart',
    })
    const basketItem = getBasketItem(item, selectedColor)
    addItemForBasket(basketItem)
  }

  const checkImages = (images: imagesTypes[]) => {
    if (!images.length) {
      return [{ image: imageNotFound }]
    }
    return images.filter((item) => item.image)
  }

  const getPrefixTitle = (obj) => {
    const prefix = iconsCategory.find((item) => item.category === obj?.category)
    return (
      <>
        {prefix?.name + ' '}
        <b>{obj.title}</b>
      </>
    )
  }

  return (
    <article className='card' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <Tag tag={item.mark} isCard price={item.price} oldPrice={item.oldPrice} />
      <SwiperImages images={checkImages(item.cardImages)} visible={visible} />
      <p className='card__title'>{getPrefixTitle(item)}</p>
      <div className='card__desc-wrapper'>
        <div className='card__price-wrapper'>
          <div />
          <p>
            <span className='old-price'>{getPriceWithFormat(item.oldPrice)}</span> &#8381;
          </p>
          <em>{getPriceWithFormat(item.price)} &#8381;</em>
        </div>
        <CardColors
          isTop={isTop}
          colorPalette={item.colors}
          visible={visible}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setVisible={setVisible}
        />
        <form className='card__buttons-wrapper'>
          {selectedColor ? (
            <Button style={{ width: '100%' }} size='medium' variant='contained' onClick={() => handlerOnSubmit()}>
              в корзину
            </Button>
          ) : (
            <>
              <Link
                to={`/category/${item.category}/product/${item._id}`}
                className='card__link-buy'
                onClick={() => onClickBuyButton()}
              >
                <Button style={{ width: '100%' }} size='medium' variant='outlined'>
                  купить
                </Button>
              </Link>
              <BlackTooltip title='Добавить в избранное' placement='top-start'>
                <IconButton color='error' onClick={() => onClickFavoriteButton()}>
                  {isLiked ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </BlackTooltip>
            </>
          )}
        </form>
      </div>
    </article>
  )
}

export default Card
