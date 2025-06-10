import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from './types';
import './ServiceList.css';

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="service-list">
      {services.map(service => (
        <ServiceCard 
          key={service.id} // key is a special React prop, not passed to component
          title={service.title}
          description={service.description}
          imageUrl={service.image || ''}
        />
      ))}
    </div>
  );
};

export default ServiceList;