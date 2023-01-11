import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import BasketNavigation from './components/BasketNavigation'
import styles from '../../scss/modules/basket/basket.module.scss'
import { IBasketItem } from '../../types/basketTypes'
import BasketItem from './components/BasketItem'
import { Button, Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { useBasket } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const BasketControl: React.FC = () => {
  const navigate = useNavigate()
  const { dataBasketItems, totalPrice, basketBtnStatus } = useBasket()
  const { changeBasketBtnStatus } = useActions()
  const { register, handleSubmit } = useForm()
  const [dataInfo, setDataInfo] = useState('')
  const styleNavigation = [{ 1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)' }]

  const [values, setValues] = React.useState({})
  const [errors, setErrors] = React.useState({})
  const [isValid, setIsValid] = React.useState(false)

  const handleChangeLabel = (evt: any) => {
    const { name } = evt
    const { value } = evt
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: evt.validationMessage })
    setIsValid(evt.closest('form').checkValidity())
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/basket/order')
  }

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeBasketBtnStatus(e.target.checked)
  }

  return (
    <section>
      <BasketNavigation bgcolor={styleNavigation} />
      <div className={styles.basket}>
        <div className={styles.basket__container}>
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
              isControl
            />
          ))}
        </div>
        <div className={styles.menu}>
          <form onSubmit={(evt) => handleSubmitForm(evt)}>
            <p className={styles.menu__title}>Выберите способ доставки</p>
            <div className={styles.menu__box}>
              <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' name='radio-buttons-group'>
                <FormControlLabel
                  className={styles.menu__label}
                  {...register('delivery')}
                  value='Самовывоз'
                  control={<Radio />}
                  label='Самовывоз'
                  onChange={(evt) => handleChangeLabel(evt.target)}
                />
                <FormControlLabel
                  className={styles.menu__label}
                  {...register('delivery')}
                  value='Доставка'
                  control={<Radio />}
                  label='Доставка'
                  onChange={(evt) => handleChangeLabel(evt.target)}
                />
              </RadioGroup>
            </div>
            <p className={styles.menu__title}>Выберите способ оплаты</p>
            <div className={styles.menu__box}>
              <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' name='radio-buttons-group'>
                <FormControlLabel
                  className={styles.menu__label}
                  {...register('payment')}
                  value='cash'
                  control={<Radio />}
                  label='Наличные'
                  onChange={(evt) => handleChangeLabel(evt.target)}
                />
                <FormControlLabel
                  className={styles.menu__label}
                  {...register('payment')}
                  value='card'
                  control={<Radio />}
                  label='Оплата картой'
                  onChange={(evt) => handleChangeLabel(evt.target)}
                />
              </RadioGroup>
            </div>
            <div className={styles.menu__line} />
            <div className={styles.menu__price}>
              <p className={styles.menu__title}>Итого:</p>
              <p className={styles.menu__title}>{getPriceWithFormat(totalPrice)} &#8381;</p>
            </div>
            <p className={styles.menu__text}>Стоимость указана без учета доставки</p>
            <div className={styles.menu__line} />
            <div style={{ display: 'flex', alignItems: 'start' }}>
              <Checkbox {...register('checkBox')} id='checkBox' onChange={(e) => handleChangeStatus(e)} />
              <p className={styles.menu__text} style={{ width: '327px' }}>
                Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.
              </p>
            </div>
            <Button type='submit' className={styles.menu__button} variant='contained'>
              Продолжить
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BasketControl
