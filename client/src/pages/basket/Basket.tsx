import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BasketApproval, BasketControl, BasketOrder } from '../index'
import BasketNavigation from './BasketNavigation'
import { useAuth, useBasket } from '../../hooks/useStateSelectors'

const Basket: React.FC = (): JSX.Element => {
  const { dataBasketItems } = useBasket()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isControl, setIsControl] = useState<boolean>(false)
  const [isApproval, setIsApproval] = useState<boolean>(false)
  const [isOrder, setIsOrder] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(0)

  if (!dataBasketItems.length) {
    navigate('/')
  }

  useEffect(() => {
    setIsControl(!user || !user?.steps?.info)
    setIsOrder(!!user?.steps?.info && !user?.steps?.form)
    setIsApproval(!!user?.steps?.info && !!user?.steps?.form)
  }, [user])

  useEffect(() => {
    const steps = [isControl, isOrder, isApproval]
    setActiveStep(steps.indexOf(true))
  }, [isControl, isOrder, isApproval])

  return (
    <section className='basket'>
      <BasketNavigation activeStep={activeStep} />
      {isControl && <BasketControl />}
      {isOrder && <BasketOrder />}
      {isApproval && <BasketApproval />}
    </section>
  )
}

export default Basket
