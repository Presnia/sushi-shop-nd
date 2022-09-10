import React from 'react';
import s from './ReinsuranceItem.module.css';

const ReinsuranceItem = ({ icon, descr, extra }) => {
    return (
        <div className={s.reinsuranceItem}>
            <i>{icon}</i>
            <div className={s.reinsuranceDescription}>
                <span className={s.descr}>{descr}</span>
                <span className={s.extra}>
                    {extra}
                    {extra}
                    {extra}
                    {extra}
                    {extra}
                </span>
            </div>
        </div>
    );
};

export default ReinsuranceItem;