import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ModalInfo from "../Modal/ModalInfo";
import "./services.css";

import clean1 from "../../assets/images/clean-teeths-1.jpg";
import clean2 from "../../assets/images/clean-teeths-2.jpg";
import clean3 from "../../assets/images/clean-teeths-3.jpg";
import clean4 from "../../assets/images/clean-teeths-4.jpg";

import fix1 from "../../assets/images/fix-teeths-1.jpg";
import fix2 from "../../assets/images/fix-teeths-2.jpg";
import fix3 from "../../assets/images/fix-teeths-3.jpg";

import prot1 from "../../assets/images/prot-teeths-1.jpg";
import prot2 from "../../assets/images/prot-teeths-2.jpg";
import prot3 from "../../assets/images/prot-teeths-3.jpg";

const service1_title = "Nettoyage";
const p1 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio enim, ex,consequuntur labore dolorum omnis magnam facilis harum quo earum? Optio perferendis cupiditate eum, sint eveniet tempore sit. Cum!";
const p2 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio enim, ex,consequuntur labore dolorum omnis magnam facilis harum quo earum? Optio perferendis cupiditate eum, sint eveniet tempore sit. Cum!";
const p3 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio enim, ex,consequuntur labore dolorum omnis magnam facilis harum quo earum? Optio perferendis cupiditate eum, sint eveniet tempore sit. Cum!";
const p4 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio enim, ex,consequuntur labore dolorum omnis magnam facilis harum quo earum? Optio perferendis cupiditate eum, sint eveniet tempore sit. Cum!";

const service2_title = "Fixation";
const service3_title = "Prototypage";
const Services = () => {
  const [modal, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((el) => observer.observe(el));

    const headerElements = document.querySelectorAll(".about__title");
    headerElements.forEach((el) => observer.observe(el));
  });

  return (
    <section className="about services" id="services">
      <Container>
        <Row>
          <Col lg="12" className="mb-5" style={{ "margin-top": "110px" }}>
            <div className="about__title d-flex align-items-center justify-content-center">
              <h3>Nos Services</h3>
            </div>
          </Col>

          <ModalInfo
            modal={modal}
            toggle={toggle}
            title={service1_title}
            p1={p1}
            img1={clean1}
            p2={p2}
            img2={clean2}
            p3={p3}
            img3={clean3}
            p4={p4}
            img4={clean4}
          />

          <ModalInfo
            modal={modal2}
            toggle={toggle2}
            title={service2_title}
            p1={p1}
            img1={fix1}
            p2={p2}
            img2={fix2}
            p3={p3}
            img3={fix3}
          />

          <ModalInfo
            modal={modal3}
            toggle={toggle3}
            title={service3_title}
            p1={p1}
            img1={prot1}
            p2={p2}
            img2={prot2}
            p3={p3}
            img3={prot3}
          />

          <Row className="d-flex justify-content-center gap-5 services__content">
            <Col lg="3" className="hidden">
              <div className="card ">
                <div className="card-body">
                  <h1>Nettoyage</h1>
                  <h2>Master the web layouts and grid system.</h2>
                  <p>Develop real prototypes from UX standpoint with code.</p>
                </div>
                <div className="card-button">
                  <a onClick={toggle} className="explore" href="#services">
                    Explorez maintenant
                    <svg
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="3" className="hidden">
              <div className="card ">
                <div className="card-body">
                  <h1>Fixation</h1>
                  <h2>Master the web layouts and grid system.</h2>
                  <p>Develop real prototypes from UX standpoint with code.</p>
                </div>
                <div className="card-button">
                  <a onClick={toggle2} className="explore" href="#services">
                    Explorez maintenant
                    <svg
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="3" className="hidden">
              <div className="card ">
                <div className="card-body">
                  <h1>Prototypage</h1>
                  <h2>Master the web layouts and grid system.</h2>
                  <p>Develop real prototypes from UX standpoint with code.</p>
                </div>
                <div className="card-button">
                  {/* <ModalInfo /> */}
                  <a onClick={toggle3} className="explore" href="#services">
                    Explorez maintenant
                    <svg
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
