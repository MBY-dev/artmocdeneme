import React from "react";
import pageflow4 from "./../Assets/pageflow4.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import ArtHeader from "./../Assets/art/Art.png"
import animation1 from "../Assets/art/animation1.png";
import ArtAnimation from "../Assets/Illustration/All Seeing The Eye (Cover).png"
import Artmoc2 from "./../Assets/Artmoc Logo.png";
import "./Art.css";
import { useNavigate } from "react-router-dom";
import AnimationArt from "../Assets/art/Brain(cover)-1.png"

const Art = () => {
  const navigate = useNavigate();
  // function handleClick(route) {
  //   navigate(route);
  // }
  return (
    <div id="frame_art"  className="div-container-body-art">
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
          <div
            className="content-wrapper"
            onClick={() => navigate("/illustration")}
          >
            <img src={ArtAnimation} alt="pageflow" />
            <p>Illustration</p>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="content-wrapper"
            onClick={() => navigate("/animation")}
          >
            <img src={AnimationArt} alt="pageflow" />
            <p>Animation</p>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="content-wrapper"
            onClick={() => navigate("/cryptoart")}
          >
            <img src={animation1} alt="pageflow" />
            <p>CyrptoArt</p>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="content-wrapper"
            onClick={() => navigate("/otherarts")}
          >
            <img src={animation1} alt="pageflow" />
            <p>OtherArts</p>
          </div>
        </div>
      </div>
      <div>
        <img className="artmoc-global" src={Artmoc2} alt="" />
      </div>
    </div>
  );
};

export default Art;
