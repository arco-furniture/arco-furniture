import React, { useEffect, useState } from 'react'
import styles from '../../../scss/modules/basket/basket-approval.module.scss'
import { Button, Collapse, ThemeProvider } from '@mui/material'
import { useAuth } from '../../../hooks/useStateSelectors'
import ListItemTemplate from 'components/listItemTemplate/ListItemTemplate'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import DeliveryApproval from 'pages/basket/components/DeliveryApproval'
import { useQuery } from 'react-query'
import { BasketService } from '../../../services/basket.service'
import { getPriceWithFormat } from '../../../utils/getPriceWithFormat'
import { theme } from '../../../themes/errorButtonTheme'
import AcceptPopover from 'components/acceptPopover/AcceptPopover'
import { useActions } from '../../../hooks/useActions'

const MenuApproval = () => {
  const { user } = useAuth()
  const [openForm, setOpenForm] = useState(false)
  const [solvency, setSolvency] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const { paymentBasketItems } = useActions()
  const { info, form } = user.steps
  const isNotPay = info?.pay !== 'Оплата картой'

  const getDeliveryDate = () => {
    const date = new Date(form?.reqDate || '')
    const month = Number(date.getMonth()) + 1
    const year = date.getFullYear()
    const day = date.getDate()
    return `${day}.${month <= 9 ? String(0 + String(month)) : month}.${year}г.`
  }

  const { data, isSuccess } = useQuery('get price approval', () => BasketService.getPriceApproval())
  const buttonInfo = solvency ? 'Оплатить заказ' : data?.solvency?.info

  const handleClickApproval = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget)
  }

  useEffect(() => {
    if (data?.solvency) {
      switch (data.solvency.pay) {
        case false:
          setSolvency(false)
          break
        case true:
          setSolvency(true)
      }
    }
  }, [data])

  const handleAccept = () => {
    paymentBasketItems()
  }

  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <div className={styles.info__box}>
          <p className={styles.info__text}>Cпособ доставки:</p>
          <p className={styles.menu__title}>{info?.delivery}</p>
        </div>
        <div className={styles.info__box}>
          <p className={styles.info__text}>Способ оплаты:</p>
          <div className={styles.menu__promo}>
            {isNotPay && <p className={styles.menu__subtitle}>{info?.pay}</p>}
            <p className={styles.menu__title}>Оплата картой</p>
          </div>
        </div>
        <div className={styles.info__box}>
          <p className={styles.info__text}>Дата доставки:</p>
          <p className={styles.menu__title} style={{ color: '#4675CE' }}>
            {getDeliveryDate()}
          </p>
        </div>
      </div>
      <div className={styles.menu__line} />
      <ListItemTemplate
        fullWidth
        title='Информация о заказе'
        setOpen={setOpenForm}
        open={openForm}
        icon={<ShoppingCartOutlinedIcon />}
      >
        <Collapse in={openForm} timeout='auto' unmountOnExit>
          <DeliveryApproval />
        </Collapse>
      </ListItemTemplate>
      <div className={styles.menu__line} />
      <div className={styles.wrapper}>
        <div className={styles.info__box}>
          <p className={styles.info__text}>Ваш баланс:</p>
          <p className={styles.menu__title}>{isSuccess && getPriceWithFormat(data?.userMoney) + ' ' + '₽'}</p>
        </div>
        <div className={styles.info__box}>
          <p className={styles.info__text}>Итого к оплате:</p>
          <p className={styles.menu__title} style={{ color: '#4675CE' }}>
            {isSuccess && getPriceWithFormat(data?.allPrice) + ' ' + '₽'}
          </p>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          fullWidth
          variant='outlined'
          type='submit'
          className={styles.menu__button}
          disabled={!solvency}
          onClick={handleClickApproval}
        >
          {data && data.solvency.pay ? 'Оплатить заказ' : buttonInfo}
        </Button>
        <AcceptPopover
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleAccept={handleAccept}
          question='Оплатить заказ?'
        />
      </ThemeProvider>
    </div>
  )
}

export default MenuApproval
