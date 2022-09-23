import {Swiper, SwiperSlide} from "swiper/react";
import {Thumbs} from "swiper";

const ProductSlides = ({setThumbsSwiper, images}) => {
    const navSlides = images?.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <img className="product__nav-preview" src={item.image} alt="image"/>
            </SwiperSlide>
        )
    })

    return(
        <li className="product__slides">
            <div className="product__slides-wrapper">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="mySwiper"
                >{navSlides}
                </Swiper>
            </div>
        </li>
    )
}

export default ProductSlides;