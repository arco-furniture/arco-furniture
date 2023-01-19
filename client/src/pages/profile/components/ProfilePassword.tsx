import React, { useState } from 'react'
import { Button, IconButton, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import InputProfile from '../../../ui/InputProfile'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'

const ProfilePassword: React.FC<any> = () => {
  const [active, setActive] = useState(false)

  return (
    <div className='profileAbout__info'>
      <h3 className='subtitle'>Пароль</h3>
      <form className='profileAbout__form'>
        <div className='profileAbout__btnWrapper'>
          <ThemeProvider theme={profileButtonTheme}>
            <Button startIcon={<VpnKeyOutlinedIcon />} disabled>
              Сохранить
            </Button>
          </ThemeProvider>
          <IconButton color='primary' onClick={() => setActive(!active)}>
            {!active ? <LockOutlinedIcon color='error' /> : <LockOpenOutlinedIcon color='success' />}
          </IconButton>
        </div>
        <InputProfile type='password' label='Пароль' defaultValue='12345678' disabled={!active} />
        <InputProfile type='password' label='Подтвердите пароль' defaultValue='12345678' disabled={!active} />
      </form>
    </div>
  )
}

export default ProfilePassword
