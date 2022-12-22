import React from 'react'
import { Switch, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BasketNavigation from './components/BasketNavigation'
import styles from '../../scss/modules/basket/basket-order.module.scss'
import stylesForm from '../../scss/modules/basket/basket-form.module.scss'
import { useForm } from 'react-hook-form'
import { useAppSelector } from '../../hooks/redux'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'

const BasketOrder: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const totalPrice = useAppSelector((state) => state.basket.totalPrice)
  const totalOldPrice = useAppSelector((state) => state.basket.totalOldPrice)
  const totalBenefit = useAppSelector((state) => state.basket.totalBenefit)

  const [values, setValues] = React.useState({})
  const [errors, setErrors] = React.useState({})
  const [isValid, setIsValid] = React.useState(false)

  const handleChangeInput = (event: any) => {
    const { target } = event
    const { name } = target
    const { value } = target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: target.validationMessage })
    setIsValid(target.closest('form').checkValidity())
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/basket/order/approval')
  }

  const objColor = { 1: '#4675CE', 2: '#4675CE', 3: 'rgba(65, 65, 65, 0.2)' }

  return (
    <section>
      <BasketNavigation bgcolor={objColor} />
      <form onSubmit={handleSubmitForm}>
        <div className={stylesForm.order}>
          <div className={stylesForm.form}>
            <h3 className={stylesForm.form__title}>Оформление заказа</h3>
            <div className={stylesForm.form__wrapper}>
              <div className={stylesForm.form__box}>
                <TextField
                  className={stylesForm.form__input}
                  {...register('fcs')}
                  label='ФИО'
                  placeholder='Иванов Иван Иванович'
                  onChange={handleChangeInput}
                  type='text'
                  size='small'
                />
                <TextField
                  className={stylesForm.form__input}
                  {...register('city')}
                  label='Город'
                  placeholder='Краснодар'
                  onChange={handleChangeInput}
                  type='text'
                  size='small'
                />
              </div>
              <div className={stylesForm.form__box}>
                <TextField
                  className={stylesForm.form__input}
                  {...register('phone')}
                  label='Телефон'
                  placeholder='+7 (000) 000 00 00'
                  onChange={handleChangeInput}
                  type='phone'
                  size='small'
                />
                <TextField
                  className={stylesForm.form__input}
                  {...register('adress')}
                  label='Адрес'
                  placeholder='ул. Ленина, д. 1, кв. 1'
                  onChange={handleChangeInput}
                  type='text'
                  size='small'
                />
              </div>
              <TextField
                className={stylesForm.form__input}
                label='Комментарий к заказу'
                type='text'
                maxRows={4}
                rows={4}
                multiline
                size='small'
              />
            </div>
          </div>
          <div className={styles.info}>
            <ul className={styles.info__wrapper}>
              <div className={styles.info__box}>
                <p className={styles.info__text}>Стоимость без скидки</p>
                <p className={styles.info__text_value}>{getPriceWithFormat(totalOldPrice)} &#8381;</p>
              </div>
              <div className={styles.info__box}>
                <p className={styles.info__text}>Экономия</p>
                <p className={styles.info__text_discount}>{getPriceWithFormat(totalBenefit)} &#8381;</p>
              </div>
              <div className={styles.info__box}>
                <p className={styles.info__text}>Итого к оплате</p>
                <p className={styles.info__text_total}>{getPriceWithFormat(totalPrice)} &#8381;</p>
              </div>
            </ul>
            <div className={styles.info__bottom}>
              <p className={styles.info__build}>Сборка:</p>
              <p className={styles.info__build_sum}>+{getPriceWithFormat(2193)} &#8381;</p>
              <Switch {...register('Switch')} defaultChecked />
            </div>
            <Button
              // disabled={basketOrderBtnStatus}
              type='submit'
              className={styles.info__button}
              variant='contained'
            >
              Продолжить
            </Button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default BasketOrder
