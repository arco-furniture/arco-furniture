import { createTheme } from '@mui/material'

export const subElementsTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
    action: {
      active: '#fff',
      hover: '#fff',
      focus: '#fff',
    },
  },
  typography: {
    body1: {
      fontFamily: 'PT Sans',
      fontWeight: 400,
      color: '#ffffff',
    },
  },
})
