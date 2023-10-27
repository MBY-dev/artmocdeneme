import React from "react";
import ArtAnimation from "../Assets/Illustration/All Seeing The Eye (Cover).png"
import Artmoc2 from "./../Assets/Artmoc Logo.png";
import "./Art.css";
import { useNavigate } from "react-router-dom";
import AnimationArt from "../Assets/art/Brain(cover)-1.png"
import CryptoArt from "../Assets/art/OneBlackHole(cover).jpg"
import OtherArt from "../Assets/art/goat1(withoutlogo).png"
import Global2 from "./../Assets/aboutArtmoc/Artmoc Website_Diğer Sayfalar iç.png"
import { Link } from "react-router-dom";

const Art = () => {
  const navigate = useNavigate();
  // function handleClick(route) {
  //   navigate(route);
  // }
  return (
    <div id="frame_art"  className="div-container-body-art">
       {/* <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-svg" src={Global2} alt="" style={{ width: "100%" }}  />
          </div>  */}

      {/* <div className="leftscroll-art">
        <img src={pageflow4} alt="pageflow" />
      </div> */}
      {/* <div className="fixedtopleft-art">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-art">
        <a href="#frame_design">Design</a>
      </div>
      <div className="fixeddownleft-art">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-art">
        <div className="social-right-down-art">
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

      <div className="grid-container">
        {/* <img  className="art-header-img" src={ArtHeader} alt="" /> */}
        <p className="art-header">Art</p>
        <div className="grid-item">
      <Link
         className="content-wrapper"
         to="/illustration"
       target="_blank"
         rel="noopener"
          >
        <img src={ArtAnimation} alt="pageflow" />
       <p>Illustration</p>
      </Link>
        </div>
        <div className="grid-item">
      <Link
         className="content-wrapper"
         to="/animation"
       target="_blank"
         rel="noopener"
          >
        <img src={AnimationArt} alt="pageflow" />
       <p>Animation</p>
      </Link>
        </div>
        <div className="grid-item">
      <Link
         className="content-wrapper"
         to="/cryptoArt"
       target="_blank"
         rel="noopener"
          >
        <img src={CryptoArt} alt="pageflow" />
       <p>CryptoArt</p>
      </Link>
        </div>
        <div className="grid-item">
      <Link
         className="content-wrapper"
         to="/otherarts"
       target="_blank"
         rel="noopener"
          >
        <img src={OtherArt} alt="pageflow" />
       <p>OtherArts</p>
      </Link>
        </div>
      </div>
      <div>
        <img className="artmoc-global" src={Artmoc2} alt="" />
      </div>
    </div>
  );
};

export default Art;
