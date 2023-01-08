import React from 'react'
import styles from '../../scss/modules/homeSub.module.scss'
import subtitle from '../../images/sub.png'
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material'

const HomeSub: React.FC<any> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#fff',
      },
    },
  })

  return (
    <div className={styles.homeSub}>
      <img draggable={false} className={styles.image} src={subtitle} alt='sub' />
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Подпишись и получай самые <br />
          <span>выгодные предложения и скидки на мебель</span>
        </p>
        <ThemeProvider theme={theme}>
          <form className={styles.form}>
            <TextField placeholder='name@email.com' size='small' label='email' variant='outlined' />
            <Button variant='contained'>подписаться</Button>
          </form>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default HomeSub
