import React from 'react';
import './RoutineCart.css'

const RoutineCart = (props) => {
    // console.log(props);
    const { routine, handleTime } = props
    const { name, time, img, description } = routine
    return (
        <div className='cart'>
            <div className='cart-center'>
                <img className='cart-img' src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p className='description'>{description}</p>
                    <p>duration: <span style={{ fontWeight: 'bold' }}>{time}</span> miniute</p>
                </div>
                <button onClick={() => handleTime(routine)} className='cart-btn'>
                    <p>Add to task</p>
                </button>
            </div>
        </div>
    );
};

export default RoutineCart;