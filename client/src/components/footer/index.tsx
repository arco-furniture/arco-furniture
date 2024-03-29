import React from 'react'
import { BACKEND_SKILLS, FRONTEND_SKILLS, DEPLOY_SKILLS } from '../../app/constants'
import { Skill } from '../index'
import styles from '../../scss/modules/footer.module.scss'
import logo from '../../images/logo-black.svg'
import { IconButton, Link } from '@mui/material'
import QrCodeIcon from '@mui/icons-material/QrCode'

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <a href='/'>
          <img draggable={false} className={styles.logo} src={logo} alt='logo' />
        </a>
        <div className={styles.middle}>
          <div className={styles.about}>
            <p className={styles.aboutText}>
              <span>АркоМебель</span> - это онлайн-магазин мебели с разнообразным выбором фильтров товара, личным
              кабинетом и оформлением заказа.
            </p>
          </div>
          <div className={styles.deploy}>
            <h4 className={styles.title}>Deploy</h4>
            <div className={styles.skills}>
              {DEPLOY_SKILLS.map((item, index) => (
                <Skill name={item.name} icon={item.icon} key={index} />
              ))}
            </div>
          </div>
          <div className={styles.backend}>
            <h4 className={styles.title}>Backend</h4>
            <div className={styles.skills}>
              {BACKEND_SKILLS.map((item, index) => (
                <Skill name={item.name} icon={item.icon} key={index} />
              ))}
            </div>
          </div>
          <div className={styles.frontend}>
            <h4 className={styles.title}>Frontend</h4>
            <div className={styles.skills}>
              {FRONTEND_SKILLS.map((item, index) => (
                <Skill name={item.name} icon={item.icon} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <em className={styles.copy}>&copy; kejero team 2022</em>
          <div className={styles.version}>
            <Link
              className={styles.releases}
              href='https://github.com/arco-furniture/arco-furniture/releases'
              target='_blank'
              rel='noreferrer'
            >
              v2.2.0
            </Link>
            <Link href='https://github.com/arco-furniture/arco-furniture' target='_blank' rel='noreferrer'>
              <IconButton>
                <QrCodeIcon color='primary' />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
