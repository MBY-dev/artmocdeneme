import React from "react";
import "./../Pages/Artmoc.css";
import pageflow1 from "./../Assets/pageflow1.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png"

const Artmoc = () => {
  return (
   
    <div id="frame_artmoc" className="div-container-body-artmoc">
       <div className="bacground-deneme" >
      <div className="fixedtopleft-artmoc">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-artmoc">
        <a href="#frame_design">Design</a>
      </div>
      <div className="fixeddownleft-artmoc">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-artmoc">
        <div className="social-right-down-artmoc">
          <a href="/">
            <img src={twitterhidden} alt="Twitter" />
          </a>
          <a href="/">
            <img src={instagramhidden} alt="Instagram" />
          </a>
        </div>
        <div>
          <a href="#frame_contact">Contact</a>
        </div>
      </div>
      {/* <div className="leftscroll-moc">
        <img src={pageflow1} alt="pageflow1" />
      </div> */}
      <div>
      <img className="artmoc-global" src={Artmoc2} alt=""  />
    </div>
    </div>
    </div>
  );
};

export default Artmoc;
