import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {useState} from "react";
import 'swiper/scss';

const SwiperImages = ({images, visible}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [indexActive, setIndexActive] = useState(0);

    const slides = images.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <img className="card__image" src={item.image} alt="image"/>
            </SwiperSlide>
        )
    })

    const navItems = images.map((_item, index) => {
        return (
            <SwiperSlide className={`card__nav-slide ${visible ? 'card__active' : 'card__disabled'}`} key={index}>
                <span onClick={() => setIndexActive(index)}
                      className={`card__navigation ${indexActive === index && 'card__navigation_active'}`}>
                </span>
            </SwiperSlide>
        )
    })

    return (
        <div className="card__swiper">
            <Swiper
                id="card-swiper"
                allowTouchMove={false}
                spaceBetween={20}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
            >{slides}
            </Swiper>
            <Swiper
                spaceBetween={10}
                onSwiper={setThumbsSwiper}
                freeMode={true}
                slidesPerView={images.length}
                modules={[FreeMode, Navigation, Thumbs]}
            >{navItems}
            </Swiper>
        </div>
    )
}

export default SwiperImages;