import React, { memo, useEffect, useState } from 'react'
import { COLORS } from 'app/constants'
import { useProduct } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { Button, IconButton, Chip } from '@mui/material'
import { Favorite, FavoriteBorder, CloseOutlined } from '@mui/icons-material'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { BlackTooltip } from 'components'
import { IItem, IProductParams } from '../../types/itemTypes'
import { getBasketItem } from '../../utils/getBasketItem'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { handleChangeFavorite } from '../../utils/handleChangeFavorite'
import { getPrefixTitle } from '../../utils/getPrefixTitle'
import { colorType } from '../../types/constantsTypes'

const ProductParams: React.FC<IProductParams> = ({ product }): JSX.Element => {
  const styleSubmit = { fontSize: '18px', fontWeight: 700 }
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { currentColor } = useProduct()
  const { favorites } = getFavoriteFromLS()
  const { addItemForBasket, openAlertBar, setCurrentColor, setItemIsLiked } = useActions()
  const isFavorite = favorites.some((favorite: IItem) => favorite._id === product._id)

  const existColors = COLORS.map((item): colorType => {
    const isExist = product.colors?.some((color: colorType) => color.nameColor === item.nameColor)
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

  useEffect(() => {
    const isLoading = Object.keys(product).length
    if (isLoading) {
      const currentColor = existColors.find((item) => item.exist)
      const index = existColors.indexOf(currentColor)
      setCurrentColor({ index, ...currentColor })
    }
  }, [product])

  const handleCurrentColor = (obj: colorType) => {
    return {
      borderRadius: '5px',
      backgroundColor: obj.color,
      transition: 'transform ease-in-out 0.1s',
    }
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
        <h2>{getPrefixTitle(product)}</h2>
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
          {existColors.map((item: colorType, index: number) => {
            const isActive = currentColor.index === index
            return (
              <li key={index}>
                <span
                  className={`product__light ${isActive ? 'product__light_active' : 'product__light_disabled'}`}
                  style={{ border: `3px solid ${isActive ? '#4675CE' : '#fff'}` }}
                />
                <Button
                  onClick={() =>
                    setCurrentColor({
                      index,
                      color: item.color,
                      nameColor: item.nameColor,
                      exist: item.exist,
                    })
                  }
                  style={handleCurrentColor(item)}
                  variant='contained'
                >
                  {!item.exist && <CloseOutlined className='product__closeIcon' />}
                </Button>
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
