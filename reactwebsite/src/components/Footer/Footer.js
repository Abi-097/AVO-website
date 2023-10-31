import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faMap,
  faPhone,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row className="justify-content-center">
          <Col xl={2} lg={2} md={6} xs={12}>
            <h2 className="footer-h2">avo</h2>
            <p className="footer-p">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <ButtonGroup aria-label="Basic example">
              <Button className="rounded-circle mx-2 btn-transparent2">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#a0a0b4" }}
                />
              </Button>
              <Button className="rounded-circle mx-2 btn-transparent2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#a0a0b4" }}
                />
              </Button>
              <Button className="rounded-circle mx-2 btn-transparent2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#a0a0b4" }}
                />
              </Button>
            </ButtonGroup>
          </Col>
          <Col xl={2} lg={2} md={6} xs={12}>
            <h2 className="footer-h2">Community</h2>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />{" "}
                Projects
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />{" "}
                Team
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />{" "}
                Reviews
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />{" "}
                FAQs
              </Link>
            </div>
          </Col>
          <Col xl={2} lg={2} md={6} xs={12}>
            <h2 className="footer-h2">About Us</h2>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                Projects
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                Team
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                Reviews
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                FAQs
              </Link>
            </div>{" "}
          </Col>
          <Col xl={2} lg={2} md={6} xs={12}>
            <h2 className="footer-h2">Company</h2>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                Projects
              </Link>
            </div>{" "}
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                Team
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                Reviews
              </Link>
            </div>
            <div className="footer-link-container">
              <Link to="/page" className="footer-links">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  rotation={90}
                  style={{ color: "#a0a0b4" }}
                />
                FAQs
              </Link>
            </div>
          </Col>
          <Col xl={3} lg={2} md={6} xs={12}>
            <h2 className="footer-h2">Have a Questions?</h2>
            <p className="footer-p2">
              <FontAwesomeIcon icon={faMap} style={{ color: "#a0a0b4" }} />
              203 Fake St. <br /> Mountain View,
              <br /> San Francisco, <br />
              California, USA
            </p>
            <p className="footer-p2">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#a0a0b4" }} /> +2
              392 3929 210{" "}
            </p>
            <p className="footer-p2">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#a0a0b4" }} />{" "}
              info@yourdomain.com{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <div class="col-md-12 text-center footer-text">
        <p>
          Copyright &copy; All rights reserved | This template is made with{" "}
          <FontAwesomeIcon icon={faHeart} /> by{" "}
          <Link to="/page" className="footer-links-c">
            Colorlib
          </Link>
        </p>
      </div>
    </div>
  );
}
