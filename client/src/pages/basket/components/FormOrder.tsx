import React, { useState } from 'react'
import stylesForm from '../../../scss/modules/basket/basket-form.module.scss'
import { TextField } from '@mui/material'
import { useAuth } from '../../../hooks/useStateSelectors'
import { IFormOrder } from 'pages/basket/types'

const FormOrder: React.FC<IFormOrder> = ({ register, errors }) => {
  const { user } = useAuth()
  const [firstName, setFirstName] = useState<string>(user?.firstName)
  const [city, setCity] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  return (
    <div className={stylesForm.form}>
      <h3 className={stylesForm.form__title}>Оформление заказа</h3>
      <div className={stylesForm.form__wrapper}>
        <div className={stylesForm.form__box}>
          <TextField
            {...register('firstName')}
            className='input input__full'
            type='text'
            name='firstName'
            label='Имя'
            variant='outlined'
            size='small'
            value={firstName || ''}
            onChange={(evt) => setFirstName(evt.target.value)}
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
            placeholder='Иванов Иван Иванович'
          />

          <TextField
            {...register('city')}
            className='input input__full'
            type='text'
            name='city'
            label='Город'
            variant='outlined'
            size='small'
            value={city}
            onChange={(evt) => setCity(evt.target.value)}
            error={!!errors.city}
            helperText={errors?.city?.message}
            placeholder='Иркутск'
          />
        </div>
        <div className={stylesForm.form__box}>
          <TextField
            {...register('phone')}
            className='input input__full'
            type='text'
            name='phone'
            label='Телефон'
            variant='outlined'
            size='small'
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)}
            error={!!errors.phone}
            helperText={errors?.phone?.message}
            placeholder='+7 (123) 456 78 90'
          />
          <TextField
            {...register('address')}
            className='input input__full'
            type='text'
            name='address'
            label='Адрес'
            variant='outlined'
            size='small'
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
            error={!!errors.address}
            helperText={errors?.address?.message}
            placeholder='ул. Ленина, д. 1, кв. 1'
          />
        </div>
        <TextField
          {...register('comment')}
          className='input input__full'
          type='text'
          maxRows={4}
          rows={4}
          multiline
          size='small'
          label='Комментарий к заказу'
        />
      </div>
    </div>
  )
}

export default FormOrder
