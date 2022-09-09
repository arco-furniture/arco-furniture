import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

const ProductPreview = ({images, thumbsSwiper}) => {
    const swiperStyles = {
        borderRadius: '4px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }

    const slides = images.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <img className="product__image-preview" src={item.image} alt="image"/>
            </SwiperSlide>
        )
    })

    return (
        <li className="product__preview">
            <Swiper
                style={swiperStyles}
                loop={true}
                spaceBetween={40}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
            >{slides}
            </Swiper>
        </li>
    )
}

export default ProductPreview;