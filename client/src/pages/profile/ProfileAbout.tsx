import React from 'react'
import { useAuth } from '../../hooks/useStateSelectors'
import { Avatar, Button, IconButton, ThemeProvider } from '@mui/material'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import { profileButtonTheme } from '../../themes/profileButtonTheme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import InputProfile from '../../ui/InputProfile'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'

const ProfileAbout: React.FC = () => {
  const { user } = useAuth()
  const avatarStyle = { bgcolor: '#4675CE', width: '33px', height: '33px' }

  return (
    <article className='profileAbout box'>
      <div className='profileAbout__avatar'>
        <h3 className='subtitle'>Аватар</h3>
        <p className='profileAbout__textAvatar'>Вы можете загрузить свой аватар в форматах jpeg, jpg и png.</p>
        <div className='profileAbout__avatarEdit'>
          <Avatar style={avatarStyle} variant='rounded' />
          <ThemeProvider theme={profileButtonTheme}>
            <Button startIcon={<CameraAltOutlinedIcon />}>Изменить</Button>
            <Button sx={{ minWidth: '0' }}>
              <DeleteOutlineOutlinedIcon fontSize='small' />
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className='profileAbout__info'>
        <h3 className='subtitle'>Персональная информация</h3>
        <form className='profileAbout__form'>
          <div className='profileAbout__btnWrapper'>
            <ThemeProvider theme={profileButtonTheme}>
              <Button startIcon={<ModeOutlinedIcon />}>Изменить</Button>
            </ThemeProvider>
          </div>
          <InputProfile label='Имя' defaultValue='Максим' disabled />
          <InputProfile label='Электронная почта' defaultValue='asasdasd@yandex.ru' disabled />
        </form>
      </div>
      <div className='profileAbout__info'>
        <h3 className='subtitle'>Пароль</h3>
        <form className='profileAbout__form'>
          <div className='profileAbout__btnWrapper'>
            <ThemeProvider theme={profileButtonTheme}>
              <Button startIcon={<LockOpenOutlinedIcon />}>Изменить</Button>
            </ThemeProvider>
          </div>
          <InputProfile type='password' label='Пароль' defaultValue='12345678' disabled />
          <InputProfile type='password' label='Подтвердите пароль' defaultValue='12345678' disabled />
        </form>
      </div>
    </article>
  )
}

export default ProfileAbout
