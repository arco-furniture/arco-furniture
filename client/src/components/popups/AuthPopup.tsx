import React, { useEffect, useState } from 'react'
import PopupTemplate from 'components/popups/PopupTemplate'
import Form from 'ui/Form'
import InputForm from 'ui/InputForm'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const AuthPopup = () => {
  const [isErrors, setIsErrors] = useState<boolean>(false)
  const { isLoading, popupAuth } = useAuth()
  const { setPopupAuth } = useActions()

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
      <Form title='Авторизация' submit={handleSubmit}>
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
