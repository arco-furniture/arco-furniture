import React from 'react'
import { Button, ThemeProvider } from '@mui/material'
import { profileInputTheme } from '../themes/profileInputTheme'

const ButtonSub: React.FC<any> = ({ children }) => {
  return <Button variant='contained'>{children}</Button>
}
export default ButtonSub
