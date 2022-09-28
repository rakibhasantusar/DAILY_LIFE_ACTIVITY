import React from 'react';
import image from '../../images/Rakib-Hasan-Tusar.jpg'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className='img-center'>
                <img className='my-img' src={image} alt="" />
            </div>
            <div className='details'>
                <h3>Name: Rakibul Hasan</h3>
                <h5>Junior Web Developer</h5>
                <h5>Age:28</h5>
                <h5>Nationality:Bangladeshi</h5>
            </div>
        </div>
    );
};

export default Sidebar;