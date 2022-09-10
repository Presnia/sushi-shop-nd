import React from 'react';
import s from './Main.module.css';
import DeliveryWidget from "./DeliveryWidget/DeliveryWidget";

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.pageHome}>
                <div className={`home ${s.home}`}>
                    <section className={s.homeHeader}>
                        <div className={s.media}>
                            <video className='IIV' autoPlay loop muted playsInline>
                                <source src="https://www.mysushishop.co.uk/en/USER/video/exports/video_marque_2019.1080p.standard.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <DeliveryWidget />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;