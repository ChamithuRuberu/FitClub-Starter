import React from 'react';
import './header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt=""/>
            <ul className="navbar">
                <li>Home</li>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Supplements</li>
            </ul>
        </div>
    )
}

export default Header;