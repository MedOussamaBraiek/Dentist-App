import React from 'react'
import { Container,Col, Row } from 'react-bootstrap';
import ModalInfo from '../Modal/ModalInfo';
import './services.css';


const work1 = {
    title: "First Work",
    description:
      "An e-commerce store, an online classroom, and a streaming webapp (01/2022 - 06/2022)",
    info1:
      "Developed web platform back end using Node js, front end using ReactJs, defined and maintained databases to deliver responsiveness to data client requests.",
    info2:
      "Integrated enhancements into web design to improve user stickiness, smooth functionality, and boost load times.",
    info3: "Translated UX and business requirements into elegant code solutions.",
    info4:
      "Expanded development efforts to include related platforms and protocols such as REST and database technologies like MongoDB.",
  };

const Services = () => {
  return (
    <section className="about services"  id="services" >
        <Container>
            <Row>
                <Col lg="12" className="mb-5" style={{"margin-top": "110px"}}>
                    <div className="about__title d-flex align-items-center justify-content-center">
                        <h3 >Nos Services</h3>
                    </div>
                </Col>
            
            <Row className="d-flex justify-content-center gap-5">
                <Col lg="3">
                    <div className="card">
                        <div className="card-body">
                            <h1>Prototyping</h1>
                            <h2>Master the web layouts and grid system.</h2>
                            <p>Develop real prototypes from UX standpoint with code.</p>
                        </div>
                        <div className="card-button">
                            <a className="explore" href="#services">Explorez maintenant
                                <svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
                                    <path fill="#fff"
                                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="card">
                        <div className="card-body">
                            <h1>Prototyping</h1>
                            <h2>Master the web layouts and grid system.</h2>
                            <p>Develop real prototypes from UX standpoint with code.</p>
                        </div>
                        <div className="card-button">
                            <a className="explore" href="#services">Explorez maintenant
                                <svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
                                    <path fill="#fff"
                                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="card">
                        <div className="card-body">
                            <h1>Prototyping</h1>
                            <h2>Master the web layouts and grid system.</h2>
                            <p>Develop real prototypes from UX standpoint with code.</p>
                        </div>
                        <div className="card-button">
                            {/* <ModalInfo /> */}
                            <a className="explore" href="#services">Explorez maintenant
                                <svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
                                    <path fill="#fff"
                                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            </Row>
        </Container>
    </section>
  )
}

export default Services