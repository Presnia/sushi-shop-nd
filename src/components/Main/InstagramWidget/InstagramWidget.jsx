import React from 'react';
import { Instagram } from "react-feather";
import standard1 from '../../assets/standard-element.jpg';
import standard21 from '../../assets/standard-element2.1.jpg';
import standard22 from '../../assets/standard-element2.2.jpg';
import standard23 from '../../assets/standard-element2.3.jpg';
import standard24 from '../../assets/standard-element2.4.jpg';
import standard3 from '../../assets/standard-element3.jpg';

import s from './InstagramWidget.module.css';

const InstagramWidget = () => {
    return (
        <div className={s.widgetInstance}>
            <div className={s.instagramWidgetContainer}>
                <section className={s.instagramWidgetHeader}>
                    <div className={s.widgetHeader}>
                        <Instagram />
                        <h2 className={s.widgetHeaderTitle}>
                            <a href="/#instagram"> Discover our Instagram</a>
                        </h2>
                    </div>
                </section>
                <section className={s.bodyContainer}>
                    <div className={s.bodyElement}>
                        <figure className={s.elementImage}>
                            <img src={standard1} alt="rock n roll"/>
                        </figure>
                        <div className={s.elementOverlay}></div>
                    </div>
                    <div className={s.bodyElement} style={{ borderRadius: '0' }}>
                        <div className={s.subElement}>
                            <figure>
                                <img src={standard21} alt=""/>
                            </figure>
                            <div className={s.subElementOverlay}></div>
                        </div>
                        <div
                            className={s.subElement}
                        >
                            <figure>
                                <img src={standard22} alt="" style={{ objectPosition: 'center' }}/>
                            </figure>
                            <div className={s.subElementOverlay}></div>
                        </div>
                        <div className={s.subElement}>
                            <figure>
                                <img src={standard23} alt=""/>
                            </figure>
                            <div className={s.subElementOverlay}></div>
                        </div>
                        <div className={s.subElement}>
                            <figure>
                                <img src={standard24} alt=""/>
                            </figure>
                            <div className={s.subElementOverlay}></div>
                        </div>
                    </div>
                    <div className={s.bodyElement}>
                        <figure className={s.elementImage}>
                            <img src={standard3} alt="chirashi"/>
                        </figure>
                        <div className={s.elementOverlay}></div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InstagramWidget;