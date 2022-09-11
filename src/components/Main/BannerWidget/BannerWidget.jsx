import React from 'react';
import bannerImage from '../../assets/banner-widget.jpg';
import { nextSunday } from "../../data/data";

import s from './BannerWidget.module.css';

const BannerWidget = () => {

    return (
        <div className={s.widgetInstance}>
            <section className={s.bannerWidget}>
                <div className={s.bannerImageContainer}>
                    <img src={bannerImage} alt="banner"/>
                    <div className={s.bannerOverlay}>
                        <h1>Brightening up your sunday!</h1>
                        <p>On sale on Sundays <br/>
                            {nextSunday()}
                        </p>
                        <a href="/#amazing">
                            <button>I want to know more</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerWidget;