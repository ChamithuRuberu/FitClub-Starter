import React from 'react';
import './header.css'
import logo from '../../assets/logo.png'


const Header = () => {
    return(
        <div className="header">

            <img src={logo}  alt="" className="logo"/>
            <ul className="navbar">
                <li>Programs</li>
                <li>Trainers</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Supplements</li>
                <li>Sign up</li>
            </ul>
        </div>
    )
}

export default Header;