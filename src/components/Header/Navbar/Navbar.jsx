import React from 'react';
import './Navbar.css';
import { NavbarLinks } from "../../data/data";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
    return (
        <nav className='navbar'>
            {
                NavbarLinks.map(link =>
                    <NavLink
                        key={link.title}
                        icon={link.icon}
                        link={link.link}
                        title={link.title}
                    />
                )
            }
            <li className="btn-menu">
                <button className="burger">
                    <span className="bar-top"></span>
                    <span className="bar-middle"></span>
                    <span className="bar-bottom"></span>
                </button>
            </li>
        </nav>
    );
};

export default Navbar;