import React from 'react'
import Chip from '@mui/material/Chip'
import styles from '../scss/modules/authorsPopup.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub'

const ChipDeveloper: React.FC<any> = ({ item, size }) => {
  return (
    <a
      className={styles.popup__name}
      href={item.link}
      target='_blank'
      style={{ textDecoration: 'none' }}
      rel='noreferrer'
    >
      <Chip
        className={styles.popup__name}
        color='primary'
        icon={<GitHubIcon />}
        label={item.name}
        variant='outlined'
        style={{ cursor: 'pointer', maxWidth: '145px' }}
        size={size}
      />
    </a>
  )
}

export default ChipDeveloper
