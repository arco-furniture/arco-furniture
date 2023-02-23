import React from 'react'
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { ISwiperArrows } from './types'

const SwiperArrows: React.FC<ISwiperArrows> = ({ prevRef, nextRef, widthValue }): JSX.Element => (
  <div className='arrows__nav' style={{ width: widthValue + '%' }}>
    <IconButton ref={prevRef} className='arrows__buttons_nav' color='primary' size='small'>
      <ChevronLeftIcon />
    </IconButton>
    <IconButton ref={nextRef} className='arrows__buttons_nav' color='primary' size='small'>
      <ChevronRightIcon />
    </IconButton>
  </div>
)

export default SwiperArrows
