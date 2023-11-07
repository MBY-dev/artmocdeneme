import React from "react";
import "./../Pages/Artmoc.css";
import Artmoc2 from "./../Assets/Artmoc Logo.png"
import Global from "./../Assets/aboutArtmoc/artmoc intro.png"


const Artmoc = () => {
  return (
   
    <div id="frame_artmoc" className="div-container-body-artmoc">
       <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-intro" src={Global} alt="" style={{ width: "96%" , height:"97vh"}}  />
          </div> 
    <div>
    <img className="artmoc-global" src={Artmoc2} alt=""  />
  </div>
    </div>
   
  );
};

export default Artmoc;
