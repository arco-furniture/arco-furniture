import React, { memo } from 'react'
import PopupTemplate from 'components/popups/PopupTemplate'
import InputForm from 'ui/InputForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { Link } from '@mui/material'
import Cookies from 'js-cookie'
import { authPopupDataTypes } from 'components/popups/types'
import { SchemaAuth } from '../../schemas'
import Form from 'ui/Form'

const AuthPopup: React.FC = (): JSX.Element => {
  const { popupAuth } = useAuth()
  const { setPopupAuth, setPopupRegister } = useActions()
  const { checkAuth } = useActions()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<authPopupDataTypes>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaAuth),
  })

  const { loginUser } = useActions()

  const onSubmit = async (data: authPopupDataTypes) => {
    if (isValid) {
      const userData = {
        email: data.email,
        password: data.password,
      }
      setPopupAuth()
      await loginUser(userData)
      const accessToken = Cookies.get('accessToken')
      if (accessToken) {
        await checkAuth()
      }
    }
  }

  const handleLink = () => {
    setPopupAuth()
    setPopupRegister()
  }

  return (
    <PopupTemplate status={popupAuth} handleClose={setPopupAuth}>
      <>
        <Form title='Авторизация' onSubmit={handleSubmit(onSubmit)}>
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
          <button type='submit' className={`form__submit ${!isValid && 'form__submit_disabled'}`}>
            Войти
          </button>
        </Form>
        <div className='popup__changeWrapper'>
          <p className='popup__paragraph'>У вас еще нет личного профиля?</p>
          <Link fontSize={16} className='popup__link' onClick={() => handleLink()}>
            Зарегистрироваться
          </Link>
        </div>
      </>
    </PopupTemplate>
  )
}

export default memo(AuthPopup)
