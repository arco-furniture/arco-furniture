import React, { memo, useEffect, useState } from 'react'
import PopupTemplate from 'components/popups/PopupTemplate'
import Form from 'ui/Form'
import InputForm from 'ui/InputForm'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const RegisterPopup = () => {
  const [isErrors, setIsErrors] = useState<boolean>(false)
  const { isLoading, popupRegister } = useAuth()
  const { setPopupRegister } = useActions()

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

  const { login, registerUser } = useActions()

  const onSubmit = (data) => {
    if (!isErrors) {
      const userData = {
        password: data.password,
        email: data.email,
        firstName: data.firstName,
      }
      registerUser(userData)
    }
  }

  return (
    <PopupTemplate status={popupRegister} handleClose={setPopupRegister}>
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
        <button type='submit' className={`form__submit ${isErrors && 'form__submit_disabled'}`} disabled={isLoading}>
          Зарегистрироваться
        </button>
      </Form>
    </PopupTemplate>
  )
}

export default memo(RegisterPopup)
