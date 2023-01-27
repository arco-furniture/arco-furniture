import BasketItem from './BasketItem'
import styles from '../../scss/modules/basket/basket-approval.module.scss'
import React from 'react'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'
import MenuApproval from 'pages/basket/components/MenuApproval'

const BasketApproval: React.FC = () => {
  const { data } = useQuery('get basket approval', () => BasketService.getBasketApproval())

  return (
    <section>
      <div className={styles.approve}>
        <div className={styles.approve__container}>
          {data?.map((item: any) => (
            <BasketItem key={item._id} item={item} />
          ))}
        </div>
        <MenuApproval />
      </div>
    </section>
  )
}

export default BasketApproval
