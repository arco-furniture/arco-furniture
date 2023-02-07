import React from 'react'
import styles from '../../scss/modules/homeSub.module.scss'
import { Button, ThemeProvider } from '@mui/material'
import { adviceButtonTheme } from '../../themes/adviceButtonTheme'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'
import { BlackTooltip } from 'components/index'

const HomeSub: React.FC = (): JSX.Element => (
  <div className={styles.homeSub}>
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Подпишитесь на чат-бота в Telegram <br />
        <span> и получайте информацию о вашем заказе.</span>
      </p>
      <ThemeProvider theme={adviceButtonTheme}>
        <div className={styles.wrapperButton}>
          <BlackTooltip title={<TitleTooltip title='В разработке' />} placement='bottom'>
            <Button size='large' className={styles.button}>
              Чат-бот Telegram
            </Button>
          </BlackTooltip>
        </div>
      </ThemeProvider>
    </div>
    <img
      src='https://i.postimg.cc/LsQLyv9W/telegram.jpg'
      width='100%'
      height='160px'
      className={styles.image}
      alt='telegram'
    />
  </div>
)

export default HomeSub
