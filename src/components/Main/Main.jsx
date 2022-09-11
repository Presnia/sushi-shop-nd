import React from 'react';
import ReinsuranceWidget from "./ReinsuranceWidget/ReinsuranceWidget";
import BannerWidget from "./BannerWidget/BannerWidget";
import HomeHeader from "./HomeHeader/HomeHeader";

import s from './Main.module.css';

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.pageHome}>
                <div className={`home ${s.home}`}>
                    <div className={s.widgetsLayout}>
                        <HomeHeader />
                        <ReinsuranceWidget />
                        <BannerWidget />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;