import React, { useEffect, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from '../../scss/modules/basket/basket.module.scss'
import BasketItem from './components/BasketItem'
import { Button, Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { useAuth, useBasket } from '../../hooks/useStateSelectors'
import { blue, red } from '@mui/material/colors'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'
import { toastError } from '../../api/withToastrErrorRedux'
import { useActions } from '../../hooks/useActions'
import { IBasketItem, IControlForm, requestDataTypes } from 'pages/basket/types'

const BasketControl: React.FC = (): JSX.Element => {
  const { dataBasketItems, totalPrice } = useBasket()
  const { setUser } = useActions()
  const { user } = useAuth()
  const { setPopupAuth } = useActions()
  const [dataRequest, setDataRequest] = useState<object>({})
  const isMounted = useRef<boolean>(false)

  const { refetch } = useQuery('basket post stage info', () => BasketService.postStageInfo(dataRequest), {
    enabled: false,
    onSuccess(info) {
      setUser(info)
    },
    onError(error) {
      toastError(error)
    },
  })

  useEffect(() => {
    if (isMounted.current) {
      refetch()
    }
    isMounted.current = true
  }, [dataRequest])

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IControlForm>({
    mode: 'onChange',
  })

  const onSubmit = (data: requestDataTypes) => {
    if (user && isValid) {
      const info = { delivery: data.delivery, pay: data.pay }
      setDataRequest(info)
    } else {
      setPopupAuth()
    }
  }

  return (
    <section className={styles.basket__section}>
      <div className={styles.basket__container}>
        {dataBasketItems?.map((item: IBasketItem) => (
          <BasketItem item={item} key={item._id} isControl />
        ))}
      </div>
      <div className={styles.menu}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.menu__title}>Выберите способ доставки</p>
          <div className={styles.menu__box}>
            <Controller
              rules={{ required: true }}
              control={control}
              name='delivery'
              defaultValue='Курьером'
              render={({ field: { onChange } }) => (
                <RadioGroup row defaultValue='Курьером'>
                  <FormControlLabel
                    className={styles.menu__label}
                    value='Курьером'
                    control={<Radio />}
                    label='Курьером'
                    onChange={onChange}
                  />
                  <FormControlLabel
                    className={styles.menu__label}
                    value='Почтой'
                    control={<Radio />}
                    label='Почтой'
                    onChange={onChange}
                  />
                </RadioGroup>
              )}
            />
          </div>
          <p className={styles.menu__title}>Выберите способ оплаты</p>
          <div className={styles.menu__box}>
            <Controller
              rules={{ required: true }}
              control={control}
              name='pay'
              defaultValue='Оплата картой'
              render={({ field: { onChange } }) => (
                <RadioGroup defaultValue='Оплата картой' row>
                  <FormControlLabel
                    className={styles.menu__label}
                    value='Наличные'
                    control={<Radio />}
                    label='Наличные'
                    onChange={onChange}
                  />
                  <FormControlLabel
                    className={styles.menu__label}
                    value='Оплата картой'
                    control={<Radio />}
                    label='Оплата картой'
                    onChange={onChange}
                  />
                </RadioGroup>
              )}
            />
          </div>
          <div className={styles.menu__line} />
          <div className={styles.menu__price}>
            <p className={styles.menu__title}>Итого:</p>
            <p className={styles.menu__title}>{getPriceWithFormat(totalPrice)} &#8381;</p>
          </div>
          <div className={styles.menu__line} />
          <div style={{ display: 'flex', alignItems: 'start' }}>
            <Controller
              rules={{ required: true }}
              control={control}
              name='query'
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  onChange={onChange}
                  checked={value}
                  sx={{ color: red[700], '&.Mui-checked': { color: blue[700] } }}
                />
              )}
            />
            <p className={styles.menu__text} style={{ width: '327px' }}>
              Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.
            </p>
          </div>
          <Button variant='outlined' type='submit' className={styles.menu__button} disabled={!isValid}>
            Продолжить
          </Button>
        </form>
      </div>
    </section>
  )
}

export default BasketControl
