import React from 'react';
import './HeroSection.css';
import '../../App.css';
import Button from '../Button/Button'
const HeroSection = () => {
    return (
        <div className='hero-container'>
        <video src='../../Assets/videos/video-1.mp4' autoPlay loop muted/>
        <h1>Adventure Waits</h1>
        <p>inside p?</p>
        <div className='hero-btn'>
            <Button className='btns' buttonStyle = 'btn--outline' buttonSize='btn--large'> GET Started</Button>
            <Button className='btns' buttonStyle = 'btn--primary' buttonSize='btn--large'> GET Started</Button>
        </div>   
        </div>
    );
}

export default HeroSection;
