import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [ service, setService ] = useState( {} );

    useEffect( () => {
        const url = `http://localhost:5000/service/${ serviceId }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setService( data ) );
    }, [] );
    return (
        <div className='text-center'>
            <h2>This is Service Details Page: {service.name}</h2>

            <button className='btn btn-primary my-4 mx-auto'>Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetails;