import '../../App.css'
import Card from '../Card/Card';
import HeroSection from '../HeroSection/HeroSection'
import React from 'react';
import Works from '../Works/Works';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Card/>
            <Works/>
            <Footer/>
        </>
    );
}

export default Home;
