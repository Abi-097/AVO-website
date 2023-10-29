import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const HeroSection = () => {
    const [count, setCount] = useState(0);

    // const incrementCount = () => {
    //     if (count < 400) {
    //       setCount(count + 1);
    //     }
    //   };

    useEffect(() => {
        const timer = setInterval(() => {
          if (count < 400) {
            setCount(count + 1);
          } else {
            clearInterval(timer); 
          }
        }, 50); // Increment every 100 milliseconds
    
        return () => clearInterval(timer); // Cleanup the interval when the component unmounts
      }, [count]);
    return (
        <div className='hero-container'>
        <img src='../../Assets/Images/image2.jpg'/>
        {/* <video src='/react-website-v1-starter/public/videos/video-2.mp4' autoPlay loop muted/> */}
        {/* <Container> */}
        <Container>
  <Row>
    <Col sm={4}>
      <h1>
        WE CREATE <br />
        MODERN &amp; <br />
        MINIMAL WEBSITE
      </h1>
      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      <div className='hero-btn'>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Start Project
        </Button>
      </div>
    </Col>
    <Col sm={7}><div>
    {/* <div> */}
    {/* <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <h1>{count}</h1>
      <div style={{ borderRight: "6px solid red", height: "40px", marginLeft: "10px" }}></div>
    </div> */}
    {/* <p style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>More than a hundred successful projects</p> */}
    {/* <div class="text-container">
  <span class="line">More than a</span>
  <span class="line">hundred successful</span>
  <span class="line">projects</span>
</div>
    <p className="text-right d-sm-none" style={{ fontSize: "14px" }}>More than a hundred successful projects</p>
  </div> */}
  {/* <div> */}
        <div>
            <div className='count'>
                <h1 className='count-wrapper'>{count}</h1>
                <div className='vertical-line' ></div>
            </div>
          {/* <div class="text-container"> */}
          <div className="text-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <p className="line" style={{ textAlign: 'right', margin: '0', padding: '0' }}>More than a</p>
      <p className="line" style={{ textAlign: 'right', margin: '0', padding: '0' }}>hundred successful</p>
      <p className="line" style={{ textAlign: 'right' , margin: '0', padding: '0'}}>projects</p>
    </div>
          {/* </div> */}
          <p className="text-right d-sm-none" style={{ fontSize: "14px" }}>More than a hundred successful projects</p>
        </div>
      {/* </div> */}
    </div>
    </Col>
  </Row>
</Container>
{/* <p className="text-right">More than a hundred successful projects</p> */}
      {/* <Row>
    <Col sm={12} md={3}>
      <h1 className="main-heading">WE CREATE</h1>
      <h1 className="sub-heading">MODERN &amp;</h1>
      <h1 className="sub-heading">MINIMAL WEBSITE</h1>
      <p>
        A small river named Duden flows by their place and supplies it with
        the necessary regelialia.
      </p>
      <div className="hero-btn">
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          Start Project
        </Button>
      </div>
    </Col>
    <Col sm={0} md={4}></Col>
  </Row>
    </Container> */}
        
        
        <div className='hero-btn'>
            {/* <Button className='btns' buttonStyle = 'btn--outline' buttonSize='btn--large'> Start Project</Button>  */}
            <Button className='btn-circle' buttonStyle = 'btn--primary' buttonSize='btn--large'> <FontAwesomeIcon icon={faPlay} style={{color: "#000000",}} /></Button>
        </div>   
        </div>
    );
}

export default HeroSection;
