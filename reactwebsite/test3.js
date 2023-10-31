import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Button } from '../Button/Button';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Assets/Images/image2.jpg";
import image2 from "../../Assets/Images/image3.jpg";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Set a timeout to change the slide every 2 seconds
    const autoRotate = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => {
      clearInterval(autoRotate); // Clear the interval when the component unmounts
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <div>
        <div className="hero-container">
          <Slider ref={sliderRef} {...settings}>
            <div>
              <img src={image1} alt="image1" />
              {/* <div> */}
              <div className="slider-content">
                <Container>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <h1>
                        WE CREATE <br />
                        MODERN &amp; <br />
                        MINIMAL WEBSITE
                      </h1>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <div className="hero-btn2">
                        <Button
                          className="btn-main"
                          buttonStyle="btn--primary"
                          buttonSize="btn--large"
                        >
                          Start Project
                        </Button>
                      </div>
                    </Col>
                    <Col sm={7}>
                      <div>
                        <div>
                          <div className="count">
                            <h1 className="count-wrapper">{count}</h1>
                            <div className="vertical-line"></div>
                          </div>
                          {/* <div class="text-container"> */}
                          <div
                            className="text-container"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              More than a
                            </p>
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              hundred successful
                            </p>
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              projects
                            </p>
                          </div>
                          {/* </div> */}
                          <p
                            className="text-right d-sm-none"
                            style={{ fontSize: "14px" }}
                          >
                            More than a hundred successful projects
                          </p>
                        </div>
                        {/* </div> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="hero-btn">
                <Button className="btn-circle">
                  <FontAwesomeIcon icon={faPlay} />
                </Button>
              </div>
                </Container>
      
              </div>
            </div>

            <div>
              <img src={image2} alt="image2" />
              {/* <div> */}
              <div className="slider-content">
                <Container>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <h1>
                        WE CREATE <br />
                        MODERN &amp; <br />
                        MINIMAL WEBSITE
                      </h1>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <div className="hero-btn2">
                        <Button
                          className="btn-main"
                          buttonStyle="btn--primary"
                          buttonSize="btn--large"
                        >
                          Start Project
                        </Button>
                      </div>
                    </Col>
                    <Col sm={7}>
                      <div>
                        <div>
                          <div className="count">
                            <h1 className="count-wrapper">{count}</h1>
                            <div className="vertical-line"></div>
                          </div>
                          {/* <div class="text-container"> */}
                          <div
                            className="text-container"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              More than a
                            </p>
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              hundred successful
                            </p>
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              projects
                            </p>
                          </div>
                          {/* </div> */}
                          <p
                            className="text-right d-sm-none"
                            style={{ fontSize: "14px" }}
                          >
                            More than a hundred successful projects
                          </p>
                        </div>
                        {/* </div> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="hero-btn">
                <Button className="btn-circle">
                  <FontAwesomeIcon icon={faPlay} />
                </Button>
              </div>
                </Container>
      
              </div>
            </div>
          </Slider>
        </div>
      </div>
    // {/* </div> */}
  );
};

export default HeroSection;



// <Container>
//         <Row className="justify-content-center">
//           <Col sm={4}>
//             <h1>
//               WE CREATE <br />
//               MODERN &amp; <br />
//               MINIMAL WEBSITE
//             </h1>
//             <p>
//               A small river named Duden flows by their place and supplies it
//               with the necessary regelialia.
//             </p>
//             <div className="hero-btn2">
//               <Button
//                 className="btn-main"
//                 buttonStyle="btn--primary"
//                 buttonSize="btn--large"
//               >
//                 Start Project
//               </Button>
//             </div>
//           </Col>
//           <Col sm={7}>
//             <div>
//               <div>
//                 <div className="count">
//                   <h1 className="count-wrapper">{count}</h1>
//                   <div className="vertical-line"></div>
//                 </div>
//                 {/* <div class="text-container"> */}
//                 <div
//                   className="text-container"
//                   style={{ display: "flex", flexDirection: "column" }}
//                 >
//                   <p
//                     className="line"
//                     style={{ textAlign: "right", margin: "0", padding: "0" }}
//                   >
//                     More than a
//                   </p>
//                   <p
//                     className="line"
//                     style={{ textAlign: "right", margin: "0", padding: "0" }}
//                   >
//                     hundred successful
//                   </p>
//                   <p
//                     className="line"
//                     style={{ textAlign: "right", margin: "0", padding: "0" }}
//                   >
//                     projects
//                   </p>
//                 </div>
//                 {/* </div> */}
//                 <p
//                   className="text-right d-sm-none"
//                   style={{ fontSize: "14px" }}
//                 >
//                   More than a hundred successful projects
//                 </p>
//               </div>
//               {/* </div> */}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <div className="hero-btn">
//         <Button
//           className="btn-circle"
//           buttonStyle="btn--primary"
//           buttonSize="btn--large"
//         >
//           <FontAwesomeIcon icon={faPlay} />
//         </Button>
//       </div> 




<Container>
<Row className="align-items-center justify-content-center"> {/* Add justify-content-center */}
<Col xs={12} md={6}>
<div className="custom-text-align">
<div className="desc">
          <div className="top">
            {/* <p style={{ fontSize: "16px" }}>Web Design</p> */}
            <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
          </div>
          <div className="absolute">
      <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
        {/* Far far away, behind the word mountains, far from the */}
        countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="icon d-flex justify-content-end align-items-center mb-4">
        <div className="search-engine d-flex animate__animated animate__fadeInUp">
          <Image
            src={image2}
            roundedCircle
            width="60px"
            height="60px"
          />
          <div className="text">
            <h3>Jamie Jonson</h3>
            <p style={{ textAlign: "left" }}>avo.com</p>
          </div>
        </div>
      </div>
            <Button
              size="sm"
              variant="secondary"
              className="button-transparent"
              style={{ transform: "scaleX(1.1)" }}
            >
              View Portfolio
            </Button>
          </div>
        </div>
</div>
</Col>
<Col xs={12} md={6}>
<div className="work-name animate__animated animate__fadeInUp">
  <img src={image1} width="404px" height="550px" alt="Image" />
</div>
</Col>
</Row>
</Container>