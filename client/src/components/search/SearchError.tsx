import React from 'react'
import s from '../../scss/modules/search.module.scss'

const SearchError: React.FC<any> = () => {
  return (
    <div className={s.search__error}>
      <span className={s.search__message}>Мы ничего не нашли 🐒️ </span>
    </div>
  )
}

export default SearchError
