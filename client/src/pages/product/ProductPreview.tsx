import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import React, { useRef } from 'react'
import { IProductPreview } from './types'
import { SwiperArrows } from '../../components'

const ProductPreview: React.FC<IProductPreview> = ({ images, thumbsSwiper }) => {
  const nextRef = useRef(null)
  const prevRef = useRef(null)

  const slides = images?.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <img className='product__image-preview' src={item.image} alt='image' />
      </SwiperSlide>
    )
  })

  return (
    <li className='product__preview'>
      <Swiper
        loop
        spaceBetween={40}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
      >
        {slides}
      </Swiper>
      <SwiperArrows prevRef={prevRef} nextRef={nextRef} widthValue={105} />
    </li>
  )
}

export default ProductPreview
