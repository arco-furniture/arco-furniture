import React, { memo, useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  ThemeProvider,
} from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useQuery } from 'react-query'
import { ProfileService } from '../../../services/profile.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../../api/withToastrErrorRedux'
import { useActions } from '../../../hooks/useActions'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IPasswordsType } from '../types'
import { SchemaPasswords } from '../../../schemas'

const ProfilePassword: React.FC = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formValues, setFormValues] = useState({ password, newPassword })
  const { setUser } = useActions()

  const handleClickShowPassword = () => {
    if (active) {
      setShowPassword(!showPassword)
    }
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (active) {
      setFormValues({ password, newPassword })
    } else {
      setShowPassword(false)
      setPassword('')
      setNewPassword('')

      resetField('password')
      resetField('newPassword')
    }
  }, [password, newPassword, active])

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IPasswordsType>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaPasswords),
  })

  const onSubmit = () => {
    if (!Object.keys(errors).length) {
      refetch()
    }
  }

  const { isLoading, refetch } = useQuery(
    'change profile first name',
    () =>
      ProfileService.changePassword(formValues)
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
              disabled={!formValues.password || !formValues.newPassword}
            >
              {isLoading ? 'Загрузка...' : 'Сохранить'}
            </Button>
          </ThemeProvider>
          <IconButton color='primary' onClick={() => setActive(!active)}>
            {!active ? <LockOutlinedIcon color='error' /> : <LockOpenOutlinedIcon color='success' />}
          </IconButton>
        </div>
        <FormControl sx={{ width: '100%' }} variant='outlined' {...register('password')} disabled={!active}>
          <InputLabel htmlFor='password'>Пароль</InputLabel>
          <OutlinedInput
            size='small'
            disabled={!active}
            name='password'
            className='input'
            id='password'
            type={showPassword ? 'text' : 'password'}
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  disabled={!active}
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
          <FormHelperText className='textHelper' color='error' error={!!errors.password}>
            {errors?.password?.message}
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ width: '100%' }} variant='outlined' {...register('newPassword')} disabled={!active}>
          <InputLabel htmlFor='newPassword'>Новый пароль</InputLabel>
          <OutlinedInput
            size='small'
            disabled={!active}
            name='newPassword'
            className='input'
            id='newPassword'
            type={showPassword ? 'text' : 'password'}
            onChange={(evt) => setNewPassword(evt.target.value)}
            value={newPassword}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  disabled={!active}
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label='password replay'
          />
          <FormHelperText className='textHelper' color='error' error={!!errors.newPassword}>
            {errors?.newPassword?.message}
          </FormHelperText>
        </FormControl>
      </form>
    </div>
  )
}

export default memo(ProfilePassword)
