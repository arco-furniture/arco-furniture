import React, { useRef } from 'react'
import styles from '../../scss/modules/profile.module.scss'

const Profile = () => {
  const isLoggedIn = useRef(true)

  return isLoggedIn ? (
    <div className={styles.headerProfile}>
      <div className={styles.headerProfile__wrapper}>
        <h3 className={styles.headerProfile__name}>Максим П.</h3>
        <em className={styles.headerProfile__balance}>1000 ₽</em>
      </div>
      <img className={styles.headerProfile__avatar} src='https://i.ibb.co/GnD4hYk/ava.jpg' alt='avatar' />
    </div>
  ) : (
    <></>
  )
}

export default Profile
