import React, { memo } from 'react'
import { useActions } from '../../hooks/useActions'
import { useOther } from '../../hooks/useStateSelectors'
import PopupTemplate from '../popups/PopupTemplate'
import styles from '../../scss/modules/popups.module.scss'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'

const ProjectPopup: React.FC = (): JSX.Element => {
  const { closePopupProject } = useActions()
  const { statusPopupProject } = useOther()
  return (
    <PopupTemplate status={statusPopupProject} handleClose={closePopupProject}>
      <div className={styles.popup__wrapper}>
        <h3 className={styles.popup__text} style={{ margin: 0 }}>
          Коротко о проекте 🔥
        </h3>
        <p className={styles.popup__target}>
          Проект создавался с целью закрепления ключевых навыков разработки клиент-серверного приложения (Frontend /
          Backend / Deploy).
        </p>
        <p className={styles.popup__imp}>
          В нем <b>не предполагается</b> оптимизация верстки под различные разрешения экрана, pixel perfect и т.п.
        </p>
        <h4 className={styles.popup__titleMoments}>Некоторые интересные моменты:</h4>
        <ul className={styles.popup__moments}>
          <li className={styles.popup__moment}>
            <DoneOutlinedIcon color='primary' style={{ position: 'relative' }} />
            Реализована безопасная авторизация пользователя через success и refresh токеты. Токен передается через
            cookie и по необходимости переобновляется за кулисами пользователя.
          </li>
          <li className={styles.popup__moment}>
            <DoneOutlinedIcon color='primary' style={{ position: 'relative' }} />
            Работа с данными реализована в комбинации с Redux Toolkit и React Query. В основном использовался React
            Query для кеширования запросов. А Redux для изменения стейта в двух и более компонентах. Для стейтов и
            экшенов созданы удобные хуки.
          </li>
          <li className={styles.popup__moment}>
            <DoneOutlinedIcon color='primary' style={{ position: 'relative' }} />
            Оформление заказа, подсчёт товаров, суммы и т.д. – все реализовано на backend части. Исключено вмешательство
            пользователя в изменение стоимости товаров, их количества и доступных средств.
          </li>
          <li className={styles.popup__moment}>
            <DoneOutlinedIcon color='primary' style={{ position: 'relative' }} />
            Проект ориентирован на масштабируемость и переиспользование сервисов, модулей, компонентов.
          </li>
          <li className={styles.popup__moment}>
            <DoneOutlinedIcon color='primary' style={{ position: 'relative' }} />
            Оптимизирована загрузка компонентов через lazy loading для более быстрой загрузки первой страницы.
          </li>
        </ul>
      </div>
    </PopupTemplate>
  )
}

export default memo(ProjectPopup)
