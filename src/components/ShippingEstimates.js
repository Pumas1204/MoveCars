// src/components/ShippingEstimates.js
import React from 'react';
import './ShippingEstimates.css'; // Optional, for styling

const ShippingEstimates = ({ distance }) => {
    const estimates = [
        {
            company: "Company A",
            baseFee: 200,
            perMileRate: 2,
        },
        {
            company: "Company B",
            baseFee: 100,
            perMileRate: 2.50,
        },
        {
            company: "Company C",
            baseFee: 400,
            perMileRate: 1,
        },
    ];

    return (
        <div className="shipping-estimates">
            <h2>Shipping Estimates</h2>
            <ul>
                {estimates.map((estimate, index) => {
                    const totalCost = estimate.baseFee + (estimate.perMileRate * distance);
                    return (
                        <li key={index}>
                            {estimate.company}: ${totalCost.toFixed(2)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ShippingEstimates;
