import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import React, { useEffect, useRef, useState } from 'react'
import { ISwiperCards } from './types'
import { SwiperArrows } from '../index'
// eslint-disable-next-line import/named
import { CSSSelector } from 'swiper/types'

const SwiperCards: React.FC<ISwiperCards> = ({ children }): JSX.Element => {
  const prevRef = useRef<HTMLButtonElement | CSSSelector | null>(null)
  const nextRef = useRef<HTMLButtonElement | CSSSelector | null>(null)
  const [reset, setReset] = useState<boolean>(false)

  const slides: JSX.Element[] = children.map((card, index) => {
    return (
      <SwiperSlide key={index} className='card__slide'>
        {card}
      </SwiperSlide>
    )
  })

  // временный костыль
  useEffect(() => {
    setReset(!reset)
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
