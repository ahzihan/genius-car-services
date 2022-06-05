import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ( props ) => {
    const { name, description, price, img } = props.service;

    return (
        <div className='cart-container'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price: ${price}</h6>
            <p>{description}</p>
            <Link to='/inventory'>Details</Link>
        </div>
    );
};

export default Service;