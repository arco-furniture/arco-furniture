// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../images/Banner.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const images = [banner, banner, banner, banner];

const slides = images.map((item, index) => {
  return (
    <SwiperSlide
      key={index}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <img className="home__banner" src={item} alt="Баннер" />
    </SwiperSlide>
  );
});

export default function SwiperHome() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{ width: "100%"}}
        slidesPerView={1}
        slidesPerGroup={1}
        keyboard={true}
      >
        {slides}
      </Swiper>
    </>
  );
}
