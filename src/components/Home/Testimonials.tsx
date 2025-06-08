import React from 'react';

const testimonialsData = [
    {
        name: "John Doe",
        feedback: "The best dental clinic I've ever visited! The staff is friendly and the service is top-notch.",
        rating: 5
    },
    {
        name: "Jane Smith",
        feedback: "I had a great experience. The dentist was very gentle and explained everything clearly.",
        rating: 4
    },
    {
        name: "Emily Johnson",
        feedback: "Highly recommend! The clinic is clean and the team is very professional.",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section style={{ backgroundColor: 'rgb(255, 255, 255)', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ color: 'rgb(41, 128, 185)' }}>What Our Patients Say</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} style={{ border: '1px solid rgb(41, 128, 185)', borderRadius: '8px', padding: '1rem' }}>
                        <h3 style={{ color: 'rgb(44, 62, 80)' }}>{testimonial.name}</h3>
                        <p style={{ color: 'rgb(44, 62, 80)' }}>{testimonial.feedback}</p>
                        <p style={{ color: 'rgb(46, 204, 113)' }}>Rating: {testimonial.rating} / 5</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;