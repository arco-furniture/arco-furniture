import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'
import React, { useRef } from 'react'
import { SwiperArrows } from '../components'

interface IBunner {
  images: string[]
}

const Banner: React.FC<IBunner> = ({ images }): JSX.Element => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const slides = images.map((item, index) => (
    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
      <img width='100%' height='284px' className='preview__banner' alt='Баннер' src={item} />
    </SwiperSlide>
  ))

  return (
    <div className='preview__contain'>
      <Swiper
        className='preview__swiper'
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        modules={[Navigation, Autoplay]}
        style={{ width: '100%' }}
        slidesPerView={1}
        slidesPerGroup={1}
        keyboard
        loop
        spaceBetween={30}
        autoplay={{ delay: 5000 }}
      >
        {slides}
      </Swiper>
      <SwiperArrows prevRef={prevRef} nextRef={nextRef} widthValue={106} />
    </div>
  )
}

export default Banner
