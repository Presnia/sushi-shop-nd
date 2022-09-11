import React from 'react';
import DeliveryWidget from "../DeliveryWidget/DeliveryWidget";

import s from './HomeHeader.module.css';

const HomeHeader = () => {
    return (
        <section className={s.homeHeader}>
            <div className={s.media}>
                <video className='IIV' autoPlay loop muted playsInline>
                    <source src="https://www.mysushishop.co.uk/en/USER/video/exports/video_marque_2019.1080p.standard.mp4" type="video/mp4" />
                </video>
            </div>
            <DeliveryWidget />
        </section>
    );
};

export default HomeHeader;