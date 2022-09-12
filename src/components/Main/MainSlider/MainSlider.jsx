import React from 'react';
import { SliderItemsData } from "../../data/slider";
import SliderItem from "./SliderItem/SliderItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import s from './MainSlider.module.css';

const MainSlider = ({ swiperNavPrevRef, swiperNavNextRef }) => {
    return (
        <Swiper
            modules={ [Navigation, Autoplay]}
            navigation={{
                prevEl: swiperNavPrevRef.current,
                nextEl: swiperNavNextRef.current,
            }}
            autoplay={{ delay: 5000 }}
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={10}
            speed={1000}
            loop
            className={s.swiper}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                swiper.params.navigation.nextEl = swiperNavNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >
            {
                SliderItemsData.map(slider =>
                    <SwiperSlide key={slider.title}>
                        <SliderItem
                            href={slider.href}
                            src={slider.src}
                            theme={slider.theme}
                            title={slider.title}
                            className={s.swiperSlide}
                        />
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default MainSlider;