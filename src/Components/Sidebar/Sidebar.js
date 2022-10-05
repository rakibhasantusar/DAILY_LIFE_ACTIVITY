import React, { useEffect, useState } from 'react';
import image from '../../images/Rakib-Hasan-Tusar.jpg'
import './Sidebar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ time }) => {
    let totalTime = 0;
    for (const routineTime of time) {
        console.log(routineTime);
        totalTime = totalTime + routineTime
    }
    const [breaktime, setBreaktime] = useState(0)

    const handleTime = (time) => {
        localStorage.setItem("time", JSON.stringify(time))
        setBreaktime(time)

    }

    useEffect(() => {
        const getLocaldata = localStorage.getItem('time')
        if (getLocaldata) {
            setBreaktime(getLocaldata)
        }

    }, [])

    return (
        <div className='Sidebar'>
            <ToastContainer />
            <div className='img-center'>
                <img className='my-img' src={image} alt="" />
            </div>
            <div className='details'>
                <h3>Name: Rakibul Hasan</h3>
                <h5>Junior Web Developer</h5>
                <h5>Age:28</h5>
                <h5>Nationality:Bangladeshi</h5>
            </div>
            <div style={{ backgroundColor: '#1d0000', borderRadius: '5px' }} className="break-area">
                <div className='break-time'>
                    <h4 style={{ color: '#fff' }} >Break Time</h4>
                    <div className='break-btn' >
                        <button onClick={() => handleTime(10)}>10 m</button>
                        <button onClick={() => handleTime(15)}>15 m</button>
                        <button onClick={() => handleTime(30)}>30 m</button>
                        <button onClick={() => handleTime(45)}>45 m</button>
                    </div>
                </div>
            </div>
            <div>
                <hr style={{ backgroundColor: 'black', padding: '2px', }} />
                <h2>Routine Details</h2>
                <div>
                    <h4 style={{ backgroundColor: 'sandybrown', padding: '10px', borderRadius: '10px' }}>Routine Time: {totalTime} miniute</h4>
                    <h4 style={{ backgroundColor: 'sandybrown', padding: '10px', borderRadius: '10px' }} >Break time: {breaktime} miniute</h4>
                </div>
                <button className='daily-act-btn' onClick={() => toast("Hurrah! Activity completed")} ><p>Daily Activity Done</p></button>

            </div>
        </div>

    );
};

export default Sidebar;