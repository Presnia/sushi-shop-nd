import React from 'react';
import s from './DeliveryWidget.module.css';

const DeliveryWidget = () => {
    return (
        <div className={s.widgetContainer}>
            <div className={s.widgetFlexBlock}>
                <div className={s.widget}>
                    <div className={s.widgetContent}>
                        <form>
                            <fieldset className={s.filters}>
                                <div className={s.checkGroup}>
                                    <label htmlFor="filter-address">Delivery</label>
                                </div>
                            </fieldset>
                            <fieldset className={s.input}>
                                <input
                                    type="text"
                                    name='location'
                                    autoComplete='off'
                                    placeholder='Enter your address'
                                />
                                <button className={s.inputBtn} type='submit'>
                                    Find
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryWidget;