import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IItem } from '../../types/itemTypes'
import { useActions } from '../../hooks/useActions'
import { getBasketItem } from '../../utils/getBasketItem'
import { getFavoriteFromLS } from '../../utils/getFavoriteFromLS'
import { handleChangeFavorite } from '../../utils/handleChangeFavorite'

const CardBottom: React.FC<any> = ({ selectedColor, item }) => {
  const { favorites } = getFavoriteFromLS()
  const { getFirstColor, addItemForBasket, openAlertBar, setItemIsLiked } = useActions()
  const isFavorite = favorites.some((favorite: IItem) => favorite._id === item._id)
  const [isLiked, setIsLiked] = useState(isFavorite)

  const onClickFavoriteButton = () => {
    handleChangeFavorite({ isFavorite, item })
    setIsLiked(!isLiked)
    setItemIsLiked()
    openAlertBar({
      message: item.title,
      type: 'favorite',
    })
  }

  const handlerOnClickBuy = () => {
    openAlertBar({
      message: item.title,
      type: 'cart',
    })
    const basketItem = getBasketItem(item, selectedColor)
    addItemForBasket(basketItem)
  }

  useEffect(() => {
    if (isFavorite) {
      setIsLiked(true)
    }
  }, [])

  const onClickBuyButton = () => {
    getFirstColor(item.colors)
  }

  return (
    <div className='card__buttons-wrapper'>
      {selectedColor ? (
        <Button style={{ width: '100%' }} size='medium' variant='contained' onClick={() => handlerOnClickBuy()}>
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
          <IconButton color='error' onClick={onClickFavoriteButton}>
            {isLiked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </>
      )}
    </div>
  )
}

export default memo(CardBottom)
