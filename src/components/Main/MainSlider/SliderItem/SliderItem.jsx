import React from 'react';

import s from './SliderItem.module.css';

const SliderItem = ({ href, src, theme, title }) => {
    return (
        <li className={s.slideItem}>
            <div className={s.newsBlock}>
                <a href={href} title={title}>
                    <div
                        className={s.img}
                        style={{backgroundImage: `url(${src})`}}
                    >
                    </div>
                    <p className={s.info}>
                        <strong className={s.theme}>{theme}</strong>
                    </p>
                    <span className={s.title}>{title}</span>
                </a>
            </div>
        </li>
    );
};

export default SliderItem;