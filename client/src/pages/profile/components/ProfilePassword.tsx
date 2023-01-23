import React, { memo, useEffect, useState } from 'react'
import { Button, IconButton, TextField, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { useQuery } from 'react-query'
import { ProfileService } from '../../../services/profile.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../../api/withToastrErrorRedux'
import { useActions } from '../../../hooks/useActions'

const ProfilePassword: React.FC<any> = () => {
  const [active, setActive] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordReplay, setPasswordReplay] = useState('')
  const [formValues, setFormValues] = useState({ password, passwordReplay })
  const { setUser } = useActions()

  useEffect(() => {
    if (active) {
      setFormValues({ password, passwordReplay })
    } else {
      setPassword('')
      setPasswordReplay('')

      resetField('password')
      resetField('passwordReplay')
    }
  }, [password, passwordReplay, active])

  const Schema = yup.object().shape({
    password: yup.string().required('Вы не заполнили').min(6, 'Не менее 6 символов'),
    passwordReplay: yup
      .string()
      .required('Вы не заполнили')
      .min(6, 'Не менее 6 символов')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  })

  type Inputs = {
    password: string
    passwordReplay: string
  }

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(Schema),
  })

  const onSubmit = () => {
    if (!Object.keys(errors).length) {
      refetch()
    }
  }

  const { isLoading, refetch } = useQuery(
    'change profile first name',
    () =>
      ProfileService.changePassword({ password: formValues.password })
        .then((info) => setUser(info))
        .then(() => toastr.success('Данные сохранены', 'Вы изменили пароль'))
        .catch((error) => toastError(error))
        .finally(() => setActive(false)),
    {
      enabled: false,
    },
  )

  return (
    <div className='profileAbout__info'>
      <h3 className='subtitle'>Пароль</h3>
      <form className='profileAbout__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='profileAbout__btnWrapper'>
          <ThemeProvider theme={profileButtonTheme}>
            <Button
              type='submit'
              startIcon={<VpnKeyOutlinedIcon />}
              disabled={!formValues.password || !formValues.passwordReplay}
            >
              {isLoading ? 'Загрузка...' : 'Сохранить'}
            </Button>
          </ThemeProvider>
          <IconButton color='primary' onClick={() => setActive(!active)}>
            {!active ? <LockOutlinedIcon color='error' /> : <LockOpenOutlinedIcon color='success' />}
          </IconButton>
        </div>
        <TextField
          {...register('password')}
          type='password'
          name='password'
          className='input'
          label='Пароль'
          variant='outlined'
          size='small'
          sx={{ width: '100%' }}
          disabled={!active}
          placeholder='*******'
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <TextField
          {...register('passwordReplay')}
          type='password'
          name='passwordReplay'
          className='input'
          label='Подтвердите пароль'
          variant='outlined'
          size='small'
          sx={{ width: '100%' }}
          disabled={!active}
          placeholder='*******'
          onChange={(evt) => setPasswordReplay(evt.target.value)}
          value={passwordReplay}
          error={!!errors.passwordReplay}
          helperText={errors?.passwordReplay?.message}
        />
      </form>
    </div>
  )
}

export default memo(ProfilePassword)
