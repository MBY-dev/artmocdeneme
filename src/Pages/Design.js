import React from "react";
import "./Design.css";
import pageflow5 from "./../Assets/pageflow5.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";
import frame from "./../Assets/Design/FRAME.png"
import brand from "./../Assets/Design/Brand-.png"
import consult from "./../Assets/Design/Consult-.png"
import game from "./../Assets/Design/Game.png"
import graphic from "./../Assets/Design/Graphic.png"
import interior from "./../Assets/Design/Interior.png"
import motion from "./../Assets/Design/Motion.png"
import printing from "./../Assets/Design/Printing.png"
import uıx from "./../Assets/Design/UIxUX.png"

const Design = () => {
  return (
    <div className="div-container-body-design">
        <div className="leftscroll-d">
          <img src={pageflow5} alt="pageflow" />
        </div>
        <div className="fixedtopleft-d">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-d">
          <a href="#frame_design">Design</a>
        </div>

        <div className="fixeddownleft-d">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-d">

          <div class="social-right-down-d">
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
        <div class="container">
             <div class="box">
                <h3>GRAPHİC</h3>
             </div>
             <div class="box">
                <h3>BRAND-X</h3>
             </div>
             <div class="box">
                <h3>UI&UX</h3>
             </div>
             <div class="box">
                <h3>INTERION</h3>
             </div>
             <div class="box">
                <h3>MOTION</h3>
             </div>
             <div class="box">
                <h3>GAME</h3>
             </div>
             <div class="box">
                <h3>CONSULT-</h3>
             </div>
             <div class="box">
                <h3>PRINTING</h3>
             </div>
  </div>
    </div>
  );
};

export default Design;
