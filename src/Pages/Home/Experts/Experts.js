import React from 'react';
import './Experts.css';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Md Alamin', img: expert1 },
    { id: 2, name: 'Arif Billah', img: expert2 },
    { id: 3, name: 'Nahid Emon', img: expert3 },
    { id: 4, name: 'Bijoy Debnath', img: expert4 },
    { id: 5, name: 'Habibul Bashar', img: expert5 },
    { id: 6, name: 'Maksuda Rahman', img: expert6 },
];

const Experts = () => {

    return (
        <div className='container'>
            <h2 className='text-primary mt-4'>Our Experts</h2>
            <div className='row mb-4'>
                {
                    experts.map( expert => <Expert key={expert.id} expert={expert}></Expert> )
                }
            </div>
        </div>
    );
};

export default Experts;