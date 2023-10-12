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
import imgillu from "../../Assets/OtherArts/Other Arts (1).png";
import Artmoc2 from "../../Assets/Artmoc Logo.png";
import arrowreturn from "../../Assets/PAGE ARROWS/arrow return (in use).png";
import { Link, useNavigate } from "react-router-dom";
import OtherArtsOne from "../../Assets/OtherArts/1.1.png"
import OtherArtsTwo from "../../Assets/OtherArts/3.png"
import OtherArtsThree from "../../Assets/OtherArts/1692736542295.jpg"
import OtherArtsFour from "../../Assets/OtherArts/1692736502423.jpg"
import OtherArtsFive from "../../Assets/OtherArts/1692736685292.JPG"
import OtherArtsSeven from "../../Assets/OtherArts/IMG_0114.JPG"
import OtherArtsEight from "../../Assets/OtherArts/sketches.jpg"
import OtherArtsNine from "../../Assets/OtherArts/sketches2.jpg"
import OtherArtsTen from "../../Assets/OtherArts/sketches3.jpg"
import OtherArtsEleven from "../../Assets/OtherArts/sketches4.jpg"
import OtherArtsTwelve from "../../Assets/OtherArts/sun(cover).png"
import OtherArtsThird from "../../Assets/OtherArts/UNADJUSTEDNONRAW_thumb_10f0.jpg"

const ArtsOther = () => {
  const navigate = useNavigate();
  function kapatPencere() {
    window.close();
}
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
        initialSlide={5}
      >
        {/* <p className='img-bottm'>Lorem picsum solar sit ahmet. lorem picsum</p>  */}

        <SwiperSlide>
          <img src={OtherArtsOne} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsTwo} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsThree} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsFour} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsFive} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsSeven} alt="slide_image"  style={{ objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsEight} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsNine} alt="slide_image"  style={{ objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsTen} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsEleven} alt="slide_image"  style={{ objectFit: 'cover' }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsTwelve} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OtherArtsThird} alt="slide_image" style={{ objectFit: 'cover' }} />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
        <p className="img-user">by NOSCETEİPSUM</p>
        <p className="img-bottm">Lorem picsum solar sit ahmet. lorem picsum</p>
        <div className="image-illu">
          <img src={imgillu} alt="" />
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

export default ArtsOther;
