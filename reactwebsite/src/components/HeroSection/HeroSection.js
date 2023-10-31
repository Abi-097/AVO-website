import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Assets/Images/image2.jpg";
import image2 from "../../Assets/Images/image3.jpg";
import Carousel from "react-bootstrap/Carousel";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 400) {
        setCount(count + 1);
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      if (count2 < 21) {
        setCount2(count2 + 1);
      } else {
        clearInterval(timer2);
      }
    }, 500);

    return () => clearInterval(timer2);
  }, [count2]);
  return (
    <div>
      <div className="hero-container">
        <Carousel
          fade
          activeIndex={index}
          onSelect={handleSelect}
          interval={1000}
        >
          <Carousel.Item>
            <div className="matrix-shape">
              <img src={image1} alt="image1" />
            </div>
            <div className="absolute">
              <div className="slider-content">
                <Container>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <h1 className="hero-h1">
                        WE CREATE <br />
                        MODERN &amp; <br />
                        MINIMAL WEBSITE
                      </h1>
                      <p className="hero-p">
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
                                color: "white",
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
                                color: "white",
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
                                color: "white",
                              }}
                            >
                              projects
                            </p>
                          </div>

                          <p
                            className="text-right d-sm-none number-titlealign"
                            style={{ fontSize: "14px", color: "white" }}
                          >
                            More than a hundred successful projects
                          </p>
                        </div>
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
          </Carousel.Item>
          <Carousel.Item>
            <div className="matrix-shape">
              <img src={image2} alt="image2" />
            </div>
            <div className="absolute">
              <div className="slider-content">
                <Container>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <h1 className="hero-h1">
                        WE CREATE <br />
                        MODERN &amp; <br />
                        MINIMAL WEBSITE
                      </h1>
                      <p className="hero-p">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <div className="hero-btn2">
                        <Button
                          className="btn-main"
                          buttonStyle="btn--primary"
                          buttonSize="btn--large"
                        >
                          Explore Project
                        </Button>
                      </div>
                    </Col>
                    <Col sm={7}>
                      <div>
                        <div>
                          <div className="count">
                            <h1 className="count-wrapper">{count2}</h1>
                            <div className="vertical-line"></div>
                          </div>

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
                                color: "white",
                              }}
                            >
                              Years of
                            </p>
                            <p
                              className="line"
                              style={{
                                textAlign: "right",
                                margin: "0",
                                padding: "0",
                                color: "white",
                              }}
                            >
                              Experienced
                            </p>
                          </div>
                          {/* </div> */}
                          <p
                            className="text-right d-sm-none number-titlealign"
                            style={{ fontSize: "14px", color: "white" }}
                          >
                            Years of Experienced
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
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
