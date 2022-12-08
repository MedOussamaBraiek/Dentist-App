import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import './docteur.css'

// import bg3 from '../../assets/images/bg3.jpg'
import karim from '../../assets/images/docteur-karim.jpg'

const Docteur = () => {
  return (
    <section className="docteur" id="docteur">
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                    <div style={{"marginTop":"7rem"}} className="about__title d-flex align-items-center justify-content-center">
                        <h3>Docteur Karim</h3>
                    </div>
                </Col>
            
            <Row>
                <Col lg="5" md="5">
                    <img alt="bg4" src={karim} className='img-fluid img__docteur'/>
                </Col>
                <Col lg="7" md="7" className='docteur__details'>
                    <h2 className='mb-4 mt-3'>Notre clinique est faite pour que vous souriiez tout le temps</h2>
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
            </Row>
            </Row>
        </Container>
    </section>
  )
}

export default Docteur