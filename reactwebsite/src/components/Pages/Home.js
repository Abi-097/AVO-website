import '../../App.css'
import Card from '../Card/Card';
import HeroSection from '../HeroSection/HeroSection'
import React from 'react';
import Works from '../Works/Works';
import Footer from '../Footer/Footer';
import Carousel from '../Client/Client';
import Client from '../Client/Client';
import Sheet from '../BottomSheet/Sheet';
import FinalCard from '../FinalCard/FinalCard';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Card/>
            <Works/>
            <Client/>
            <Sheet/>
            <FinalCard/>
            <Footer/>
            
        </>
    );
}

export default Home;
