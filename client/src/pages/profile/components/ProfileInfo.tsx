import React, { memo, useEffect, useState } from 'react'
import { Button, IconButton, ListItemButton, ListItemIcon, ListItemText, TextField, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined'
import { useQuery } from 'react-query'
import { ProfileService } from '../../../services/profile.service'
import { useActions } from '../../../hooks/useActions'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../../api/withToastrErrorRedux'
import { useAuth } from '../../../hooks/useStateSelectors'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'

const ProfileInfo: React.FC<any> = () => {
  const { user } = useAuth()
  const [active, setActive] = useState(false)
  const [formValues, setFormValues] = useState({ firstName: user.firstName })
  const { setUser } = useActions()

  const { isLoading, refetch } = useQuery(
    'change profile first name',
    () =>
      ProfileService.changeFirstName(formValues)
        .then((info) => setUser(info))
        .then(() => toastr.success('Данные сохранены', 'Вы изменили имя'))
        .catch((error) => toastError(error))
        .finally(() => setActive(false)),
    {
      enabled: false,
    },
  )

  const Schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Вы не заполнили')
      .matches(/^[a-zа-яё]+$/i, 'Некорректное имя'),
  })

  type Inputs = {
    firstName: string
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

  useEffect(() => {
    if (!active) {
      setFormValues({ firstName: user.firstName })
    }
  }, [active, user.firstName])

  const handleOnChange = (evt) => {
    setFormValues({ firstName: evt.target.value })
  }

  const onSubmit = () => {
    if (!Object.keys(errors).length) {
      refetch()
    }
  }

  const onClickActive = () => {
    setActive(!active)
    resetField('firstName')
  }

  return (
    <div className='profileAbout__info'>
      <h3 className='subtitle'>Персональная информация</h3>
      <form className='profileAbout__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='profileAbout__btnWrapper'>
          <ThemeProvider theme={profileButtonTheme}>
            <Button
              type='submit'
              startIcon={<ModeOutlinedIcon />}
              disabled={user.firstName === formValues.firstName || isLoading}
            >
              {isLoading ? 'Загрузка...' : 'Сохранить'}
            </Button>
          </ThemeProvider>
          <IconButton color='primary' onClick={() => onClickActive()}>
            {!active ? <LockOutlinedIcon color='error' /> : <LockOpenOutlinedIcon color='success' />}
          </IconButton>
        </div>
        <TextField
          {...register('firstName')}
          type='text'
          name='firstName'
          className='input'
          label='Имя'
          variant='outlined'
          size='small'
          defaultValue={formValues.firstName}
          sx={{ width: '100%' }}
          disabled={!active}
          value={formValues.firstName}
          onChange={handleOnChange}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
      </form>
      <ListItemButton className='profileAbout__emailItem'>
        <ListItemIcon style={{ minWidth: 'auto' }}>
          <LocalPostOfficeOutlinedIcon color='primary' style={{ marginLeft: '15px' }} />
        </ListItemIcon>
        <ListItemText primary={user.email} style={{ marginLeft: '15px' }} />
      </ListItemButton>
    </div>
  )
}

export default memo(ProfileInfo)
