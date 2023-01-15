import React from 'react'
import styles from '../../scss/modules/footer.module.scss'
import logo from '../../images/logo-black.svg'
import ChipDeveloper from '../../ui/ChipDeveloper'
import { authorsName, backendSkills, frontendSkills } from 'app/constants'
import Skill from 'components/skill/Skill'
import { IconButton } from '@mui/material'
import QrCodeIcon from '@mui/icons-material/QrCode'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <img draggable={false} className={styles.logo} src={logo} alt='logo' />
        <div className={styles.middle}>
          <div className={styles.about}>
            <p className={styles.aboutText}>
              <span>Акромебель</span> - это онлайн-магазин мебели с разнообразным выбором фильтров товара, личным
              кабинетом и оформлением заказа.
            </p>
          </div>
          <div className={styles.developers}>
            <h4 className={styles.title}>Developers</h4>
            <div className={styles.devContain}>
              {authorsName.map((item, index) => (
                <ChipDeveloper key={index} item={item} size='small' />
              ))}
            </div>
          </div>
          <div className={styles.backend}>
            <h4 className={styles.title}>Backend</h4>
            <div className={styles.skills}>
              {backendSkills.map((item, index) => (
                <Skill name={item.name} icon={item.icon} key={index} />
              ))}
            </div>
          </div>
          <div className={styles.frontend}>
            <h4 className={styles.title}>Frontend</h4>
            <div className={styles.skills}>
              {frontendSkills.map((item, index) => (
                <Skill name={item.name} icon={item.icon} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <em className={styles.copy}>&copy; Yandex Team 2023</em>
          <a href='https://github.com/arco-furniture/arco-furniture'>
            <IconButton>
              <QrCodeIcon color='primary' />
            </IconButton>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
