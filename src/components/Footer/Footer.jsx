import React from "react";
import "./footer.css";
import karim_logo from '../../assets/images/karim-logo.png'

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const SERVICES = [
  {
    display: "Email Marketire",
    url: "#",
  },
  {
    display: "Compaigns",
    url: "#",
  },
  {
    display: "Branding",
    url: "#",
  },
  {
    display: "Offline",
    url: "#",
  },
];

const ABOUT = [
  {
    display: "Localisation",
    url: "#contact",
  },
  {
    display: "Docteur",
    url: "#docteur",
  },
  {
    display: "Cabinet",
    url: "#cabinet",
  }
];

const HELP = [
  {
    display: "FAQs",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer container-fluid mt-5">
      <Container className="containerr">
        <Row>
          <Col className="footer__header">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="logo">
                <h5 className=" d-flex gap-2 align-items-center ">
                  <a href="/" className="d-flex gap-2 align-items-center">
                    <img className="karim-logo" alt="logo" src={karim_logo} />
                  </a>
                </h5>
              </div>

              <div className="footer__right d-flex align-items-center gap-4">
                <h5 style={{"color":"#1c2498"}}>Prêt à commencer?</h5>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="mt-4 mb-5" />

        <Row>
          <Col lg="6">
            <div className="footer__left">
              <h4 style={{"color":"#1c2498"}} className="mb-5">Prendre un Rendez-Vous! </h4>
              <a href="/signup">
                  <button className="signup">Rendez-vous</button>
              </a>
            </div>
          </Col>

          <Col lg="6">
            <div className="d-flex justify-content-around flex-wrap">
              <Col lg="4" md="3" sm="6">
                <h5 className="list__title">Services</h5>
                <ListGroup className="list__group">
                  {SERVICES.map((item, index) => (
                    <ListGroupItem key={index} className="list__item">
                      <a href={item.url}>{item.display}</a>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>

              <Col lg="4" md="3" sm="6">
                <h5 className="list__title">A props</h5>
                <ListGroup className="list__group">
                  {ABOUT.map((item, index) => (
                    <ListGroupItem key={index} className="list__item">
                      <a href={item.url}>{item.display}</a>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>

              <Col lg="4" md="3" sm="6">
                <h5 className="list__title">Aid</h5>
                <ListGroup className="list__group">
                  {HELP.map((item, index) => (
                    <ListGroupItem key={index} className="list__item">
                      <a href={item.url}>{item.display}</a>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" className=" links d-flex gap-5">
            <a href="/#">Terms & Conditions</a>
            <a href="/#">Privacy Policy</a>
          </Col>

          <Col lg="6" className="links d-flex justify-content-end gap-5">
            <span>
              <a href="/#">
                <i class="ri-facebook-line"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-twitter-line"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-instagram-line"></i>
              </a>
            </span>
          </Col>
        </Row>

        <br />
      </Container>
    </footer>
  );
};

export default Footer;
