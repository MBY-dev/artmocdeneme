import React from "react";
import "./AboutArtmoc.css";
import pageflow3 from "./../Assets/pageflow3.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
// import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
// import twitteruse from "./../Assets/Social/twitter (in use).png";
// import aboutText from "./../Assets/aboutArtmoc/About ARTMOC Text.png"
import aboutTittle from "./../Assets/aboutArtmoc/About ARTMOC Title.png"
import aboutMonster from "./../Assets/aboutArtmoc/MONSTER.png"
import nextPage from "./../Assets/newsPage/arrow forward (hidden).png"
import Artmoc2 from "./../Assets/Artmoc Logo.png"
import "../router/Router"
import { useNavigate } from "react-router-dom";


const AboutArtmoc = () => {
  const navigate = useNavigate();
  return (
    
    <div id = "frame_about"className="div-container-body-aboutartmoc">
     {/* <div className="fixedtopleft-about">
            <a href="#frame_art">Art</a>
          </div>
          <div className="fixedtopright-about">
            <a href="#frame_design">Design</a>
          </div>
          <div className="fixeddownleft-about">
            <a href="#frame_about">Info</a>
          </div>
          <div className="fixeddownright-about">
             <div className="social-right-down-about">
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
          </div>   */}
          {/* <div className="leftscroll-about">
          <img src={pageflow3} alt="pageflow3" />
        </div> */}

      <div  className="about-artmoc-container">
        
        <div className="about-tittle-text">
         <div className="about-header">
         <img src={aboutTittle} alt="Instagram" />
         <div  className="about-write">
          <p >Artmoc is a production company focused on art and desıgn. the company aims to provıde ıts clıents wıth creatıve and ınnovatıve solutıons based on extensıve research of the sector. by workıng wıth partners to develop goal-orıented and effectıve strategıes taılored to theır clıent's needs. artmoc elevates the brand value ıt works on the next level wıth a team of talented artısts and desıgners from all around the world. artmoc acts as a creatıve brıdge to brıng envısıoned projects to lıfe ın the future</p>
          <img   onClick={() => navigate("/Teams")} src={nextPage} alt="nextPage"  />
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
