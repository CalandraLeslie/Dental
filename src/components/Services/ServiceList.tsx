import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '../../types/service';

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="service-list" style={{ padding: '20px', backgroundColor: 'rgb(248, 249, 250)' }}>
      <h2 style={{ color: 'rgb(44, 62, 80)' }}>Our Dental Services</h2>
      <div className="services-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;