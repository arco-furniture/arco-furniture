import React from 'react'
import 'swiper/scss'
import { ISwiperImages } from './types'
import Carousel from './Carousel'
import { SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const SwiperImages: React.FC<ISwiperImages> = ({ images, isTop = true }): JSX.Element => {
  return images.length > 1 && !isTop ? (
    <Carousel>
      {images.map((item, key) => (
        <SwiperSlide key={key}>
          <LazyLoadImage
            width='100%'
            height='150px'
            effect='blur'
            className='card__image card__image_shadow'
            alt='preview product'
            src={item.image}
          />
        </SwiperSlide>
      ))}
    </Carousel>
  ) : (
    <LazyLoadImage
      width='100%'
      height='150px'
      effect='blur'
      className='card__image'
      alt='preview product'
      src={images[0].image}
    />
  )
}

export default SwiperImages
