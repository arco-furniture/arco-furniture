import { createTheme } from '@mui/material'

export const adviceButtonTheme = createTheme({
  typography: {
    button: {
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontWeight: '700',
      textTransform: 'none',
      boxShadow: '4px 4px 10px rgb(0 0 0 / 10%)',
      gap: '10px',
      backgroundColor: '#F5F5F5',
      letterSpacing: '0.02em',
    },
  },
})
