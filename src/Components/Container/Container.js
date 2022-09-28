import React, { useEffect, useState } from 'react';
import RoutineCart from '../RoutineCart/RoutineCart';
import Sidebar from '../Sidebar/Sidebar';
import './Container.css'

const Container = () => {
    const [routines, setRoutines] = useState([])
    useEffect(() => {
        fetch('data-fake.json')
            .then(res => res.json())
            .then(data => setRoutines(data))
    }, [])


    return (
        <div className='container'>
            <div className="container-left">
                {
                    routines.map(routine => <RoutineCart
                        routine={routine}
                        key={routine.id}
                    ></RoutineCart>)
                }
            </div>
            <div className="container-right">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Container;