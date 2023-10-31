import React from "react";
import "./Works.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import image1 from "../../Assets/Images/image16-w.jpg";
import image2 from "../../Assets/Images/man-icon.png";
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";

const Works = () => {
  return (
    <div>
      <div className="text-center animate__animated animate__fadeInUp">
        <h1> OUR WORKS</h1>
      </div>

      {/* left */}
      <Container>
        <Row className="justify-content-center">
          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
          </Col>

          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="desc">
              <div className="top">
                <p style={{ fontSize: "16px" }}>Web Design</p>
                <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
              </div>
              <div className="absolute">
                <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="icon d-flex align-items-center mb-4">
                  <div className="search-engine d-flex animate__animated animate__fadeInUp">
                    <Image
                      src={image2}
                      roundedCircle
                      width="60px"
                      height="60px"
                    />
                    <div class="text">
                      <h3>Jamie Jonson</h3>
                      <p>avo.com</p>
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
          </Col>
        </Row>
      </Container>

      {/* right */}
      <Container>
        <Row className="justify-content-center">
          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="text-left">
              <div className="desc">
                <div className="top">
                  {/* <p style={{ fontSize: "16px" }}>Web Design</p> */}
                  <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
                </div>
                <div className="absolute">
                  <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="icon d-flex justify-content-end align-items-center mb-4">
                    <div className="search-engine d-flex animate__animated animate__fadeInUp">
                      <Image
                        src={image2}
                        roundedCircle
                        width="60px"
                        height="60px"
                      />
                      <div class="text">
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

          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
          </Col>
        </Row>
      </Container>

{/* testing ---> can use this */}
<div class="col-md-7">
							<div class="text pt-5 pr-md-5 ftco-animate">
								<div class="px-4 px-lg-4">
									<div class="desc text-md-right">
										<div class="top">
											<span class="subheading">Application</span>
											<h2 class="mb-2"><a href="work.html">Miniwall Clock</a></h2>
										</div>
										<div class="absolute">
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
											<div class="d-flex w-100">
												<div class="icon d-flex align-items-center ml-md-auto mb-4">
                        <img src={image1} width="404px" height="550px" />
													<div class="position pl-3 text-left">
														<h4 class="mb-0">Jamie Jonson</h4>
														<span>avo.com</span>
													</div>
												</div>
											</div>
											<p><a href="#" class="custom-btn">View Portfolio</a></p>
										</div>
									</div>
								</div>
							</div>
						</div>
            test
<Container fluid>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
        <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="text-left">Content for 1st Line</div>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <div className="custom-text-align">
          {/* from here */}
          <div className="desc">
                <div className="top">
                  {/* <p style={{ fontSize: "16px" }}>Web Design</p> */}
                  <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
                </div>
                <div className="absolute">
            <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
              Far far away, behind the word mountains, far from the
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
{/*  */}

      {/* left */}
      <Container>
        <Row className="justify-content-center">
          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
          </Col>

          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="desc">
              <div className="top">
                <p style={{ fontSize: "16px" }}>Web Design</p>
                <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
              </div>
              <div className="absolute">
                <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="icon d-flex align-items-center mb-4">
                  <div className="search-engine d-flex animate__animated animate__fadeInUp">
                    <Image
                      src={image2}
                      roundedCircle
                      width="60px"
                      height="60px"
                    />
                    <div class="text">
                      <h3>Jamie Jonson</h3>
                      <p>avo.com</p>
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
          </Col>
        </Row>
      </Container>

      {/* right */}
      <Container>
        <Row className="justify-content-center">
          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="text-left">
              <div className="desc">
                <div className="top">
                  <p style={{ fontSize: "16px" }}>Web Design</p>
                  <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
                </div>
                <div className="absolute">
                  <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="icon d-flex justify-content-end align-items-center mb-4">
                    <div className="search-engine d-flex animate__animated animate__fadeInUp">
                      <Image
                        src={image2}
                        roundedCircle
                        width="60px"
                        height="60px"
                      />
                      <div class="text">
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

          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* left */}
      <Container>
        <Row className="justify-content-center">
          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
          </Col>

          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="desc">
              <div className="top">
                <p style={{ fontSize: "16px" }}>Web Design</p>
                <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
              </div>
              <div className="absolute">
                <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="icon d-flex align-items-center mb-4">
                  <div className="search-engine d-flex animate__animated animate__fadeInUp">
                    <Image
                      src={image2}
                      roundedCircle
                      width="60px"
                      height="60px"
                    />
                    <div class="text">
                      <h3>Jamie Jonson</h3>
                      <p>avo.com</p>
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
          </Col>
        </Row>
      </Container>

      {/* right */}
      <Container>
        <Row className="justify-content-center">
          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="text-left">
              <div className="desc">
                <div className="top">
                  <p style={{ fontSize: "16px" }}>Web Design</p>
                  <h2 style={{ fontSize: "40px" }}>Cassette tape</h2>
                </div>
                <div className="absolute">
                  <p style={{ fontSize: "16px", color: "#a0a0b4" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="icon d-flex justify-content-end align-items-center mb-4">
                    <div className="search-engine d-flex animate__animated animate__fadeInUp">
                      <Image
                        src={image2}
                        roundedCircle
                        width="60px"
                        height="60px"
                      />
                      <div class="text">
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

          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image1} width="404px" height="550px" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Works;
