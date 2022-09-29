import React, { useEffect, useState } from 'react';
import RoutineCart from '../RoutineCart/RoutineCart';
import Sidebar from '../Sidebar/Sidebar';
import './Container.css'

const Container = () => {
    const [routines, setRoutines] = useState([])
    const [time, setTime] = useState([])
    useEffect(() => {
        fetch('data-fake.json')
            .then(res => res.json())
            .then(data => setRoutines(data))
    }, [])


    const handleTime = (routine) => {
        let newTime = []
        // console.log(routine);
        newTime = [...time, routine]
        setTime(newTime)
    }

    return (
        <div className='container'>
            <div className="container-left">
                {
                    routines.map(routine => <RoutineCart
                        routine={routine}
                        handleTime={handleTime}
                        key={routine.id}
                    ></RoutineCart>)
                }
            </div>
            <div className="container-right">
                <Sidebar time={time} ></Sidebar>
            </div>
        </div>
    );
};

export default Container;