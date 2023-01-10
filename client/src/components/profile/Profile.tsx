import React from 'react'
import styles from '../../scss/modules/profile.module.scss'
import { useAuth } from '../../hooks/useStateSelectors'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className={styles.headerProfile}>
      <div className={styles.headerProfile__wrapper}>
        <h3 className={styles.headerProfile__name}>{user.firstName}</h3>
        <em className={styles.headerProfile__balance}>1000 ₽</em>
      </div>
      <img className={styles.headerProfile__avatar} src='https://i.ibb.co/GnD4hYk/ava.jpg' alt='avatar' />
    </div>
  )
}

export default Profile
