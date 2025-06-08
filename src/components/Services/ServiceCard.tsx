import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="service-card" style={{ border: '1px solid rgb(41, 128, 185)', borderRadius: '8px', padding: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ color: 'rgb(44, 62, 80)', marginTop: '16px' }}>{title}</h3>
            <p style={{ color: 'rgb(44, 62, 80)' }}>{description}</p>
        </div>
    );
};

export default ServiceCard;