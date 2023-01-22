import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useStateSelectors'
import { useLocation } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import Cookies from 'js-cookie'

const AuthProvider: React.FC<any> = ({ children }) => {
  const { user } = useAuth()
  const { checkAuth, logout } = useActions()
  const { pathname } = useLocation()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    console.log(accessToken)
    if (accessToken) {
      checkAuth()
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
