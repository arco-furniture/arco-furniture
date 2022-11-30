import React from 'react'
import styles from '../../scss/modules/footer.module.scss'
import logo from '../../images/logo-white.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={logo} alt='' />
          <em>
            Выполнено командой
            <a href='https://github.com/arco-furniture' target='_blank' rel='noreferrer'>
              {' '}
              @yandex-team
            </a>
          </em>
        </div>
      </div>
    </footer>
  )
}

export default Footer
