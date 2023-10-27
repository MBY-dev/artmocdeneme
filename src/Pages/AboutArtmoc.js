import React from "react";
import "./AboutArtmoc.css";
import aboutTittle from "./../Assets/aboutArtmoc/About ARTMOC Title.png"
import aboutMonster from "./../Assets/aboutArtmoc/MONSTER.png"
import nextPage from "./../Assets/newsPage/arrow forward (hidden).png"
import Artmoc2 from "./../Assets/Artmoc Logo.png"
import "../router/Router"
import Global2 from "./../Assets/aboutArtmoc/Artmoc Website_Diğer Sayfalar iç.png"
import { Link } from "react-router-dom";



const AboutArtmoc = () => {

  return (
    
    <div id = "frame_about"className="div-container-body-aboutartmoc">
       {/* <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-svg" src={Global2} alt="" style={{ width: "100%" }}  />
          </div>  */}
      <div  className="about-artmoc-container">
      <div className="about-artmoc-header">
        <p>About  Artmoc</p>
        </div>
        <div className="about-tittle-text">
         <div className="about-header">
         <img src={aboutTittle} alt="Instagram" />
         <div  className="about-write">
          <p >Artmoc is a production company focused on art and desıgn. the company aims to provıde ıts clıents wıth creatıve and ınnovatıve solutıons based on extensıve research of the sector. by workıng wıth partners to develop goal-orıented and effectıve strategıes taılored to theır clıent's needs. artmoc elevates the brand value ıt works on the next level wıth a team of talented artısts and desıgners from all around the world. artmoc acts as a creatıve brıdge to brıng envısıoned projects to lıfe ın the future</p>
          <Link
  to="/Teams" // Hedef sayfanın URL'sini buraya ekleyin
   target="_blank" // Yeni sekmede açmak için
   rel="noopener noreferrer" // Güvenlik için
>
  <img src={nextPage} alt="nextPage" />
</Link>
          </div> 
          </div> 
          
        </div>
        
        <div className="artmoc-monster"> 
            <img
              className="img-aboutmonster"
              src={aboutMonster}
              alt="About Monster"
            />
        </div>
      </div>
      <div>
      <img className="artmoc-global" src={Artmoc2} alt=""  />
    </div>
    </div>
  );
};

export default AboutArtmoc;
