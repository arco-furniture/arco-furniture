import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import React from "react";
import {IProductPreview} from "./types";

const ProductPreview: React.FC<IProductPreview> = ({images, thumbsSwiper}) => {
    const slides = images?.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <img className="product__image-preview" src={item.image} alt="image"/>
            </SwiperSlide>
        )
    })

    return (
        <li className="product__preview">
            <Swiper
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