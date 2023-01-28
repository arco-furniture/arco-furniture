import React from 'react'
import styles from 'scss/modules/basket/basket-navigation.module.scss'
import { IconButton, Step, StepButton, Stepper } from '@mui/material'
import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useStateSelectors'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import AcceptPopover from 'components/acceptPopover/AcceptPopover'
import { useNavigate } from 'react-router-dom'

const BasketNavigation: React.FC<any> = ({ activeStep }) => {
  const steps = ['Ваша корзина', 'Оформление заказа', 'Оплата заказа']
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({})
  const { clearBasketItems, setClearBasketState } = useActions()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const { user } = useAuth()

  const handleClearBasket = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget)
  }

  const handleAccept = () => {
    if (user) {
      clearBasketItems()
    } else {
      setClearBasketState()
      localStorage.removeItem('items')
    }
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Корзина</h2>
        <Stepper activeStep={activeStep} className={styles.stepper}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton className={styles.step} disabled={activeStep <= index}>
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
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        handleAccept={handleAccept}
        question='Очистить корзину?'
      />
    </div>
  )
}

export default BasketNavigation
