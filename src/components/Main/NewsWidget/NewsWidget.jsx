import React, { useRef } from 'react';

import s from './NewsWidget.module.css';
import MainSlider from "../MainSlider/MainSlider";

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
                        <div className={s.sliderControls}></div>
                    </div>
                    <MainSlider />
                </div>
            </section>
        </div>
    );
};

export default NewsWidget;