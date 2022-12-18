import BasketNavigation from './components/BasketNavigation'
import BasketItem from './components/BasketItem'
import styles from '../../scss/modules/basket/basket-approval.module.scss'
import { Button, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useNavigate } from 'react-router-dom'
import { basketSelector } from '../../redux/basket/basketSlice'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { IBasketItem } from '../../types/basketTypes'
import React from 'react'
import { BlackTooltip } from '../../components'
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined'

const BasketApproval: React.FC = () => {
  const navigate = useNavigate()
  const { dataBasketItems, totalPrice } = useAppSelector(basketSelector)

  const handleNextStage = () => {
    navigate('/')
    const popup = document.getElementById('popup')
    if (popup) {
      popup.style.display = 'flex'
    }
  }

  const handleGetPromo = (e: any) => {
    if (e.id === 'btn') {
      navigator.clipboard.writeText('ACRO10')
      e.style.display = 'none'
    }
  }

  return (
    <section>
      <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: '#4675CE' }} />
      <div className={styles.approve}>
        <div className={styles.approve__container}>
          {dataBasketItems?.map((item: IBasketItem) => (
            <BasketItem
              key={item.id}
              id={item.id}
              article={item.article}
              color={item.color}
              count={item.count}
              image={item.image}
              oldPrice={item.oldPrice}
              price={item.price}
              specs={item.specs}
              title={item.title}
              isControl={false}
            />
          ))}
        </div>
        <div className={styles.info}>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Cпособ доставки</p>
            <p className={styles.menu__title}>Самовывоз</p>
          </div>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Способ оплаты</p>
            <div className={styles.menu__promo}>
              <p className={styles.menu__subtitle}>Наличные</p>
              <p className={styles.menu__title} style={{ color: '#4675CE' }}>
                Промокод
              </p>
            </div>
          </div>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Сборка</p>
            <p className={styles.menu__title}>Включена в итоговую стоимость</p>
          </div>
          <div className={styles.menu__line} />
          <p>Промокод для оплаты заказа</p>
          <div className={styles.menu__wrapper}>
            <ListItemButton className={styles.menu__listItem}>
              <ListItemIcon style={{ minWidth: 'auto', color: '#4675CE' }} />
              <ListItemText primary='ACRO10' style={{ opacity: '0.5', marginLeft: '15px' }} />
              <BlackTooltip title='Скопировать промокод' placement='top'>
                <Button className={styles.menu__copy} variant='contained'>
                  <CopyAllOutlinedIcon />
                </Button>
              </BlackTooltip>
            </ListItemButton>
            <TextField label='Введите промокод' placeholder='ACRO10' />
          </div>

          {/* <div style={{ position: 'relative' }}> */}
          {/*    <div className={styles.menu__place}>ACRO10</div> */}
          {/*    <button */}
          {/*        onClick={(e) => { handleGetPromo(e.target) }} */}
          {/*        className={styles.menu__btn2}></button> */}
          {/*    <button */}
          {/*        onClick={(e) => { handleGetPromo(e.target) }} */}
          {/*        className={styles.menu__btn} */}
          {/*        id="btn"></button> */}
          {/* </div> */}
          <div className={styles.info__bottom}>
            <p className={styles.info__text}>Итого к оплате</p>
            <p className={styles.menu__title}>{getPriceWithFormat(totalPrice)} &#8381;</p>
          </div>
          <Button
            disabled={!dataBasketItems.length}
            sx={{ mt: '36px' }}
            className={styles.menu__button}
            variant='contained'
            onClick={handleNextStage}
          >
            Оплатить заказ
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BasketApproval
