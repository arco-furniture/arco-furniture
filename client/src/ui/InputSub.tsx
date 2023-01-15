import { TextField, ThemeProvider } from '@mui/material'
import React from 'react'
// eslint-disable-next-line import/namespace
import { subElementsTheme } from '../themes/subElementsTheme'

const InputSub: React.FC<any> = ({ placeholder, size, label, defaultValue, disabled = false }) => {
  return (
    <ThemeProvider theme={subElementsTheme}>
      <TextField
        placeholder={placeholder}
        size={size}
        label={label}
        InputProps={{ style: { color: '#fff' } }}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </ThemeProvider>
  )
}

export default InputSub
