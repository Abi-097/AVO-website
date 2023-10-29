import React from 'react';
import './Works.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import image1 from "../../Assets/Images/image16-w.jpg"
import image2 from '../../Assets/Images/man-icon.png'
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
const Works = ({md} ) => {
    return (
        <div>
        <div className="text-center animate__animated animate__fadeInUp">
        <h1> OUR WORKS</h1>
</div>
       
           <Container>
{/* left */}

<Row className="justify-content-center">
<Col xl={5} lg={5} md={12} className="d-flex align-items-center justify-content-center">
  <div className="work-name animate__animated animate__fadeInUp">
    <img src={image1} width="404px" height="550px" />
  </div>
</Col>
   
    <Col xl={5} lg={5} md={12}>
    <div class="px-4 px-lg-4">
									<div className="desc">
										<div className="top">
                                            <p style={{fontSize:"16px"}}>Web Design</p>
											<h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
										</div>
										<div className="absolute">
                                    <p style={{fontSize:"16px", color: "#a0a0b4"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											<div className="icon d-flex align-items-center mb-4">
												<div className="search-engine d-flex animate__animated animate__fadeInUp">
<Image src={image2} roundedCircle width="60px" height="60px" />
			<div class="text">
			<h3>Jamie Jonson</h3>
			<p>avo.com</p>
			</div></div>
											</div>
											<Button size="sm" variant="secondary" className='button-transparent' style={{ transform: 'scaleX(1.1)' }}>View Portfolio</Button> 
										</div>
									</div>
								</div>
    {/* <div className="work-name1 animate__animated animate__fadeInUp">
        <p style={{fontSize:"12px"}}>Web Design</p>
        <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
        <p style={{fontSize:"16px", color: "#a0a0b4"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
        {/* <Image src={image2} roundedCircle width="60px" height="60px"/> */}
        {/* <Row>
  <div className="col-md-3 d-flex align-items-center" style={{width:"15%"}}>
    
  </div>
  <div className="col-md-9 text-right">
    <p className="first-line"></p>   
    <p className="second-line"></p>
  </div>
</Row> */}
{/* <div className="search-engine d-flex animate__animated animate__fadeInUp">
<Image src={image2} roundedCircle width="60px" height="60px" />
			<div class="text">
			<h3>Jamie Jonson</h3>
			<p>avo.com</p>
			</div> */}
	{/* </div> */}
{/* <Button size="sm" variant="secondary" className='button-transparent'>View Portfolio</Button> */}
    {/* </div> */}
    {/* </Card> */}
    </Col>
   

</Row>

</Container> 

<Container>
{/* left */}

<Row className="justify-content-center">
<Col xl={5} lg={5} md={12} className="d-flex align-items-center justify-content-center">
  <div className="work-name animate__animated animate__fadeInUp">
    <img src={image1} width="404px" height="550px" />
  </div>
</Col>
   
    <Col xl={5} lg={5} md={12}>
    <div class="px-4 px-lg-4">
									<div className="desc">
										<div className="top">
                                            <p style={{fontSize:"16px"}}>Web Design</p>
											<h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
										</div>
										<div className="absolute">
                                    <p style={{fontSize:"16px", color: "#a0a0b4"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											<div className="icon d-flex align-items-center mb-4">
												<div className="search-engine d-flex animate__animated animate__fadeInUp">
<Image src={image2} roundedCircle width="60px" height="60px" />
			<div class="text">
			<h3>Jamie Jonson</h3>
			<p>avo.com</p>
			</div></div>
											</div>
											<Button size="sm" variant="secondary" className='button-transparent' style={{ transform: 'scaleX(1.1)' }}>View Portfolio</Button> 
										</div>
									</div>
								</div>
    {/* <div className="work-name1 animate__animated animate__fadeInUp">
        <p style={{fontSize:"12px"}}>Web Design</p>
        <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
        <p style={{fontSize:"16px", color: "#a0a0b4"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
        {/* <Image src={image2} roundedCircle width="60px" height="60px"/> */}
        {/* <Row>
  <div className="col-md-3 d-flex align-items-center" style={{width:"15%"}}>
    
  </div>
  <div className="col-md-9 text-right">
    <p className="first-line"></p>   
    <p className="second-line"></p>
  </div>
</Row> */}
{/* <div className="search-engine d-flex animate__animated animate__fadeInUp">
<Image src={image2} roundedCircle width="60px" height="60px" />
			<div class="text">
			<h3>Jamie Jonson</h3>
			<p>avo.com</p>
			</div> */}
	{/* </div> */}
{/* <Button size="sm" variant="secondary" className='button-transparent'>View Portfolio</Button> */}
    {/* </div> */}
    {/* </Card> */}
    </Col>
   

</Row>

</Container> 
        </div>
    );
}

export default Works;
