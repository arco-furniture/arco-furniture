import React from 'react'
import styles from '../../scss/modules/authButtons.module.scss'
import { Button } from '@mui/material'
import { useActions } from '../../hooks/useActions'

const AuthButtons: React.FC = (): JSX.Element => {
  const { setPopupAuth, setPopupRegister } = useActions()

  const onClickRegister = () => {
    setPopupRegister()
  }

  const onClickAuth = () => {
    setPopupAuth()
  }

  return (
    <div className={styles.authButtons}>
      <Button size='small' variant='outlined' onClick={() => onClickRegister()}>
        Регистрация
      </Button>
      <Button size='small' variant='contained' onClick={() => onClickAuth()}>
        Войти
      </Button>
    </div>
  )
}
export default AuthButtons
