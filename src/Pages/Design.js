import React from "react";
import "./Design.css";
import pageflow5 from "./../Assets/pageflow5.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png";
import Deneme from "./../Assets/CryptoArts/3.jpg"
import headerDesign from "../Assets/Design/DESIGN TITLE.png";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import priting from "../Assets/Design/Printing/fin2.png"
import Consult from "../Assets/Design/Consult/Design Consulting-01 (1) ANA.png"
import Game from "../Assets/Design/Game/boardgame.png"
import İntro from "../Assets/Design/motion/İntro.mp4"
import interion from "../Assets/Design/Interion/IMG_3762.jpg"

const Design = () => {
  
  const navigate = useNavigate();
  return (
    <div  id= "frame_design" className="div-container-body-design">
      {/* <div className="leftscroll-d">
        <img src={pageflow5} alt="pageflow" />
      </div> */}
      {/* <div className="fixedtopleft-d">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-d">
        <a href="#frame_design">Design</a>
      </div>

      <div className="fixeddownleft-d">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-d">
        <div className="social-right-down-d">
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
      <div className="design-img">
        <img src={headerDesign} alt="" />
      </div>

      <div className="container">
        <div className="box"
         onClick={() => navigate("/graphic")}>
         <img  className="design-headerİmg" src={Deneme} alt="" />
          <h3>GRAPHİC</h3>
        </div>
        <div className="box"
         onClick={() => navigate("/brand")}>
          <img  className="design-headerİmg" src={Deneme} alt="" />
          <h3>BRAND-X</h3>
        </div>
        <div className="box"
        onClick={() => navigate("/uiux")}>
            <img  className="design-headerİmg" src={Deneme} alt="" />
          <h3>UI&UX</h3>
        </div>
        <div className="box"
        onClick={() => navigate("/intertion")}>
            <img  className="design-headerİmg" src={interion} alt="" />
          <h3>INTERION</h3>
        </div>
        <div className="box"
         onClick={() => navigate("/motion")}>
              <ReactPlayer
        url={İntro} // Video URL'sini proje içindeki yol ile ayarlayın
        playing={true} // Otomatik başlatma
        loop={true} // Video bitiminde tekrar başlatma
        muted={true} // Sesi kapatma (isteğe bağlı)
      />
          <h3>MOTION</h3>
        </div>
        <div className="box"
         onClick={() => navigate("/game")}>
            <img  className="design-headerİmg" src={Game} alt="" />
          <h3>GAME</h3>
        </div>
        <div className="box"
         onClick={() => navigate("/consult")}>
            <img  className="design-headerİmg" src={Consult} alt="" />
          <h3>CONSULT-</h3>
        </div>
        <div className="box"
         onClick={() => navigate("/priting")}>
            <img  className="design-headerİmg" src={priting} alt="" />
          <h3>PRINTING</h3>
        </div>
      </div>
      <div className="artmoc-global-d1">
        <img className="artmoc-global-d" src={Artmoc2} alt="" />
      </div>
    </div>
  );
};

export default Design;
