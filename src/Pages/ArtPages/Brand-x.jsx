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
import imgillu from "../../Assets/Design/DesingHeader/Branding.png";
import Artmoc2 from "../../Assets/Artmoc Logo.png";
import arrowreturn from "../../Assets/PAGE ARROWS/arrow return (in use).png";
import BrandOne from "../../Assets/Design/brandıng/artstudio.jpg"
import BrandTwo from "../../Assets/Design/brandıng/musicset.jpg"
import BrandThree from "../../Assets/Design/brandıng/neidübelirsiz behance-02.jpg"
import BrandFour from "../../Assets/Design/brandıng/owen.jpg"
import BrandFive from "../../Assets/Design/brandıng/tanık_küçük.png"

const Brand = () => {
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
        initialSlide={2}
      >
        {/* <p className='img-bottm'>Lorem picsum solar sit ahmet. lorem picsum</p>  */}
        <SwiperSlide>
          <img src={BrandOne} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BrandThree} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BrandTwo} alt="slide_image" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={BrandFour} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BrandFive} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
        <p className="img-user">by NOSCETEİPSUM</p>
        {/* <p className="img-bottm">Lorem picsum solar sit ahmet. lorem picsum</p> */}
        <div className="image-illu">
          <img src={imgillu} alt="" />
        </div>
        <a
      href={() => false}
      onClick={kapatPencere}>
        <div className="arrow-turn">
            <img src={arrowreturn} alt="" />
        </div>
        </a>
      </Swiper>
    </div>
  );
};

export default Brand;
