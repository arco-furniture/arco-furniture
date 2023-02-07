import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { IProvider } from './types'

const MuiProvider: React.FC<IProvider> = ({ children }): JSX.Element => {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#4675CE',
      },
      secondary: {
        main: '#d21944',
      },
    },
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      button: {
        fontWeight: 400,
        letterSpacing: '0.05em',
      },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiProvider
