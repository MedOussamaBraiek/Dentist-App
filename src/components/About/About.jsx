import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./about.css";

import bg4 from "../../assets/images/bg4.jpg";

const About = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.classList.add("show-about-text");
        } else {
          entry.target.classList.remove("show-about-text");
        }
      });
    });

    const aboutTextElements = document.querySelectorAll(".about-text");
    aboutTextElements.forEach((el) => observer.observe(el));

    const aboutImgElements = document.querySelectorAll(".about-img");
    aboutImgElements.forEach((el) => observer.observe(el));
  });

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
            <Col lg="6" md="6" className="about-text">
              <h2 className="mb-4">
                Notre clinique est faite pour que vous souriiez tout le temps
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                ipsa vel explicabo pariatur. Fugit amet debitis ratione, nulla
                possimus ad odio eveniet neque ipsa saepe ullam maiores error
                sapiente dicta.
              </p>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                ipsa vel explicabo pariatur. Fugit amet debitis ratione, nulla
                possimus ad odio eveniet neque ipsa saepe ullam maiores error
                sapiente dicta.
              </p>
              <a href="/signup">
                <button className="signup">Rendez-vous</button>
              </a>
            </Col>
            <Col lg="6" md="6" className="about-img">
              <img alt="bg4" src={bg4} className="img-fluid img__about" />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default About;
