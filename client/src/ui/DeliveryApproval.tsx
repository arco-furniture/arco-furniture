import React from 'react'
import styles from '../scss/modules/basket/basket-approval.module.scss'
import { useAuth } from '../hooks/useStateSelectors'

const DeliveryApproval = () => {
  const { user } = useAuth()
  const { form } = user.steps

  return (
    <div className={styles.wrapper__delivery}>
      <div className={styles.info__box}>
        <p className={styles.info__text_lite}>Имя:</p>
        <p className={styles.menu__title_lite}>{form?.firstName}</p>
      </div>
      <div className={styles.info__box}>
        <p className={styles.info__text_lite}>Город:</p>
        <p className={styles.menu__title_lite}>{form?.city}</p>
      </div>
      <div className={styles.info__box}>
        <p className={styles.info__text_lite}>Телефон:</p>
        <p className={styles.menu__title_lite}>{form?.phone}</p>
      </div>
      <div className={styles.info__box}>
        <p className={styles.info__text_lite}>Адрес:</p>
        <p className={styles.menu__title_lite}>{form?.address}</p>
      </div>
      <div className={styles.info__box_comment}>
        <span className={styles.info__text_lite}>Комментарий к заказу: </span>
        <span className={styles.menu__title_lite}>{form?.comment}</span>
      </div>
    </div>
  )
}

export default DeliveryApproval
