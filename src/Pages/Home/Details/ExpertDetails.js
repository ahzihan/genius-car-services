import React from 'react';
import { useParams } from 'react-router-dom';

const ExpertDetails = () => {
    const { expertId } = useParams();
    return (
        <div>
            <h2>This is Expert Details Page: {expertId}</h2>
        </div>
    );
};

export default ExpertDetails;