import React from "react";
import "./IIIustration.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import instagramhidden from "../../Assets/Social/instagram (hidden).png";
import twitterhidden from "../../Assets/Social/twitter (hidden).png";
import animation from "../../Assets/art/animation1.png";
import imgillu from "../../Assets/Design/DesingHeader/Game.png";
import Artmoc2 from "../../Assets/Artmoc Logo.png";
import arrowreturn from "../../Assets/PAGE ARROWS/arrow return (in use).png";
import { Link, useNavigate } from "react-router-dom";
import GazeTwo from "../../Assets/Design/Game/gaze 2.jpg"
import GazeOne from "../../Assets/Design/Game/gaze 1.jpg"
import TurkishMap from "../../Assets/Design/Game/Turkey Map_Icons-01.png"
import TurkishPuzzle from "../../Assets/Design/Game/tamamlanmamış puzzle.jpg"

const Game = () => {
  const navigate = useNavigate();
  return (
    <div className="div-container-body-iustration">
      <div className="fixedtopleft-ws">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-ws">
        <a href="#frame_design">Design</a>
      </div>
      <div className="fixeddownleft-ws">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-ws">
        <div className="social-right-down-ws">
          <a href="/">
            <img src={twitterhidden} alt="Twitter" />
          </a>
          <a href="/">
            <img src={instagramhidden} alt="Instagram" />
          </a>
        </div>
        <div className="c">
          <a href="#frame_contact">Contact</a>
        </div>
      </div>

      <div>
        <img className="artmoc-global2" src={Artmoc2} alt="" />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        initialSlide={1}
      >
        {/* <p className='img-bottm'>Lorem picsum solar sit ahmet. lorem picsum</p>  */}
        <SwiperSlide>
          <img src={GazeOne} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GazeTwo} alt="slide_image" />
          <p className="gaze-text"></p> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={TurkishMap} alt="slide_image" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={TurkishPuzzle} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
        <p className="img-user">by NOSCETEİPSUM</p>
        <p className="img-bottm">Lorem picsum solar sit ahmet. lorem picsum</p>
        <div className="image-illu">
          <img src={imgillu} alt="" />
        </div>
        <Link to="/#frame_art">
          <a href="#frame_art">
        <div className="arrow-turn">
            <img src={arrowreturn} alt="" />
        </div>
        </a>
        </Link>
      </Swiper>
    </div>
  );
};

export default Game;
