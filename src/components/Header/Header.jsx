import React from 'react';
import logo from '../assets/logo.jpg';
import s from './Header.module.css';
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <div className={s.left}>
                    <a href="/">
                        <img className={s.logo} src={logo} alt="logo"/>
                    </a>
                    <a href="/#menu">
                        <span>Menu</span>
                    </a>
                </div>
                <ul className={s.right}>
                    <Navbar />
                </ul>
            </div>
        </header>
    );
};

export default Header;