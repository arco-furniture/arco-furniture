import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import styles from '../../scss/modules/preloader.module.scss'

const Preloader: React.FC = () => {
  return (
    <section className={styles.preloader}>
      <div className={styles.preloader__wrapper}>
        <h2 className={styles.preloader__title}>Загрузка...</h2>
        <CircularProgress />
      </div>
    </section>
  )
}

export default Preloader
