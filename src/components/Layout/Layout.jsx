import React from "react";
import About from "../About/About";
import Cabinet from "../Cabinet/Cabinet";
import Docteur from "../Docteur/Docteur";
import Form from "../Form/FormSection";
import Header from "../Header/Header";
import Phone from "../Phone/Phone";
import Services from "../Services/Services";
import Swiper from "../Swiperr/Swiperr";

const Layout = () => {
  return (
    <>
      <Phone />
      <Header />
      <Swiper />
      <About />
      <Docteur />
      <Services />
      <Form />
      <Cabinet />
    </>
  );
};

export default Layout;
