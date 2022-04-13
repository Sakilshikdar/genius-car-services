import React from 'react';
import image1 from '../../../images/experts/expert-1.jpg'
import image2 from '../../../images/experts/expert-2.jpg'
import image3 from '../../../images/experts/expert-3.jpg'
import image4 from '../../../images/experts/expert-4.jpg'
import image5 from '../../../images/experts/expert-5.jpg'
import image6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    {id:1, name:'smith', img:image1},
    {id:1, name:'smith', img:image2},
    {id:1, name:'smith', img:image3},
    {id:1, name:'smith', img:image4},
    {id:1, name:'smith', img:image5},
    {id:1, name:'smith', img:image6}
]


const Experts = () => {
    return (
        <div id='experts'>
            <h2 className='text-primary text-center mt-5'>Our experts</h2>
            <div className='mx-auto row'>
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert = {expert}
                    ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;