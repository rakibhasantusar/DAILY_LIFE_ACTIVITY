import React from 'react';
import './Header.css'
import logo from '../../images/Logo.png'


const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
                <h2> Daily Life Activity</h2>
            </div>
        </div>
    );
};

export default Header;