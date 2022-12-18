import React from 'react'
import styles from '../../scss/modules/homeSub.module.scss'
import subtitle from '../../images/sub.png'

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
          <input type='text' value='asd' />
          <button>подписаться</button>
        </form>
      </div>
    </div>
  )
}

export default HomeSub
