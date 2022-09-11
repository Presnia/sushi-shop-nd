import React from 'react';
import { SliderItemsData } from "../../data/slider";
import SliderItem from "./SliderItem/SliderItem";

import s from './MainSlider.module.css';

const MainSlider = () => {
    return (
        <div className={s.slider}>
            {
                SliderItemsData.map(slider =>
                    <SliderItem
                        href={slider.href}
                        src={slider.src}
                        theme={slider.theme}
                        title={slider.title}
                    />
                )
            }
        </div>
    );
};

export default MainSlider;