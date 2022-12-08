import React from "react";
import { Container } from "reactstrap";
import "./header.css";

import karim_logo from '../../assets/images/karim-logo.png';

const NAV__LINKS = [
  {
    display: "Accueil",
    url: "/",
  },
  {
    display: "Docteur",
    url: "#docteur",
  },
  {
    display: "Cabinet",
    url: "#cabinet",
  },
  {
    display: "Services",
    url: "#services",
  },
  {
    display: "Contact",
    url: "#contact",
  },
  {
    display: "Patients",
    url: "/patients",
  }
];

const Header = () => {


  const headerRef = React.useRef(null);

  const menuRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
  }, []);
  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");
 
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <img className="karim-logo" alt="logo" src={karim_logo} />
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li key={index} className="nav__item">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

            <a className="signup rv-a" href="#form">
              Rendez-vous
            </a>
          
          <span className="mobile__menu">
            <button onClick={toggleMenu} className="mobile__menu__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
