import React, { memo, useEffect, useState } from 'react'
import { Checkbox, ButtonGroup, Button } from '@mui/material'
import styles from '../../scss/modules/basket/basket-item.module.scss'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { IBasketItem } from '../../types/basketTypes'
import { useActions } from '../../hooks/useActions'

const BasketItem: React.FC<IBasketItem> = (props) => {
  const [benefit, setBenefit] = useState<any>(0)
  const { article, color, count, image, oldPrice, price, title, id, isControl } = props
  const { removeItemForBasket, handleCountItem } = useActions()
  const stylesCountButtons = { border: '1px solid #D9D9D9', minWidth: '26px', padding: '0' }
  const stylesCountButtonLeft = { ...stylesCountButtons, borderRight: 'solid 0 #D9D9D9' }
  const stylesCountButtonRight = { ...stylesCountButtons, borderLeft: 'solid 0 #D9D9D9' }
  const stylesCounter = {
    borderLeft: 'solid 0 #D9D9D9',
    minWidth: '24px',
    color: '#414141',
    fontSize: '14px',
    padding: '0',
  }

  const handleRemoveCard = () => {
    removeItemForBasket(props)
  }

  const handleBenefitItem = () => {
    setBenefit((props.oldPrice - props.price) * props.count)
  }

  useEffect(() => {
    handleBenefitItem()
  }, [props])

  return (
    <div className={styles.item}>
      <img className={styles.item__image} src={image} alt='image' style={{ width: '188px' }} />
      <div className={styles.item__container}>
        <div className={styles.item__left}>
          <div className={styles.item__box}>
            {isControl && <Checkbox sx={{ width: '15px', height: '15px', mr: '5px' }} />}
            <p className={styles.item__title}>{title}</p>
          </div>
          <div className={styles.item__specsBox}>
            <div className={styles.item__box}>
              <p className={styles.item__text}>Цвет:</p>
              <div className={styles.item__color} style={{ backgroundColor: color }} />
            </div>
            <div className={styles.item__specifications}>
              <div className={styles.item__box}>
                <p className={styles.item__text}>Характеристики товара</p>
              </div>
            </div>
          </div>
        </div>
        {isControl && (
          <ButtonGroup sx={{ mt: '12px' }} size='small' variant='outlined' className={styles.item__button_group}>
            <Button
              className={styles.item__button_count}
              style={stylesCountButtonLeft}
              onClick={() => handleCountItem({ id, status: false })}
              disabled={props.count <= 1}
            >
              <RemoveIcon />
            </Button>
            <Button style={stylesCounter} disabled>
              {count}
            </Button>
            <Button
              className={styles.item__button_count}
              style={stylesCountButtonRight}
              size='small'
              onClick={() => handleCountItem({ id, status: true })}
            >
              <AddIcon />
            </Button>
          </ButtonGroup>
        )}
        <div className={styles.item__contain}>
          <div className={styles.item__wrapperPrice}>
            <div style={{ justifyContent: 'space-between' }} className={styles.item__box}>
              <p className={styles.item__price}>{getPriceWithFormat(count * oldPrice)} &#8381;</p>
              <p className={styles.item__new}>{getPriceWithFormat(count * price)} &#8381;</p>
            </div>
            <p className={styles.item__prof}>выгода {getPriceWithFormat(benefit)}</p>
          </div>
          <div className={styles.item__box_artical}>
            <p className={styles.item__artical}>Артикул: {article}</p>
            {isControl && (
              <Button
                className={styles.item__close}
                onClick={handleRemoveCard}
                variant='outlined'
                style={{
                  minWidth: '22px',
                  minHeight: '22px',
                  padding: '0',
                  border: '1px solid #D9D9D9',
                }}
              >
                <CloseIcon style={{ color: '#D9D9D9' }} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(BasketItem)
