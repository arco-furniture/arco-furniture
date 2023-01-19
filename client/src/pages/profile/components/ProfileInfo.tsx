import React, { useState } from 'react'
import { Button, IconButton, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'
import InputProfile from '../../../ui/InputProfile'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'

const ProfileInfo: React.FC<any> = ({ data }) => {
  const [active, setActive] = useState(false)

  return (
    <div className='profileAbout__info'>
      <h3 className='subtitle'>Персональная информация</h3>
      <form className='profileAbout__form'>
        <div className='profileAbout__btnWrapper'>
          <ThemeProvider theme={profileButtonTheme}>
            <Button startIcon={<ModeOutlinedIcon />} disabled>
              Сохранить
            </Button>
          </ThemeProvider>
          <IconButton color='primary' onClick={() => setActive(!active)}>
            {!active ? <LockOutlinedIcon color='error' /> : <LockOpenOutlinedIcon color='success' />}
          </IconButton>
        </div>
        <InputProfile label='Имя' defaultValue={data.firstName} disabled={!active} />
        <InputProfile label='Электронная почта' defaultValue={data.email} disabled />
      </form>
    </div>
  )
}

export default ProfileInfo
