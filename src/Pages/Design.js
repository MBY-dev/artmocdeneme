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
      <section>
        <div className="leftscroll">
          <img src={pageflow5} alt="pageflow" />
        </div>
        <div className="fixedtopleft-d">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-d">
          <a href="#frame_design">Design</a>
        </div>

        <div className="container-d">
          <div className="img-d">
          <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={graphic} alt="graphic" />
          </div>
          <div className="img-d"> 
          <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={brand} alt="graphic" /></div>
          <div className="img-d"> 
          <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={uıx} alt="graphic" />
            </div>
          <div className="img-d"> 
          <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={interior} alt="graphic" />
            </div>
          <div className="img-d"> 
          <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={motion} alt="graphic" />
            </div>
          <div className="img-d">
             <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={game} alt="graphic" />
            </div>
          <div className="img-d">
             <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={consult} alt="graphic" />
            </div>
          <div className="img-d">
             <img className="frame-d" src={frame} alt="Frame" />
            <img className="text-d" src={printing} alt="graphic" />
            </div>
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
      </section>
    </div>
  );
};

export default Design;
