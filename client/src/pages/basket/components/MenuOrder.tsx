import React from 'react'
import stylesForm from '../../../scss/modules/basket/basket-form.module.scss'
import styles from '../../../scss/modules/basket/basket-order.module.scss'
import { getPriceWithFormat } from '../../../utils/getPriceWithFormat'
import { Button } from '@mui/material'
import { useQuery } from 'react-query'
import { BasketService } from '../../../services/basket.service'
import DatePickerOrder from 'pages/basket/components/DatePickerOrder'

const MenuOrder: React.FC<any> = ({ isValid, control, errors }) => {
  const { data: priceData, isSuccess } = useQuery('get price preliminary', () => BasketService.getPricePreliminary())

  return (
    <div className={stylesForm.order}>
      <div className={styles.info}>
        <div className={styles.info__wrapper}>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Стоимость без скидки</p>
            <p className={styles.info__text_value}>{isSuccess && getPriceWithFormat(priceData?.discount)} &#8381;</p>
          </div>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Экономия</p>
            <p className={styles.info__text_discount}>{isSuccess && getPriceWithFormat(priceData?.gap)} &#8381;</p>
          </div>
          <div className={styles.info__box}>
            <p className={styles.info__text}>Итого к оплате</p>
            <p className={styles.info__text_total}>{isSuccess && getPriceWithFormat(priceData?.price)} &#8381;</p>
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
