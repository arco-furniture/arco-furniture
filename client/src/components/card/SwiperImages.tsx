import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import React, { memo, useState } from 'react'
import 'swiper/scss'
import { ISwiperImages } from './types'

const SwiperImages: React.FC<ISwiperImages> = ({ images, visible, isTop }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [indexActive, setIndexActive] = useState<number>(0)

  const slides = images.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <img draggable={false} className='card__image' src={item.image} alt='image' />
      </SwiperSlide>
    )
  })

  const navItems = images.map((_item, index) => {
    if (images.length <= 1 || isTop) {
      return <React.Fragment key={index} />
    }
    return (
      <SwiperSlide
        key={index}
        onClick={() => setIndexActive(index)}
        className={`card__nav-slide ${visible ? 'card__active' : 'card__disabled'}`}
      >
        <span className={`card__navigation ${indexActive === index && 'card__navigation_active'}`} />
      </SwiperSlide>
    )
  })

  return (
    <div className='card__swiper'>
      <Swiper
        id='card-swiper'
        allowTouchMove={false}
        spaceBetween={20}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
        freeMode
        slidesPerView={images.length}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {navItems}
      </Swiper>
    </div>
  )
}

export default memo(SwiperImages)
