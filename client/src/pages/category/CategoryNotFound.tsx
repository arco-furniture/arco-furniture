import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useActions } from '../../hooks/useActions'

const CategoryNotFound: React.FC = (): JSX.Element => {
  const { setResetFilters } = useActions()
  const styleBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 80px',
    boxSizing: 'border-box',
  }

  return (
    <Box sx={styleBox}>
      <Typography color='mediumbluea' variant='h4' gutterBottom>
        Нет товаров по заданным фильтрам 🐒
      </Typography>
      <Button style={{ marginTop: '40px' }} variant='outlined' onClick={() => setResetFilters()}>
        Сбросить настройки
      </Button>
    </Box>
  )
}

export default CategoryNotFound
