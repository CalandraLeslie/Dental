import React from 'react';

interface PriceCardProps {
    serviceName: string;
    price: string;
    description: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ serviceName, price, description }) => {
    return (
        <div className="price-card" style={{ border: `1px solid rgb(41, 128, 185)`, borderRadius: '8px', padding: '20px', backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(44, 62, 80)' }}>
            <h3 style={{ color: 'rgb(41, 128, 185)' }}>{serviceName}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{price}</p>
            <p>{description}</p>
            <button style={{ backgroundColor: 'rgb(46, 204, 113)', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer' }}>
                Book Now
            </button>
        </div>
    );
};

export default PriceCard;