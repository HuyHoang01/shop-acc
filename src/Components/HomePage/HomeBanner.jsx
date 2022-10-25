import LeftBanner from './LeftBanner';
import './home-banner.scss'
import swiperBanner from '../../assets/images/swiper-banner.gif'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeBanner = () => {
    return (
        <>
            <div className="c-home-banner">
                <div className="container is-flex">
                    <div className="c-home-banner__left">
                        <LeftBanner />
                    </div>
                    <div className="c-home-banner__right">
                        <Swiper
                            modules={[Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            navigation={true}
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="c-img">
                                    <img src={swiperBanner} alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="c-img">
                                    <img src={swiperBanner} alt="img" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;