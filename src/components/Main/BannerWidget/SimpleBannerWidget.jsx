import React from 'react';
import s from "./BannerWidget.module.css";
import bgBannerImage from "../../assets/bg-simple-widget.jpg";
import bannerImage from '../../assets/simple-widget.png';

const SimpleBannerWidget = () => {
    return (
        <div className={s.widgetInstance}>
            <section className={s.bannerWidget}>
                <a href="https://www.mysushishop.co.uk/en/delivery/chirashi/build-your-own-poke-3357">
                    <div className={s.bannerImageContainer}>
                        <img src={bgBannerImage} alt="banner first layer"/>
                        <div className={s.secondImgContainer}>
                            <img className={s.secondImgLayer} src={bannerImage} alt='banner second layer'/>
                        </div>
                    </div>
                </a>
            </section>
        </div>
    );
};

export default SimpleBannerWidget;