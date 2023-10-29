import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../../Assets/Images/img10.png";
import image2 from "../../Assets/Images/img11.png";
import image3 from "../../Assets/Images/img12.png";
import image4 from "../../Assets/Images/img13.png";
import image5 from "../../Assets/Images/img14.png";
import image6 from "../../Assets/Images/img15.jpg";
// import { Button } from "../Button/Button";
import Button from 'react-bootstrap/Button';
import './Card.css'
import 'animate.css/animate.min.css';
export default function Card() {
  return (
    <div>
    <div className="text-center animate__animated animate__fadeInUp">
  <h1>ABOUT US</h1>
</div>
<div className="animate__animated animate__fadeInUp">
      <Container>
        {/* <div className='card-main' style={{display:'flex', justifyContent:'center', alignItems:'center'}}> */}
        {/* <div className='card-main' > */}
        <Row className="justify-content-center">
          <Col xl={2} lg={2} md={12} className="text-center">
            <img src={image2} style={{ height: "100px", width: "100px" }} className="mb-3" />
            <p>UI/UX Design</p>
          </Col>
          <Col xl={2} lg={2} md={12} className="text-center">
            <img src={image5} style={{ height: "100px", width: "100px" }} className="mb-3" />
            <p>Web Development</p>
          </Col>
          <Col xl={2} lg={2} md={12} className="text-center">
            <img src={image1} style={{ height: "100px", width: "100px" }} className="mb-3"/>
            <p>Product Design</p>
          </Col>
          <Col xl={2} lg={2} md={12} className="text-center">
            <img src={image4} style={{ height: "100px", width: "100px" }} className="mb-3"/>
            <p>Mobile Apps</p>
          </Col>
          <Col xl={2} lg={2} md={12} className="text-center">
            <img src={image3} style={{ height: "100px", width: "100px" }} className="mb-3"/>
            <p>SEO</p>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
</div>
<div className="animate__animated animate__fadeInUp">
      <Container>
        <Row className="justify-content-center">
        <Col xl={3} lg={4} md={12} className="text-left">
          <h3 className="card-text" style={{ lineHeight: '45px', fontSize: '30px'}}>Welcome to AVO A Personal Porfolio Web Agency</h3>
            {/* <img src={image2} style={{ height: "100px", width: "100px" }} className="mb-3" /> */}
            <p className="card-text" style={{ lineHeight: '28.8px', fontSize: '16px'}}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </Col>
          <Col xl={4} lg={4} md={12} className="text-center card-image">
            <img src={image6} style={{ height: "95%", width: "100%" }} className="mb-3" />
          </Col>
          <Col xl={3} lg={4} md={12} className="text-md-right">
            {/* <img src={image1} style={{ height: "100px", width: "100px" }} className="mb-3"/> */}
            <p className="card-text mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            {/* <Button buttonStyle="btn--primary" buttonSize="btn--medium"> View all Projects</Button> */}
            <Button buttonStyle="btn--primary" buttonSize="btn--medium"> View all Projects</Button>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
</div>
<Container>

<Row className="justify-content-center">
    <Col xl={3} lg={4} md={12}>
    <div className="search-engine d-flex animate__animated animate__fadeInUp">
			<span>01</span>
			<div class="text">
			<h3>Search Engine Optimization</h3>
			<p>Far far away, behind the word mountains</p>
			</div>
	</div>
    </Col>
    <Col xl={3} lg={4} md={12}>
    <div className="search-engine d-flex animate__animated animate__fadeInUp">
			<span>02</span>
			<div class="text">
			<h3>Search Engine Optimization</h3>
			<p>Far far away, behind the word mountains</p>
			</div>
	</div>
    </Col>
    <Col xl={3} lg={4} md={12}>
    <div className="search-engine d-flex animate__animated animate__fadeInUp">
			<span>03</span>
			<div class="text">
			<h3>Search Engine Optimization</h3>
			<p>Far far away, behind the word mountains</p>
			</div>
	</div>
    </Col>
</Row>

</Container>

    </div>
  );
}
