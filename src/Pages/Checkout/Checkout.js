import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [ service ] = useServiceDetail( serviceId );
    const [ user ] = useAuthState( auth );

    // const [ user, setUser ] = useState( {
    //     name: 'Akbar Hossain',
    //     email: 'akbar@gmail.com',
    //     address: 'Mohammadpur',
    //     phone: '01776328578'
    // } );
    // const handleAddressChange = event => {
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser( newUser );
    // };

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            email: user.email,
            name: user.displayName
        };
        axios.post( 'http://localhost:5000/order', order )
            .then( response => {
                const { data } = response;
                if ( data.insertedId ) {
                    toast( 'Your Order is booked!!!' );
                    event.target.reset();
                }
            } );
    };


    return (
        <div className='w-50 mx-auto my-5'>
            <h3>Please Order : {service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='mb-2 w-100' name='name' value={user?.displayName} placeholder='name' type="text" readOnly disabled /><br />
                <input className='mb-2 w-100' name='email' value={user?.email} placeholder='email' type="email" readOnly disabled /><br />
                <input className='mb-2 w-100' name='service' value={service.name} placeholder='Service' type="text" disabled /><br />
                <textarea className='mb-2 w-100' name='address' placeholder='address' type="text" autoComplete='off' /><br />
                <input className='mb-2 w-100' name='phone' placeholder='phone' type="text" /><br />
                <input className='btn btn-primary w-100' value='Place Order' type='submit' />
            </form>
        </div>
    );
};

export default Checkout;