import React from "react";
import "./Works.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import image3 from "../../Assets/Images/image17-w.jpg";
import image4 from "../../Assets/Images/image18-w.jpg";
import image5 from "../../Assets/Images/image19-w.jpg";
import image6 from "../../Assets/Images/image20-w.jpg";
import image2 from "../../Assets/Images/man-icon.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";

const Works = () => {
  return (
    <div class="work-body">
      <div className="text-center animate__animated animate__fadeInUp">
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "900",
            marginTop: "10%",
            marginBottom: "2%",
            padding: "5%",
          }}
        >
          {" "}
          OUR WORKS{" "}
        </h1>
      </div>

      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="custom-text-align">
              <div className="desc">
                <div className="top">
                  <p style={{ fontSize: "16px" }}>Application</p>
                  <h2 style={{ fontSize: "40px" }}>Miniwall Clock</h2>
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
                    style={{
                      textTransform: "uppercase",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      fontWeight: "700",
                      border: "1px solid rgb(217, 217, 225)",
                      padding: "7px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className="work-name animate__animated animate__fadeInUp"
              style={{ order: "-1" }}
            >
              <img src={image4} width="404px" height="550px" alt="Image" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col
            xl={5}
            lg={5}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              className="work-name animate__animated animate__fadeInUp"
              style={{ order: "-1" }}
            >
              <img src={image3} width="404px" height="550px" />
            </div>
          </Col>

          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="desc">
              <div className="top">
                <p style={{ fontSize: "16px" }}>UI/UX Design</p>
                <h2 style={{ fontSize: "40px" }}>Avo Portfolio Agency</h2>
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
                  style={{
                    textTransform: "uppercase",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    fontWeight: "700",
                    border: "1px solid rgb(217, 217, 225)",
                    padding: "7px 10px",
                    borderRadius: "5px",
                  }}
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
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="custom-text-align">
              <div className="desc">
                <div className="top">
                  <p style={{ fontSize: "16px" }}>Web Development</p>
                  <h2 style={{ fontSize: "40px" }}>Hand Writing</h2>
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
                    style={{
                      textTransform: "uppercase",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      fontWeight: "700",
                      border: "1px solid rgb(217, 217, 225)",
                      padding: "7px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className="work-name animate__animated animate__fadeInUp"
              style={{ order: "-1" }}
            >
              <img src={image4} width="404px" height="550px" alt="Image" />
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
              <img src={image5} width="404px" height="550px" />
            </div>
          </Col>

          <Col xl={5} lg={5} md={12} className="d-flex align-items-center">
            <div className="desc">
              <div className="top">
                <p style={{ fontSize: "16px" }}>Illustration</p>
                <h2 style={{ fontSize: "40px" }}>Keyboard</h2>
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
                  style={{
                    textTransform: "uppercase",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    fontWeight: "700",
                    border: "1px solid rgb(217, 217, 225)",
                    padding: "7px 10px",
                    borderRadius: "5px",
                  }}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* right */}

      <Container className="work-last">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <div className="custom-text-align">
              <div className="desc">
                <div className="top">
                  <p style={{ fontSize: "16px" }}>Web Development</p>
                  <h2 style={{ fontSize: "40px" }}>Spiral</h2>
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
                    style={{
                      textTransform: "uppercase",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      fontWeight: "700",
                      border: "1px solid rgb(217, 217, 225)",
                      padding: "7px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="work-name animate__animated animate__fadeInUp">
              <img src={image6} width="404px" height="550px" alt="Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Works;
