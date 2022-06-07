import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Expert.css';

const Expert = ( props ) => {
    const navigate = useNavigate();
    const handleExpert = id => {
        navigate( `/expertdetails/${ id }` );
    };
    const { id, name, img } = props.expert;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => handleExpert( id )} className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>

    );
};

export default Expert;