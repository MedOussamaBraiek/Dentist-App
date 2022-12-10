import React from "react";
import About from "../About/About";
import Cabinet from "../Cabinet/Cabinet";
import Docteur from "../Docteur/Docteur";
import Footer from "../Footer/Footer";
import Form from "../Form/FormSection";
import Header from "../Header/Header";
import Phone from "../Phone/Phone";
import ScrollButton from "../ScrollButton/ScrollButton";
import Services from "../Services/Services";
import Swiper from "../Swiperr/Swiperr";

const Layout = () => {
  return (
    <>
      <Phone />
      <Header />
      <Swiper />
      <Docteur />
      <About />
      <Services />
      <Form />
      <Cabinet />
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Layout;
