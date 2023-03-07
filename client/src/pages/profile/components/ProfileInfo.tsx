import React, { memo, useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  TextField,
  ThemeProvider,
} from '@mui/material'
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
import { SchemaInfo } from '../../../schemas'
import { IInfoType } from '../types'

const ProfileInfo: React.FC = (): JSX.Element => {
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

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IInfoType>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaInfo),
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

  const MyListItemButton = styled(ListItemButton)({
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    padding: 0,
    marginTop: 0,
    cursor: 'default',
  })

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
          sx={{ width: '100%', margin: '5px 0 12px' }}
          disabled={!active}
          value={formValues.firstName}
          onChange={handleOnChange}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
      </form>
      <MyListItemButton className='profileAbout__emailItem'>
        <ListItemIcon sx={{ minWidth: 'auto', margin: '7px 0' }}>
          <LocalPostOfficeOutlinedIcon color='primary' sx={{ marginLeft: '15px' }} />
        </ListItemIcon>
        <ListItemText primary={user.email} sx={{ marginLeft: '15px' }} />
      </MyListItemButton>
    </div>
  )
}

export default memo(ProfileInfo)
