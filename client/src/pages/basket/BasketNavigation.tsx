import React, { useState } from 'react'
import styles from 'scss/modules/basket/basket-navigation.module.scss'
import { IconButton, Step, StepButton, Stepper } from '@mui/material'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'
import { BlackTooltip } from 'components/index'

const BasketNavigation: React.FC<any> = ({ activeStep }) => {
  const steps = ['Ваша корзина', 'Оформление заказа', 'Оплата заказа']
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({})

  return (
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Корзина</h2>
        <Stepper activeStep={activeStep} className={styles.stepper}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton style={{ padding: '5px 3px', margin: '5px 0' }}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
      </div>
      <BlackTooltip title={<TitleTooltip title='Очистить корзину' />} placement='top'>
        <IconButton aria-label='fingerprint' color='error' className={styles.clear}>
          <RemoveShoppingCartOutlinedIcon />
        </IconButton>
      </BlackTooltip>
    </div>
  )
}

export default BasketNavigation
