import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Button } from '@mui/material'
import stylesForm from '../scss/modules/basket/basket-form.module.scss'
import styles from '../scss/modules/basket/basket-order.module.scss'
import { getPriceWithFormat } from '../utils/getPriceWithFormat'
import { BasketService } from '../services/basket.service'
import DatePickerOrder from './DatePickerOrder'
import { useBasket } from '../hooks/useStateSelectors'
import { IMenuOrder } from '../pages/basket/types'

const MenuOrder: React.FC<IMenuOrder> = ({ isValid, control, errors }): JSX.Element => {
  const { dataBasketItems, isLoadingBasket } = useBasket()
  const { data, isSuccess, refetch } = useQuery('get price preliminary', () => BasketService.getPricePreliminary())

  useEffect(() => {
    if (isLoadingBasket) {
      refetch()
    }
  }, [dataBasketItems, isLoadingBasket])

  return (
    <div className={stylesForm.order}>
      <div className={styles.info}>
        <div className={styles.info__wrapper}>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Стоимость без скидки</p>
            <p className={styles.info__text_value}>{isSuccess && getPriceWithFormat(data?.discount)} &#8381;</p>
          </div>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Экономия</p>
            <p className={styles.info__text_discount}>{isSuccess && getPriceWithFormat(data?.gap)} &#8381;</p>
          </div>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Итого к оплате</p>
            <p className={styles.info__text_total}>{isSuccess && getPriceWithFormat(data?.price)} &#8381;</p>
          </div>
        </div>
        <DatePickerOrder control={control} errors={errors} />
      </div>
      <Button disabled={!isValid} type='submit' className={styles.info__button} variant='outlined'>
        Продолжить
      </Button>
    </div>
  )
}

export default MenuOrder
