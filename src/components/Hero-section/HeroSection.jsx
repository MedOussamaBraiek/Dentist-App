import React from 'react';
import { Row, Col } from 'reactstrap';
import './heroSection.css';

import bg3 from "../../assets/images/bg3.jpg"

const HeroSection = () => {
    return (
        <section> 
                <Row className='hero-container'>
                    <Col lg="6">
                        <div class="hero__content">
                            <h1 className="hero__title">Faites briller votre sourire!</h1>
                            <p className="hero__parag">
                                Simply automate and manage all your home devices, in just a few
                                clicks.{" "}
                            </p>
                            <a href="/signup">
                                <button className="signup">Rendez-vous</button>
                            </a>
                        </div>
                    </Col>
                    <Col lg="6"></Col>
                    <img src={bg3} alt="img" className='w-100 img-fluid img__home'/>
                </Row>  
        </section>
        );
}

export default HeroSection;