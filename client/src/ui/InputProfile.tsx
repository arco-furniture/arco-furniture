import React from 'react'
import { TextField, ThemeProvider } from '@mui/material'
import { profileInputTheme } from '../themes/profileInputTheme'

const InputProfile: React.FC<any> = (props) => {
  const {
    name,
    onChange,
    value,
    error = false,
    textError,
    label,
    defaultValue,
    disabled = false,
    type = 'text',
    placeholder = '',
  } = props
  return (
    <ThemeProvider theme={profileInputTheme}>
      <TextField
        name={name}
        className='input'
        label={label}
        variant='outlined'
        size='small'
        defaultValue={defaultValue}
        sx={{ width: '100%' }}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        helperText={textError}
        error={error}
        onChange={onChange}
        value={value}
      />
    </ThemeProvider>
  )
}

export default InputProfile
