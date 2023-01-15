import React from 'react'
import styles from '../../scss/modules/homeSub.module.scss'
import subtitle from '../../images/sub.png'
import { createTheme, ThemeProvider } from '@mui/material'
import InputSub from '../../ui/InputSub'
import ButtonSub from '../../ui/ButtonSub'

const HomeSub: React.FC<any> = () => {
  return (
    <div className={styles.homeSub}>
      <img draggable={false} className={styles.image} src={subtitle} alt='sub' />
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Подпишись и получай самые <br />
          <span>выгодные предложения и скидки на мебель</span>
        </p>
        <form className={styles.form}>
          <InputSub placeholder='name@email.com' size='small' label='email' defaultValue='name@email.com' />
          <ButtonSub>подписаться</ButtonSub>
        </form>
      </div>
    </div>
  )
}

export default HomeSub
