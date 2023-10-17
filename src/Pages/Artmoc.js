import React from "react";
import "./../Pages/Artmoc.css";
import pageflow1 from "./../Assets/pageflow1.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png"
import Global from "./../Assets/aboutArtmoc/artmoc intro.png"

const Artmoc = () => {
  return (
   
    <div id="frame_artmoc" className="div-container-body-artmoc">
       <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-intro" src={Global} alt="" style={{ width: "100%" }}  />
          </div> 
    <div>
    <img className="artmoc-global" src={Artmoc2} alt=""  />
  </div>
    </div>
   
  );
};

export default Artmoc;
