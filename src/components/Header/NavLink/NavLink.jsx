import React from 'react';

import './NavLink.css';

const NavLink = ({ icon, title, link }) => {
    return (
        <li className='nav-link'>
            <a href={link}>
                <i>{icon}</i>
                <span>{title}</span>
            </a>
        </li>
    );
};

export default NavLink;