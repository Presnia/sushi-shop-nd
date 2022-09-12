import React, { useRef } from 'react';
import MainSlider from "../MainSlider/MainSlider";
import { ChevronLeft, ChevronRight } from "react-feather";

import s from './NewsWidget.module.css';

const NewsWidget = () => {
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    return (
        <div className={s.widgetInstance}>
            <section className={s.newsWidget}>
                <div className={s.widgetContainer}>
                    <div className={s.top}>
                        <h2>
                            <a href="/#news">Discover our latest news</a>
                        </h2>
                    </div>
                    <div className={s.sliderNav}>
                        <button className={s.prev} ref={swiperNavPrevRef}>
                            <ChevronLeft />
                        </button>
                        <button className={s.next} ref={swiperNavNextRef}>
                            <ChevronRight />
                        </button>
                    </div>
                    <MainSlider
                        swiperNavPrevRef={swiperNavPrevRef}
                        swiperNavNextRef={swiperNavNextRef}
                    />
                    <div className={s.bottom}>
                        <a href="/#news">See all the news</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsWidget;