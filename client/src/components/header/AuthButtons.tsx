import React from 'react'
import styles from '../../scss/modules/authButtons.module.scss'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setPopupAuth, setPopupRegister } from '../../redux/auth/AuthSlice'

const AuthButtons: React.FC<any> = () => {
  const dispatch = useDispatch()

  const onClickRegister = () => {
    dispatch(setPopupRegister())
  }

  const onClickAuth = () => {
    dispatch(setPopupAuth())
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
