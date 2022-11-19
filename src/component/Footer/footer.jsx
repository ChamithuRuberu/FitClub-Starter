import React from 'react';
import '../Footer/footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import linkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
    return(
        <div className="footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                <img src={Github}/>
                <img src={Instagram}/>
                <img src={linkedIn}/>
            </div>
        <div className="logo-f">
            <img src={Logo}/>
        </div>
        </div>
            <div className="blur-1"></div>
            <div className="blur-2"></div>
        </div>
    )
};


export default Footer;