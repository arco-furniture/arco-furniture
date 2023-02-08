import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useStateSelectors'
import { useLocation } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import Cookies from 'js-cookie'
import { IProvider } from './types'

const AuthProvider: React.FC<IProvider> = ({ children }): JSX.Element => {
  const { user } = useAuth()
  const { checkAuth, logout, setIsLoadingAuth } = useActions()
  const { pathname } = useLocation()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      checkAuth()
      console.log(accessToken)
      setIsLoadingAuth()
    } else {
      setIsLoadingAuth()
    }
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) {
      logout()
    }
  }, [pathname])

  return <>{children}</>
}

export default AuthProvider
