import React from 'react';
import { SliderItemsData } from "../../data/slider";
import SliderItem from "./SliderItem/SliderItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import s from './MainSlider.module.css';

const MainSlider = () => {
    return (
        <Swiper
            modules={ [Navigation, Autoplay ]}
            navigation={true}
            autoplay={false}
            slidesPerView={3}
            loop
            className={s.swiper}
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