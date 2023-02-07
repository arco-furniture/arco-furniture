import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper'
import { IProductSlides } from './types'
import React, { memo } from 'react'
import { imageTypes } from '../../types/itemTypes'

const ProductSlides: React.FC<IProductSlides> = ({ setThumbsSwiper, images }): JSX.Element => {
  const navSlides = images?.map((item: imageTypes, index: number) => (
    <SwiperSlide key={index}>
      <div className='product__nav'>
        <span className='product__background' />
        <img className='product__nav-preview' src={item.image} alt='slide' />
      </div>
    </SwiperSlide>
  ))

  return (
    <li className='product__slides'>
      <div className='product__slides-wrapper'>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[Thumbs]}
          className='mySwiper'
        >
          {navSlides}
        </Swiper>
      </div>
    </li>
  )
}

export default memo(ProductSlides)
