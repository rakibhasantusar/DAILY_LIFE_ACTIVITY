import React from 'react';
import image from '../../images/Rakib-Hasan-Tusar.jpg'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <img className='my-img' src={image} alt="" />
            <h2>Name: Rakibul Hasan</h2>
        </div>
    );
};

export default Sidebar;