import React, { useEffect, useRef, useState } from 'react'
import { BasketApproval, BasketControl, BasketOrder } from '../index'
import BasketNavigation from 'pages/basket/BasketNavigation'
import { useAuth, useBasket } from '../../hooks/useStateSelectors'
import { useNavigate } from 'react-router-dom'

const Basket: React.FC = () => {
  const { dataBasketItems } = useBasket()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isControl, setIsControl] = useState<boolean>(true)
  const [isApproval, setIsApproval] = useState<boolean>(false)
  const [isOrder, setIsOrder] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState(0)

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
