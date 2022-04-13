import React from 'react';
import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary mt-3 text-center'>Mechanic is slipping</h1>
            <img className='d-block w-300 rounded-3 mx-auto img-fluid ' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;