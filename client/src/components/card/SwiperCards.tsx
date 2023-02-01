import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import React, { useEffect, useRef, useState } from 'react'
import { ISwiperCards } from './types'
import { SwiperArrows } from '../index'

const SwiperCards: React.FC<ISwiperCards> = ({ children }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [reset, setReset] = useState(37)
  const slides = children.map((card, index) => {
    return (
      <SwiperSlide
        key={index}
        style={{ display: 'flex', justifyContent: 'space-between', padding: '0 3px', boxSizing: 'border-box' }}
      >
        {card}
      </SwiperSlide>
    )
  })

  // временный костыль
  useEffect(() => {
    setReset(36)
  }, [])

  return (
    <div className={`advice__swiper ${slides.length >= 4 && 'advice__swiper-arrows'}`}>
      <Swiper
        style={{ width: '100%' }}
        id='advice-swiper'
        cssMode
        className='advice__swiperBetween'
        mousewheel
        keyboard
        spaceBetween={36}
        slidesPerGroup={4}
        slidesPerView={4}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        modules={[Navigation]}
      >
        {slides}
      </Swiper>
      {slides.length >= 4 && <SwiperArrows prevRef={prevRef} nextRef={nextRef} widthValue={102} />}
    </div>
  )
}

export default SwiperCards
