import React from 'react'
import image from 'images/CategoryNull.svg'
import { Box, Typography } from '@mui/material'

const CategoryNull = () => {
  const styleBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    bgColor: '#fff',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
    paddingTop: '20px',
    borderRadius: '5px',
    marginTop: '10px',
  }

  return (
    <Box sx={styleBox}>
      <Typography color='mediumbluea' variant='h4' gutterBottom>
        В категории еще нет товаров 🐥
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        но они обязательно скоро появятся!
      </Typography>
      <img draggable={false} src={image} alt='image' height='550px' />
    </Box>
  )
}

export default CategoryNull
