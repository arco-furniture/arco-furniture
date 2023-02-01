import BasketItem from './components/BasketItem'
import styles from '../../scss/modules/basket/basket-approval.module.scss'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'
import MenuApproval from 'pages/basket/components/MenuApproval'
import { useBasket } from '../../hooks/useStateSelectors'

const BasketApproval: React.FC = () => {
  const { dataBasketItems, isLoadingBasket } = useBasket()
  const { data, refetch } = useQuery(
    ['get basket approval', dataBasketItems],
    () => BasketService.getBasketApproval(),
    {
      enabled: false,
    },
  )

  useEffect(() => {
    if (isLoadingBasket) {
      refetch()
    }
  }, [dataBasketItems, isLoadingBasket])

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
