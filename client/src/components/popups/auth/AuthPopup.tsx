import React, { useEffect, useState } from 'react'
import PopupTemplate from 'components/popups/PopupTemplate'
import Form from 'components/popups/auth/UI/Form'
import InputForm from 'components/popups/auth/UI/InputForm'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
// eslint-disable-next-line import/named
import { setPopupAuth } from '../../../redux/auth/AuthSlice'

const AuthPopup = () => {
  const dispatch = useAppDispatch()
  const [isErrors, setIsErrors] = useState<boolean>(false)
  const isLoading = useAppSelector((state) => state.auth.isLoading)
  const popupAuth = useAppSelector((state) => state.auth.popupAuth)

  const Schema = yup.object().shape({
    email: yup.string().required('Вы не заполнили').email('Некорректная электронная почта'),
    password: yup.string().required('Вы не заполнили'),
  })

  // хук валидации формы
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(Schema),
  })

  // проверяет на наличие всех ошибок в форме
  const existErrors = Object.keys(errors).length
  useEffect(() => {
    setIsErrors(existErrors !== 0)
  }, [existErrors])

  return (
    <PopupTemplate status={popupAuth} handleClose={setPopupAuth}>
      <Form title='Авторизация'>
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
        <button type='submit' className={`form__submit ${isErrors && 'form__submit_disabled'}`} disabled={isLoading}>
          Войти
        </button>
      </Form>
    </PopupTemplate>
  )
}

export default AuthPopup
