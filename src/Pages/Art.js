import React from "react";
import pageflow4 from "./../Assets/pageflow4.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";  
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";     
import twitteruse from "./../Assets/Social/twitter (in use).png";
import animation from "./../Assets/art/Animation.png";
import cryptoart from "./../Assets/art/CyrptoArt.png";
import frame from "./../Assets/art/FRAME.png";
import illustration from "./../Assets/art/Illustration.png";
import otherarts from "./../Assets/art/OtherArts.png";
import IIIustration from "./IIIustration";
import animation1 from "../Assets/art/animation1.png"
import Artmoc2 from "./../Assets/Artmoc Logo.png"

import "./Art.css";
import { Router } from "react-router-dom";
const Art = () => {
  return (
    
    <div className="div-container-body-art">
        <div className="leftscroll-art">
          <img src={pageflow4} alt="pageflow" />
        </div>
        <div className="fixedtopleft-art">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-art">
          <a href="#frame_design">Design</a>
        </div>
        <div className="fixeddownleft-art">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-art">
          <div class="social-right-down-art">
            <a href="#">
              <img src={twitterhidden} alt="Twitter" />
            </a>
            <a href="#">
              <img src={instagramhidden} alt="Instagram" />
            </a>
          </div>
          <div className="c">
            <a href="#frame_contact">Contact</a>
          </div>
        </div>
        <div className="grid-container">
        <div className="grid-item">
    <div className="content-wrapper">
      <img src={animation1} alt="pageflow" />
        <p>Illustration</p>
    </div>
  </div>
  <div class="grid-item">
    <div className="content-wrapper">
      <img src={animation1} alt="pageflow" />
        <p>Animation</p>
    </div>
  </div>
  <div class="grid-item">
    <div className="content-wrapper">
      <img src={animation1} alt="pageflow" />
        <p>CyrptoArt</p>
    </div>
  </div>
  <div class="grid-item">
    <div className="content-wrapper">
      <img src={animation1} alt="pageflow" />
        <p>OtherArts</p>
    </div>
  </div>
</div>
<div>
      <img className="artmoc-global" src={Artmoc2} alt=""  />
    </div>
    </div>


  );
};


export default Art;

