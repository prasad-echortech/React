import React from 'react';
import { useParams } from 'react-router-dom';

export default function Singleproduct() {
    const { id } = useParams();

    if (isNaN(id)) {
        return <div>Invalid product ID</div>;
    }

    return (
        <div>
            <div>
                <h1>Product Details</h1>
                <h2>Product ID: {id}</h2>
            </div>
        </div>
    );
}
