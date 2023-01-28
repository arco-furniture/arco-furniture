import React from 'react'
import ConfettiTemplate from 'components/popups/ConfettiTemplate'
import styles from '../../scss/modules/popups.module.scss'
import pay from '../../images/pay.svg'
import { useOther } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import { getPriceWithFormat } from 'utils/getPriceWithFormat'

const PaymentPopup = () => {
  const { statusPaymentPopup, paymentValue } = useOther()
  const { closePaymentPopup } = useActions()
  return (
    <ConfettiTemplate statusPopup={statusPaymentPopup} handleClose={closePaymentPopup}>
      <div className={styles.popup__container}>
        <h2 className={styles.popup__title}>Поздравляем!</h2>
        <p className={styles.popup__paragraph}>Вы успешно оплатили заказ!</p>
        <div className={styles.popup__imageContainer}>
          {paymentValue && <span className={styles.popup__payValue}>{getPriceWithFormat(paymentValue)} &#8381;</span>}
          <img draggable={false} className={styles.popup__payImage} src={pay} alt='payment' />
        </div>
      </div>
    </ConfettiTemplate>
  )
}

export default PaymentPopup
