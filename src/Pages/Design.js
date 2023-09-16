import React from "react";
import "./Design.css";
import pageflow5 from "./../Assets/pageflow5.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png";
import headerDesign from "../Assets/Design/DESIGN TITLE.png";

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
      </div>
      <div className="design-img">
        <img src={headerDesign} alt="" />
      </div>

      <div className="container">
        <div className="box">
          <h3>GRAPHİC</h3>
        </div>
        <div className="box">
          <h3>BRAND-X</h3>
        </div>
        <div className="box">
          <h3>UI&UX</h3>
        </div>
        <div className="box">
          <h3>INTERION</h3>
        </div>
        <div className="box">
          <h3>MOTION</h3>
        </div>
        <div className="box">
          <h3>GAME</h3>
        </div>
        <div className="box">
          <h3>CONSULT-</h3>
        </div>
        <div className="box">
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
