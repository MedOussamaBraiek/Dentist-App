import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperr.css";

import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import { Container } from 'react-bootstrap';

const Swiperr = () => {
  return (
    <Container className='swiper__section'>
      <Swiper
        // direction={"vertical"}
        slidesPerView={1}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide
          className='img-fluid swiper1'
        >
          <div className="title title1" data-swiper-parallax="-300">
            <h1>Votre Famille</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             Ma priorité
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className='img-fluid swiper2'
        >
          <div className="title title2" data-swiper-parallax="-300">
              <h1>Vos Amis</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Ma priorité
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
         className='img-fluid swiper3'
        >
          <div className="title title3" data-swiper-parallax="-300">
            <h1>Vos Sourires</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Ma priorité
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Swiperr