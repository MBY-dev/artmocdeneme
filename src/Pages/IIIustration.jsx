import React from 'react'
import "./IIIustration.css";
import {Swiper, SwiperSlide} from "swiper/react";
import  'swiper/css';
import  'swiper/css/effect-coverflow';
import  'swiper/css/pagination';
import  'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import illustration from "../Assets/Illustration/Rectangle 2.3.png"
import pageflow5 from "./../Assets/pageflow5.png";
import animation from "../Assets/art/animation1.png"
import animation2 from "../Assets/Illustration/Rectangle 2.1.png"
import animation3 from "../Assets/Illustration/Rectangle 2.3.png"
const IIIustration = () => {
  
  return (
<div className="div-container-body-iustration">
    <Swiper
    effect={'coverflow'}
    grabCursor= {true}
    centeredSlides= {true}
    slidesPerView={'auto'}
    coverflowEffect={
      {
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2.5,

      }
    }
    pagination={{el: '.swiper-pagination', clickable:true}}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,

    }}
    modules={[EffectCoverflow, Pagination, Navigation]}
    className='swiper_container'
    initialSlide={2}
    >
      <SwiperSlide>
      <img src={animation} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={animation2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={animation3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={animation} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={animation2} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>

    </Swiper>
</div>
  )
}

export default IIIustration
