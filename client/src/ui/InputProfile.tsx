import React from 'react'
import { TextField, ThemeProvider } from '@mui/material'
// eslint-disable-next-line import/named
import { profileInputTheme } from '../themes/profileInputTheme'

const InputProfile: React.FC<any> = ({ label, defaultValue, disabled = false, type = 'text', placeholder = '' }) => {
  return (
    <ThemeProvider theme={profileInputTheme}>
      <TextField
        label={label}
        variant='outlined'
        size='small'
        defaultValue={defaultValue}
        sx={{ width: '100%' }}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
    </ThemeProvider>
  )
}

export default InputProfile
