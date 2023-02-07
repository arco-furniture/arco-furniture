import React from 'react'
import { Pagination } from 'swiper'
import { Swiper } from 'swiper/react'
import { ICarousel } from 'components/card/types'

const Carousel: React.FC<ICarousel> = ({ children }): JSX.Element => {
  return (
    <div className='swiper-container'>
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
