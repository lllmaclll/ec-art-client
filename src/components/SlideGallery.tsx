// import React from 'react';
// import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { StyledSwiper, SwiperSlideStyled, SwiperImage } from '../styles/SlideGalleryStyle';

export default function SlideGallery() {
    return (
        <StyledSwiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
            loop={true} // Enable loop
            modules={[EffectCoverflow, Pagination, Autoplay]} // Import the modules
        >
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
                <SwiperImage src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
            </SwiperSlideStyled>
        </StyledSwiper>
    );
}