import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React from 'react'

const SwiperArrows: React.FC<any> = ({ prevRef, nextRef, widthValue }) => {
  return (
    <div className='arrows__nav' style={{ width: widthValue + '%' }}>
      <IconButton ref={prevRef} className='arrows__buttons_nav' color='primary' size='small'>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton ref={nextRef} className='arrows__buttons_nav' color='primary' size='small'>
        <ChevronRightIcon />
      </IconButton>
    </div>
  )
}

export default SwiperArrows
