import React from 'react'
import "./IIIustration.css";
import {Swiper, SwiperSlide} from "swiper/react";
import  'swiper/css';
import  'swiper/css/effect-coverflow';
import  'swiper/css/pagination';
import  'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";   
import illustration from "../Assets/Illustration/Rectangle 2.3.png"
import pageflow5 from "./../Assets/pageflow5.png";
import animation from "../Assets/art/animation1.png"
import animation2 from "../Assets/Illustration/Rectangle 2.1.png"
import animation3 from "../Assets/Illustration/Rectangle 2.3.png"
const IIIustration = () => {
  
  return (
<div className="div-container-body-iustration">
<div className="fixedtopleft-ww">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-ww">
          <a href="#frame_design">Design</a>
        </div>
        <div className="fixeddownleft-ww">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-ww">
          <div class="social-right-down-ww">
            <a href="#">
              <img src={twitterhidden} alt="Twitter" />
            </a>
            <a href="#">
              <img src={instagramhidden} alt="Instagram" />
            </a>
          </div>
          <div class="c">
            <a href="#frame_contact">Contact</a>
          </div>
        </div>
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
    initialSlide={1}
    >
      <SwiperSlide>
      <img src={animation} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={animation} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={animation} alt="slide_image" />
      </SwiperSlide>
    

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>

    </Swiper>
</div>
  )
}

export default IIIustration
