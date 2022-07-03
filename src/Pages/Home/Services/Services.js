import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [ services ] = useServices();
    return (
        <div id='services'>
            <h2 className='my-4 text-primary text-center'>Our Services</h2>
            <div className='services-container'>
                <div className='service-container'>
                    {
                        services.map( service => <Service key={service._id} service={service}></Service> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;

