import React from 'react';
import ServiceList from '../Services/ServiceList';
import { Service } from '../Services/types'; // Assuming Service type is defined here

const Services: React.FC = () => {
    // Example services array - adjust according to your Service type definition
    const services: Service[] = [
        // Add your actual services data here
        { id: 1, name: 'General Dentistry', description: 'Routine dental care and maintenance.' },
        { id: 2, name: 'Cosmetic Dentistry', description: 'Improve the appearance of your smile.' },
        { id: 3, name: 'Orthodontics', description: 'Straighten and align your teeth.' }
    ];

    return (
        <section style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '40px 20px' }}>
            <h2 style={{ color: 'rgb(44, 62, 80)', textAlign: 'center' }}>Our Dental Services</h2>
            <p style={{ color: 'rgb(44, 62, 80)', textAlign: 'center', marginBottom: '20px' }}>
                We offer a wide range of dental services to meet your needs. Explore our services below.
            </p>
            <ServiceList services={services} />
        </section>
    );
};

export default Services;