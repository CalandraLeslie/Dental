import React from 'react';

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="text-2xl font-semibold text-dark-blue-gray mb-4">{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Card;