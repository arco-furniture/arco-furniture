import s from '../scss/modules/notFound.module.scss'
import React from 'react'

const PageNotFound: React.FC = () => {
  return (
    <div className={s.notFound}>
      <div className={s.notFound__wrapper}>
        <h1 className={s.notFound__error}>404</h1>
        <p className={s.notFound__text}>Страница не найдена</p>
      </div>
    </div>
  )
}

export default PageNotFound
