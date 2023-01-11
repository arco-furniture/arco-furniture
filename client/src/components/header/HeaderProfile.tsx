import React from 'react'
import styles from '../../scss/modules/headerProfile.module.scss'
import { useAuth } from '../../hooks/useStateSelectors'
import { useNavigate } from 'react-router-dom'

const HeaderProfile = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/profile/${user._id}`)
  }

  return (
    <button className={styles.headerProfile} onClick={() => handleOnClick()}>
      <div className={styles.headerProfile__wrapper}>
        <h3 className={styles.headerProfile__name}>{user.firstName}</h3>
        <em className={styles.headerProfile__balance}>1000 ₽</em>
      </div>
      <img className={styles.headerProfile__avatar} src='https://i.ibb.co/GnD4hYk/ava.jpg' alt='avatar' />
    </button>
  )
}

export default HeaderProfile
