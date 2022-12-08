import React from 'react'
import { Container,Col, Row } from 'react-bootstrap';
import './about.css';

import bg4 from '../../assets/images/bg4.jpg'

const About = () => {
  return (
    <section className="about" id="cabinet">
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                    <div className="about__title d-flex align-items-center justify-content-center">
                        <h3>About</h3>
                    </div>
                </Col>
            
            <Row>
                <Col lg="6" md="6">
                    <h2 className='mb-4'>Notre clinique est faite pour que vous souriiez tout le temps</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa 
                        vel explicabo pariatur. Fugit amet debitis ratione, nulla 
                        possimus ad odio eveniet neque ipsa saepe ullam maiores 
                        error sapiente dicta.</p>

                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa 
                        vel explicabo pariatur. Fugit amet debitis ratione, nulla 
                        possimus ad odio eveniet neque ipsa saepe ullam maiores 
                        error sapiente dicta.</p>
                    <a href="/signup">
                        <button className="signup">Rendez-vous</button>
                    </a>
                </Col>
                <Col lg="6" md="6">
                    <img alt="bg4" src={bg4} className='img-fluid img__about'/>
                </Col>
            </Row>
            </Row>
        </Container>
    </section>
  )
}

export default About