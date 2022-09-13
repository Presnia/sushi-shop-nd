import React from 'react';
import ReinsuranceWidget from "./ReinsuranceWidget/ReinsuranceWidget";
import BannerWidget from "./BannerWidget/BannerWidget";
import HomeHeader from "./HomeHeader/HomeHeader";
import NewsWidget from "./NewsWidget/NewsWidget";
import SimpleBannerWidget from "./BannerWidget/SimpleBannerWidget";

import s from './Main.module.css';
import InstagramWidget from "./InstagramWidget/InstagramWidget";

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.pageHome}>
                <div className={`home ${s.home}`}>
                    <div className={s.widgetsLayout}>
                        <HomeHeader />
                        <ReinsuranceWidget />
                        <BannerWidget />
                        <NewsWidget />
                        <SimpleBannerWidget />
                        <InstagramWidget />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;