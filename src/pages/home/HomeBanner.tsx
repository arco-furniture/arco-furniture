import {Swiper, SwiperSlide} from "swiper/react";
import banner from "../../images/home__banner.jpg"
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Autoplay} from "swiper";
import React from "react";

const HomeBanner: React.FC = () => {
    const images = [banner, banner];

    const slides = images.map((item, index) => {
        return (
            <SwiperSlide
                key={index}
                style={{display: "flex", justifyContent: "center"}}>
                <img className="preview__banner" src={item} alt="Баннер"/>
            </SwiperSlide>
        );
    });

    return (
        <Swiper
            className="preview__swiper"
            // navigation={true}
            modules={[Navigation, Autoplay]}
            style={{width: "100%"}}
            slidesPerView={1}
            slidesPerGroup={1}
            keyboard={true}
            loop={true}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
        >
            {slides}
        </Swiper>
    );
}

export default HomeBanner;