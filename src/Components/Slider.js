import React from 'react';
import { LadingPage_Slider1, LadingPage_Slider2 } from "../Constants/Images";
import "../css/Slider.css";

import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const getSlider = (slider) => {
  if (slider === "1") {
    return LadingPage_Slider1;
  } else {
    return LadingPage_Slider2;
  }
}

const Slider = ({ slider }) => {

  const imgs = getSlider(slider);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }}
    >
      {imgs.map(imageSlider => (
        <SwiperSlide><a href="/"><img src={imageSlider.slider1} className="d-block w-100" alt="..." /></a></SwiperSlide>
      ))}
    </Swiper>
  );

};

export default Slider;

        // <SwiperSlide><a href="/UsoConsultorio"><img src={imageSlider.slider1_2} className="d-block w-100" alt="..." /></a></SwiperSlide>
        // <SwiperSlide><a href="/LineaEspecializada"><img src={imageSlider.slider1_3} className="d-block w-100" alt="..." /></a></SwiperSlide>
        // <SwiperSlide><a href="/CepillosEspecializados"><img src={imageSlider.slider1_4} className="d-block w-100" alt="..." /></a></SwiperSlide>
        // <SwiperSlide><a href="/LineaSensibilidad"><img src={imageSlider.slider1_5} className="d-block w-100" alt="..." /></a></SwiperSlide>
        // <SwiperSlide><a href="/Multibeneficios"><img src={imageSlider.slider1_6} className="d-block w-100" alt="..." /></a></SwiperSlide>