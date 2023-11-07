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
import Artmoc2 from "../../Assets/Artmoc Logo.png";
import arrowreturn from "../../Assets/PAGE ARROWS/arrow return (in use).png";
import CryptoArtOne from "../../Assets/CryptoArts/IMG_7107_Original (1).png"
import CryptoArtTwo from "../../Assets/CryptoArts/IMG_7106_Original.PNG"
import CryptoArtThree from "../../Assets/CryptoArts/IMG_7108_Original (1).png"
import CryptoArtFour from "../../Assets/CryptoArts/b858b067-2af1-4b0a-b5f4-381e5933.jpg"
import DedewOne from "../../Assets/CryptoArts/1.jpg"
import DedewTwo from "../../Assets/CryptoArts/2.jpg"
import DedewThree from "../../Assets/CryptoArts/3.jpg"
import DedewFour from "../../Assets/CryptoArts/4.jpg"
import DedewFive from "../../Assets/CryptoArts/5.jpg"
import DedewSix from "../../Assets/CryptoArts/6.jpg"
import imgCrypto from "../../Assets/CryptoArts/Cyrpto Art1.png"

const CryptoArts = () => {
  function kapatPencere() {
    window.close();
}

  return (
    <div className="div-container-body-iustration">
      {/* <div className="fixedtopleft-ws">
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
      </div> */}

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
        initialSlide={4}
      >
        {/* <p className='img-bottm'>Lorem picsum solar sit ahmet. lorem picsum</p>  */}
        <SwiperSlide>
          <img src={CryptoArtOne} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CryptoArtTwo} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CryptoArtThree} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CryptoArtFour} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DedewOne} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DedewTwo} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DedewThree} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DedewFour} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DedewFive} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DedewSix} alt="slide_image" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
        <p className="img-user">by NOSCETEİPSUM</p>
        <p className="img-bottm">Lorem picsum solar sit ahmet. lorem picsum</p>
        <div className="image-illu">
          <img src={imgCrypto} alt="" />
        </div>
        <a
      href="#"
      onClick={kapatPencere}>
        <div className="arrow-turn">
            <img src={arrowreturn} alt="" />
        </div>
        </a>
      </Swiper>
      </div>
 
  );
};

export default CryptoArts;
