import React from 'react';

import "./header.scss";

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo"></div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
            </div>
            <div className="navbar-login">
                <a href="#">login</a>
            </div>
        </div>
    )

}

export default Header;