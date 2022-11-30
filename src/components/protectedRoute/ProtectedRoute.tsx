import { Navigate } from 'react-router-dom'
import { IProtectedRoute } from './types'
import React from 'react'

const ProtectedRoute: React.FC<IProtectedRoute> = ({ existData, children }) => {
  return existData ? children : <Navigate to='/' />
}

export default ProtectedRoute
