import { createTheme } from '@mui/material'

export const adviceButtonTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F5F5F5',
    },
    text: {
      primary: '#414141',
    },
  },
  typography: {
    button: {
      htmlFontSize: 16,
      fontWeightBold: 'bold',
    },
  },
})
