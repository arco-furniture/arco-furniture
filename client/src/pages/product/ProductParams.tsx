import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip'
import { Button, IconButton } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCurrentColor } from '../../redux/product/productSlice'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { openAlertBar } from '../../redux/other/otherSlice'
import BlackTooltip from '../../components/BlackTooltip/BlackTooltip'
import { deleteFavoriteItem, postFavoriteItem } from '../../redux/home/homeSlice'
import { addItemForBasket } from '../../redux/basket/basketSlice'
import { IItem, colorsTypes } from '../../types/itemTypes'
import { getBasketItem } from '../../utils/getBasketItem'
import { colors } from 'app/constants'

const ProductParams: React.FC = () => {
  const styleSubmit = { fontSize: '18px', fontWeight: 700 }
  const [isLiked, setIsLiked] = useState(false)
  const productData = useAppSelector((state) => state.product.productData)
  const currentColor = useAppSelector((state) => state.product.currentColor)
  const favoriteData = useAppSelector((state) => state.home.favoriteData)
  const isFavorite = favoriteData.some((favorite: IItem) => favorite._id === productData._id)
  const existColors = colors.map((item) => {
    const isExist = productData?.colors?.some((color) => color.nameColor === item.nameColor)
    return {
      nameColor: item.nameColor,
      color: item.color,
      exist: isExist,
    }
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isFavorite) {
      setIsLiked(true)
    }
  }, [])

  const handleCurrentColor = (obj: colorsTypes, index: number) => {
    const notExistColor = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: `2px solid ${obj.color}`,
    }
    const defaultStylesColor = {
      backgroundColor: obj.color,
      transition: 'transform ease-in-out 0.1s',
      transform: currentColor.index === index ? 'translateY(-4px)' : 'translateY(0)',
    }
    if (!obj?.exist) {
      return Object.assign({}, defaultStylesColor, notExistColor)
    }
    return defaultStylesColor
  }

  const ChipSuccess = () => {
    return <Chip label='В наличии' color='success' variant='filled' />
  }

  const ChipError = () => {
    return <Chip label='Под заказ' color='error' variant='filled' />
  }

  const handlerOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(
      openAlertBar({
        message: productData.title,
        type: 'cart',
      }),
    )
    const basketItem = getBasketItem(productData, currentColor.color)
    dispatch(addItemForBasket(basketItem))
  }

  const handleIsFavorite = () => {
    if (!isFavorite) {
      dispatch(postFavoriteItem(productData))
      return true
    }
    const withoutItemsFavorite = favoriteData.filter((favorite: IItem) => favorite._id !== productData._id)
    dispatch(deleteFavoriteItem(withoutItemsFavorite))
    return false
  }

  const onClickFavoriteButton = () => {
    setIsLiked(handleIsFavorite())
    dispatch(
      openAlertBar({
        message: productData.title,
        type: 'favorite',
      }),
    )
  }

  return (
    <form className='product__params panel' onSubmit={(evt) => handlerOnSubmit(evt)}>
      <div className='product__top-wrapper'>
        <h2>{productData.title}</h2>
        {currentColor.exist ? <ChipSuccess /> : <ChipError />}
      </div>
      <div className='product__price-wrapper'>
        <p className='product__old-price'>
          <span className='old-price'>{getPriceWithFormat(productData.oldPrice)}</span> &#8381;
        </p>
        <em className='product__price'>{getPriceWithFormat(productData.price)} &#8381;</em>
      </div>
      <div className='product__colors'>
        <h3 className='product__title'>Цвета исполнения:</h3>
        <ul>
          {existColors?.map((item: colorsTypes, index: number) => {
            return (
              <li key={index}>
                <Button
                  onClick={() =>
                    dispatch(
                      setCurrentColor({
                        index,
                        color: item.color,
                        nameColor: item.nameColor,
                        exist: item.exist,
                      }),
                    )
                  }
                  style={handleCurrentColor(item, index)}
                  variant='contained'
                />
                {currentColor.index === index && (
                  <ExpandLessIcon
                    color='primary'
                    style={{
                      position: 'absolute',
                      bottom: '-17px',
                      left: '3px',
                    }}
                  />
                )}
              </li>
            )
          })}
        </ul>
        {!currentColor.exist && <p className='product__text-error'>К сожалению данного цвета нет в наличии</p>}
      </div>
      <div className='product__description'>
        <p>
          <span className='product__title'>Описание: </span>
          {productData.description}
        </p>
      </div>
      <div className='product__buttons'>
        <Button
          disabled={!currentColor.exist}
          style={styleSubmit}
          className='product__submit'
          size='large'
          type='submit'
          variant='contained'
        >
          добавить в корзину
        </Button>
        <BlackTooltip title='Добавить в избранное' placement='top-start'>
          <IconButton className='product__favorite' size='large' color='error' onClick={() => onClickFavoriteButton()}>
            {isLiked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </BlackTooltip>
      </div>
    </form>
  )
}

export default ProductParams
