import React from 'react'
import image from 'images/CategoryNull.svg'
import { Box, Typography } from '@mui/material'

const CategoryNull = () => {
  const styleBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 80px',
  }

  return (
    <Box sx={styleBox}>
      <Typography color='mediumbluea' variant='h4' gutterBottom>
        В категории еще нет товаров 🐥
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        но они обязательно скоро появятся!
      </Typography>
      <img draggable={false} src={image} alt='image' width='100%' style={{ marginTop: '20px' }} />
    </Box>
  )
}

export default CategoryNull
