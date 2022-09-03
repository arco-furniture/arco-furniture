import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css';
import {useRef} from "react";
import {IconButton} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SwiperCards = ({children}) => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const slides = children.map((card, index) => {
        return (
            <SwiperSlide
                key={index}
                style={{display: 'flex', justifyContent: 'space-between'}}
            >
                {card}
            </SwiperSlide>
        )
    })

    return (
        <div className={`advice__swiper ${slides.length >= 4 && 'advice__swiper-arrows'}`}>
            <Swiper
                style={{width: '100%'}}
                id="advice-swiper"
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                spaceBetween={37}
                slidesPerGroup={4}
                slidesPerView={4}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Navigation]}
            >
                {slides}
            </Swiper>
            {
                slides.length >= 4 &&
                <div className="advice__nav">
                    <IconButton
                        ref={prevRef}
                        className="advice__buttons_nav"
                        color="primary"
                        size="large"
                    >
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton
                        ref={nextRef}
                        className="advice__buttons_nav"
                        color="primary"
                        size="large"
                    >
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
            }
        </div>
    )
}

export default SwiperCards;