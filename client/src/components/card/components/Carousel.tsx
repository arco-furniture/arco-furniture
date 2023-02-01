import React, { useEffect, useRef } from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper } from 'swiper/react'

const Carousel: React.FC<any> = ({ children, visible }): JSX.Element => {
  return (
    <div className='swiper-container' style={{ position: 'relative', minWidth: 0 }}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={5}
        slidesPerView={1}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Carousel
