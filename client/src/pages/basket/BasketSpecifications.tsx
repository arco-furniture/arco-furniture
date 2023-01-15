// eslint-disable-next-line import/no-unresolved
import styles from '../../../scss/modules/basket/basket-specifications.module.scss'
import { specsTypes } from '../../types/basketTypes'
import React from 'react'

const BasketSpecifications: React.FC<specsTypes> = (props) => {
  return (
    <div>
      <div className={styles.specifications__box}>
        <p className={styles.specifications__text}>{props.specsId}</p>
        <p className={styles.specifications__text}>{props.value}</p>
      </div>
    </div>
  )
}

export default BasketSpecifications
