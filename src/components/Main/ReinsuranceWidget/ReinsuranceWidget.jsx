import React from 'react';
import ReinsuranceItem from "../ReinsuranceItem/ReinsuranceItem";

import s from './ReinsuranceWidget.module.css';
import {ReinsuranceItems} from "../../data/data";

const ReinsuranceWidget = () => {
    return (
        <div className={s.widgetInstance}>
            <section className={s.reinsuranceWidget}>
                <div className={s.container}>
                    {
                        ReinsuranceItems.map(item =>
                            <ReinsuranceItem
                                key={item.descr}
                                icon={item.icon}
                                descr={item.descr}
                                extra={item.extra}
                            />
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default ReinsuranceWidget;