import React, { memo, useEffect, useState } from 'react'
import Chip from '@mui/material/Chip'
import { Button, IconButton } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import BlackTooltip from '../../components/BlackTooltip/BlackTooltip'
import { IItem, colorsTypes } from '../../types/itemTypes'
import { getBasketItem } from '../../utils/getBasketItem'
import { colors } from 'app/constants'
import { useProduct } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { handleChangeFavorite } from '../../utils/handleChangeFavorite'

const ProductParams: React.FC<any> = ({ product }) => {
  const styleSubmit = { fontSize: '18px', fontWeight: 700 }
  const [isLiked, setIsLiked] = useState(false)
  const { currentColor } = useProduct()
  const { favorites } = getFavoriteFromLS()
  const { addItemForBasket, openAlertBar, setCurrentColor, setItemIsLiked } = useActions()
  const isFavorite = favorites.some((favorite: IItem) => favorite._id === product._id)
  const existColors = colors.map((item) => {
    const isExist = product.colors?.some((color) => color.nameColor === item.nameColor)
    return {
      nameColor: item.nameColor,
      color: item.color,
      exist: isExist,
    }
  })

  useEffect(() => {
    if (isFavorite) {
      setIsLiked(true)
    }
  }, [])

  const handleCurrentColor = (obj: colorsTypes, currentIndex, index) => {
    const notExistColor = {
      backgroundColor: 'inherit',
      border: `3px solid ${obj.color}`,
    }
    const defaultStylesColor = {
      borderRadius: '5px',
      backgroundColor: obj.color,
      transition: 'transform ease-in-out 0.1s',
      opacity: 1,
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

  const handlerOnClickBuy = () => {
    openAlertBar({
      message: product.title,
      type: 'cart',
    })
    const basketItem = getBasketItem(product, currentColor.color)
    addItemForBasket(basketItem)
  }

  const onClickFavoriteButton = () => {
    handleChangeFavorite({ isFavorite, item: product })
    setIsLiked(!isLiked)
    setItemIsLiked()
    openAlertBar({
      message: product.title,
      type: 'favorite',
    })
  }

  return (
    <div className='product__params panel'>
      <div className='product__top-wrapper'>
        <h2>{product.title}</h2>
        {currentColor.exist ? <ChipSuccess /> : <ChipError />}
      </div>
      <div className='product__price-wrapper'>
        <p className='product__old-price'>
          <span className='old-price'>{getPriceWithFormat(product.oldPrice)}</span> &#8381;
        </p>
        <em className='product__price'>{getPriceWithFormat(product.price)} &#8381;</em>
      </div>
      <div className='product__colors'>
        <h3 className='product__title'>Цвета исполнения:</h3>
        <ul>
          {existColors.map((item: colorsTypes, index: number) => {
            return (
              <li key={index}>
                <Button
                  onClick={() =>
                    setCurrentColor({
                      index,
                      color: item.color,
                      nameColor: item.nameColor,
                      exist: item.exist,
                    })
                  }
                  style={handleCurrentColor(item, currentColor.index, index)}
                  variant='contained'
                />
                {/* {currentColor.index === index && <span className='product__circle' />} */}
              </li>
            )
          })}
        </ul>
        {!currentColor.exist && <p className='product__text-error'>К сожалению данного цвета нет в наличии</p>}
      </div>
      <div className='product__description'>
        <p>
          <span className='product__title'>Описание: </span>
          {product.description}
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
          onClick={handlerOnClickBuy}
        >
          добавить в корзину
        </Button>
        <BlackTooltip title='Добавить в избранное' placement='top-start'>
          <IconButton className='product__favorite' size='large' color='error' onClick={() => onClickFavoriteButton()}>
            {isLiked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </BlackTooltip>
      </div>
    </div>
  )
}

export default memo(ProductParams)
