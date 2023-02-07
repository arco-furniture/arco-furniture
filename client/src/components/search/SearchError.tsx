import React from 'react'
import styles from '../../scss/modules/search.module.scss'

const SearchError: React.FC = (): JSX.Element => (
  <div className={styles.search__error}>
    <span className={styles.search__message}>Мы ничего не нашли 🐒️ </span>
  </div>
)

export default SearchError
