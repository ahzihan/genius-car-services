import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [ service, setService ] = useServiceDetail( serviceId );
    return (
        <div className='text-center'>
            <h2>This is Service Details Page: {service.name}</h2>
            <Link to={`/checkout/${ serviceId }`}>
                <button className='btn btn-primary my-4 mx-auto'>Proceed Checkout</button>
            </Link>

        </div>
    );
};

export default ServiceDetails;