import React from "react";
import "./WithWithout.css";
import pageflow6 from "./../Assets/pageflow6.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";

import circles from "./../Assets/withWithout/CIRCLES.png"
import withText from "./../Assets/withWithout/WITH TEXT.png"
import withimg from "./../Assets/withWithout/WITH.png"
import withOuthText from "./../Assets/withWithout/WITHOUT TEXT.png"
import withOuthimg from "./../Assets/withWithout/WITHOUT.png"



const WithWithout = () => {
  return (
    <div className="div-container-body-without">
      
        <div className="leftscroll">
          <img src={pageflow6} alt="pageflow" />
        </div>
        <div className="fixedtopleft-ww">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-ww">
          <a href="#frame_design">Design</a>
        </div>
        <div className="fixeddownleft-ww">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-ww">
          <div class="social-right-down-ww">
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
      <div className="container-with">

        <div class="with-section-left">
          <img className="with-img" src={withimg} alt="Get Service"/>
        </div>

        <div class="with-section-right">
          <img className="withouth-img" src={withOuthimg} alt="Get Service"/>
        </div>

        <div class="with-section-left">
          <img className="with-circles" src={circles} alt="Contact Frame"/>
          <img className="with-text" src={withText} alt="Get Service"/>
        </div>

        <div class="with-section-right">
          <img className="without-circles" src={circles} alt="Contact Frame"/>
          <img className="withouth-text" src={withOuthText} alt="Get Service"/>
        </div>

      </div>
    </div>
  );
};

export default WithWithout;
