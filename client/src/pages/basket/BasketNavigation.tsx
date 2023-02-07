import React, { useEffect, useRef, useState } from 'react'
import styles from 'scss/modules/basket/basket-navigation.module.scss'
import { IconButton, Step, StepButton, Stepper } from '@mui/material'
import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useStateSelectors'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { AcceptPopover } from 'components'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'
import { IActiveStep } from 'pages/basket/types'

const BasketNavigation: React.FC<IActiveStep> = ({ activeStep }): JSX.Element => {
  const steps = ['Ваша корзина', 'Оформление заказа', 'Оплата заказа']
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({})
  const { clearBasketItems, setClearBasketState } = useActions()
  const [anchorElClearBasket, setAnchorElClearBasket] = useState(null)
  const [anchorElChangeStage, setAnchorElChangeStage] = useState(null)
  const [indexStage, setIndexStage] = useState<number>(1)
  const isMounted = useRef<boolean>(false)
  const [requestStage, setRequestStage] = useState<boolean>(false)
  const { user } = useAuth()
  const { setUser } = useActions()

  const { refetch } = useQuery(
    'change stage basket',
    () => BasketService.changeStage(indexStage).then((userInfo) => setUser(userInfo)),
    {
      enabled: false,
    },
  )

  const handleClearBasket = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElClearBasket(evt.currentTarget)
  }

  const handleChangeStage = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    setIndexStage(index)
    setAnchorElChangeStage(evt)
  }

  const handleAcceptClearBasket = () => {
    if (user) {
      clearBasketItems()
    } else {
      setClearBasketState()
      localStorage.removeItem('items')
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      refetch()
      isMounted.current = false
    }
  }, [requestStage])

  const handleAcceptChangeStage = () => {
    setRequestStage(!requestStage)
    isMounted.current = true
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Корзина</h2>
        <Stepper activeStep={activeStep} className={styles.stepper}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton
                className={styles.step}
                disabled={activeStep <= index}
                onClick={(evt) => handleChangeStage(evt, index)}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </div>
      <IconButton aria-label='fingerprint' color='error' className={styles.clear} onClick={handleClearBasket}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <AcceptPopover
        anchorEl={anchorElChangeStage}
        setAnchorEl={setAnchorElChangeStage}
        handleAccept={handleAcceptChangeStage}
        question={`Перейти на стадию "${steps[indexStage]}"?
         Информация с предыдущих стадий будет удалена.`}
      />
      <AcceptPopover
        anchorEl={anchorElClearBasket}
        setAnchorEl={setAnchorElClearBasket}
        handleAccept={handleAcceptClearBasket}
        question='Очистить корзину?'
      />
    </div>
  )
}

export default BasketNavigation
