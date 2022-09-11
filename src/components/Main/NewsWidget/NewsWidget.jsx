import React from 'react';

import s from './NewsWidget.module.css';

const NewsWidget = () => {
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
                </div>
            </section>
        </div>
    );
};

export default NewsWidget;