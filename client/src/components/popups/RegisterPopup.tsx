import React, { memo, useEffect, useState } from 'react'
import PopupTemplate from 'components/popups/PopupTemplate'
import Form from 'ui/Form'
import InputForm from 'ui/InputForm'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { Link } from '@mui/material'
import Cookies from 'js-cookie'

const RegisterPopup = () => {
  const { isLoading, popupRegister } = useAuth()
  const { setPopupAuth, setPopupRegister } = useActions()
  const { checkAuth } = useActions()

  const Schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Вы не заполнили')
      .matches(/^[a-zа-яё]+$/i, 'Некорректное имя'),
    email: yup.string().required('Вы не заполнили').email('Некорректная электронная почта'),
    password: yup.string().required('Вы не заполнили'),
    passwordReplay: yup
      .string()
      .required('Вы не заполнили')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  })

  // хук валидации формы
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(Schema),
  })

  const { registerUser } = useActions()

  const onSubmit = async (data) => {
    if (isValid) {
      const userData = {
        password: data.password,
        email: data.email,
        firstName: data.firstName,
      }
      setPopupRegister()
      registerUser(userData)
      const accessToken = Cookies.get('accessToken')
      if (accessToken) {
        await checkAuth()
      }
    }
  }

  const handleLink = () => {
    setPopupRegister()
    setPopupAuth()
  }

  return (
    <PopupTemplate status={popupRegister} handleClose={setPopupRegister}>
      <>
        <Form title='Регистрация' onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            label='Имя'
            placeholder='Артем'
            type='text'
            error={!!errors.firstName}
            textError={errors?.firstName?.message}
            {...register('firstName')}
          />
          <InputForm
            label='Электронная почта'
            placeholder='example@mail.ru'
            type='email'
            error={!!errors.email}
            textError={errors?.email?.message}
            {...register('email')}
          />
          <InputForm
            label='Пароль'
            type='password'
            error={!!errors.password}
            textError={errors?.password?.message}
            {...register('password')}
          />
          <InputForm
            label='Подтвердите пароль'
            type='password'
            error={!!errors.passwordReplay}
            textError={errors?.passwordReplay?.message}
            {...register('passwordReplay')}
          />
          <button type='submit' className={`form__submit ${!isValid && 'form__submit_disabled'}`} disabled={isLoading}>
            Зарегистрироваться
          </button>
        </Form>
        <div className='popup__changeWrapper'>
          <p className='popup__paragraph'>У вас есть личный профиль?</p>
          <Link fontSize={16} className='popup__link' onClick={() => handleLink()}>
            Войти
          </Link>
        </div>
      </>
    </PopupTemplate>
  )
}

export default memo(RegisterPopup)
