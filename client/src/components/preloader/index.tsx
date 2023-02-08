import React from 'react'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'
import { Box } from '@mui/material'

const Preloader: React.FC = (): JSX.Element => {
  return (
    <Box className='preloader'>
      <Box className='preloader__wrapper'>
        <CircularProgress
          variant='determinate'
          sx={{
            color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant='indeterminate'
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#5a81e5' : '#4675CE'),
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={40}
          thickness={4}
        />
      </Box>
    </Box>
  )
}

export default Preloader
