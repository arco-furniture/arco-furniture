import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import cardImage from "../../images/cardImage.png";
import {useState} from "react";
import 'swiper/scss';

const SwiperImages = ({isHover}) => {
    const imageArray = [{image: cardImage}, {image: cardImage}, {image: cardImage}]
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [indexActive, setIndexActive] = useState(0);

    const slides = imageArray.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <img className="card__image" src={item.image} alt="image"/>
            </SwiperSlide>
        )
    })

    const navItems = imageArray.map((_item, index) => {
        return (
            <SwiperSlide className="card__nav-slide" key={index}>
                <span onClick={() => setIndexActive(index)}
                      className={`card__navigation ${indexActive === index && 'card__navigation_active'}`}>
                </span>
            </SwiperSlide>
        )
    })

    return (
        <div className="card__swiper">
            <Swiper
                allowTouchMove={false}
                spaceBetween={20}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
            >{slides}
            </Swiper>
            <Swiper
                className={isHover ? 'card__type_active' : 'card__type_disable'}
                onSwiper={setThumbsSwiper}
                slidesPerView={imageArray.length}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >{navItems}
            </Swiper>
        </div>
    )
}

export default SwiperImages;