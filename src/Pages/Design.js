import React from "react";
import "./Design.css";
import Artmoc2 from "./../Assets/Artmoc Logo.png";
import Deneme from "./../Assets/CryptoArts/3.jpg"
import Brandx from "./../Assets/Design/brandıng/brandHeader.jpg"
import headerDesign from "../Assets/Design/DESIGN TITLE.png";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import priting from "../Assets/Design/Printing/fin2.png"
import GraphicHeader from "../Assets/Design/Graphix/GraphicHeader.jpg"
import Consult from "../Assets/Design/Consult/Design Consulting-01 (1) ANA.png"
import Game from "../Assets/Design/Game/boardgame.png"
import İntro from "../Assets/Design/motion/İntro.mp4"
import interion from "../Assets/Design/Interion/IMG_3762.jpg"
import Ui from "../Assets/Design/Uı/UX-vs-UI-Design.jpeg"
import MotionHeader from "../Assets/Design/motion/motionHeader.jpg"
import Global2 from "./../Assets/aboutArtmoc/Artmoc Website_Diğer Sayfalar iç.png"
import { Link } from "react-router-dom";

const Design = () => {
  
  const navigate = useNavigate();
  return (
    <div  id= "frame_design" className="div-container-body-design">
      {/* <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-svg" src={Global2} alt="" style={{ width: "100%" }}  />
          </div>  */}
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
        <div className="box">
        <Link
        to="/graphic"
      target="_blank"
        rel="noopener"
         > 
         <img  className="design-headerİmg" src={GraphicHeader } alt="" />
          <h3>GRAPHIC</h3>
          </Link>
        </div>
        <div className="box">
         <Link
         to="/brand"
       target="_blank"
         rel="noopener"
          > 
          <img  className="design-headerİmg" src={Brandx} alt="" />
          <h3>BRANDING</h3>
          </Link>
        </div>
        <div className="box">
        <Link
         to="/uiux"
       target="_blank"
         rel="noopener"
          >  
            <img  className="design-headerİmg" src={Ui} alt="" />
          <h3>UI & UX</h3>
          </Link>
        </div>
        <div className="box">
        <Link
         to="/intertion"
       target="_blank"
         rel="noopener"
          >  
            <img  className="design-headerİmg" src={interion} alt="" />
          <h3>INTERIOR</h3>
          </Link>
        </div>
        <div className="box">
        <Link
          to="/motion"
       target="_blank"
         rel="noopener"
          >  
            <img  className="design-headerİmg" src={MotionHeader} alt="" />
          <h3>MOTION</h3>
          </Link>
        </div>
        <div className="box">
        <Link
         to="/game"
       target="_blank"
         rel="noopener"
          >  
            <img  className="design-headerİmg" src={Game} alt="" />
          <h3>GAME</h3>
          </Link>
        </div>
        <div className="box">
           <Link
         to="/consult"
       target="_blank"
         rel="noopener"
          >  
            <img  className="design-headerİmg" src={Consult} alt="" />
          <h3>CONSULTING</h3>
          </Link>
        </div>
        {/* <div className="box">
        <Link
         to="/priting"
       target="_blank"
         rel="noopener"
          >  
            <img  className="design-headerİmg" src={priting} alt="" />
          <h3>PRINTING</h3>
          </Link>
        </div> */}
      </div>
      <div className="artmoc-global-d1">
        <img className="artmoc-global-d" src={Artmoc2} alt="" />
      </div>
    </div>
  );
};

export default Design;
