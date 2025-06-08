import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;