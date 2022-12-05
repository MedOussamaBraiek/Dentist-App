import React from "react";
import { Container } from "reactstrap";
import "./header.css";

// import logo from '../../assets/images/logo.png'
//import logo_karim from '../../assets/images/logo-karim.png'
import karim_logo from '../../assets/images/karim-logo.png'

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
    display: "Patients",
    url: "/patients",
  },
  {
    display: "Services",
    url: "#services",
  },
  {
    display: "Contact",
    url: "#contact",
  },
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
            {/* <img alt="logo"
                className="img-fluid" 
                src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/null/external-teeth-anatomy-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/> */}
            <img className="karim-logo" alt="logo" src={karim_logo} />
            {/* <h2 className=" d-flex gap-2 align-items-center ">
                <i class="fas fa-tooth"></i>
                <span>Dr.Karim Somai</span>
            </h2> */}
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

          <div>
            <a href="#form">
              <button className="signup">Rendez-vous</button>
            </a>
          </div>
          
          <span className="mobile__menu">
            <i class="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
