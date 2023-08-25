import React from 'react'
import "./IIIustration.css";
import pageflow5 from "./../Assets/pageflow5.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
const IIIustration = () => {
  return (
    <div className="div-container-body-iustration">

      İLLU
      <section>
      <div className="leftscroll">
          <img src={pageflow5} alt="pageflow" />
        </div>
        <div className="fixedtopleft-illu">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-illu">
          <a href="#frame_design">Design</a>
        </div>
  
        <div className="fixeddownleft-illu">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-illu">
          <div class="social-right-down-illu">
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
        <div className="slider-container">
            <div className="slide">
              <h1>1</h1>
            </div>
            <div className="slide">
              <h1>2</h1>
            </div>
            <div className="slide">
              <h1>3</h1>
            </div>
        </div>
      </section>
    
    
    </div>
  )
}

export default IIIustration