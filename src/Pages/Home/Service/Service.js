import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ( props ) => {
    const { id, name, description, price, img } = props.service;
    const navigate = useNavigate();
    const handleServiceDetails = id => {
        navigate( `/servicedetails/${ id }` );
    };
    return (
        <div className='cart-container'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price: ${price}</h6>
            <p>{description}</p>
            <Button onClick={() => handleServiceDetails( id )} className='btn btn-primary'>Details</Button>
        </div>
    );
};

export default Service;