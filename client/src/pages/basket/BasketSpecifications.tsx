import React from 'react'
// eslint-disable-next-line import/no-unresolved
import styles from '../../../scss/modules/basket/basket-specifications.module.scss'
import { IBasketSpecifications } from './types'

const BasketSpecifications: React.FC<IBasketSpecifications> = ({ specsId, value }): JSX.Element => (
  <div className={styles.specifications__box}>
    <p className={styles.specifications__text}>{specsId}</p>
    <p className={styles.specifications__text}>{value}</p>
  </div>
)

export default BasketSpecifications
