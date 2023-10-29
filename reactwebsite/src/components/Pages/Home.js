import '../../App.css'
import Card from '../Card/Card';
import HeroSection from '../HeroSection/HeroSection'
import React from 'react';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Card/>
            <Works/>
        </>
    );
}

export default Home;
