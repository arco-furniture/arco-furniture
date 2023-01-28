import React, { useEffect, useState } from 'react'
import { BasketApproval, BasketControl, BasketOrder } from '../index'
import BasketNavigation from 'pages/basket/BasketNavigation'
import { useAuth, useBasket } from '../../hooks/useStateSelectors'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'
import { setUser } from '../../redux/auth/auth.slice'

const Basket: React.FC = () => {
  const { dataBasketItems } = useBasket()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isControl, setIsControl] = useState<boolean>(true)
  const [isApproval, setIsApproval] = useState<boolean>(false)
  const [isOrder, setIsOrder] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState(0)
  const { pathname } = useLocation()

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

  const getRequestItems = (items) => {
    return items.map((item) => {
      return {
        _id: item._id,
        color: item.color,
        count: item.count,
      }
    })
  }

  const [basketRequest, setBasketRequest] = useState<[]>(getRequestItems(dataBasketItems))
  const { data: userData } = useQuery('post basket items', () => BasketService.postBasketItems(basketRequest))

  useEffect(() => {
    if (user) {
      const items = getRequestItems(dataBasketItems)
      setBasketRequest(items)
    }
  }, [user, dataBasketItems])

  useEffect(() => {
    if (userData) {
      setUser(userData)
    }
  }, [userData])

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
