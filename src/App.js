import "./App.css";
import AboutArtmoc from "./Pages/AboutArtmoc";
import Art from "./Pages/Art";
import Artmoc from "./Pages/Artmoc";
import ContactUs from "./Pages/ContactUs";
import Design from "./Pages/Design";
import News from "./Pages/News";
import Team from "./Pages/Team";
import WithWithout from "./Pages/WithWithout";
import AboutLine from "./Pages/AboutLine";
import DesignLine from "./Pages/DesignLine";
import Partner from "./Pages/Partner";
import Artmoc2 from "./Assets/Artmoc Logo.png";
import instagram from "./Assets/Social/instagram (hidden).png";
import twitter from "./Assets/Social/twitter (hidden).png";
import contact from "./Assets/contactUs/Social Media/call (hidden).png";

import lin from "./Assets/contactUs/Social Media/linkedin (hidden).png";
import gmail from "./Assets/contactUs/Social Media/gmail4.png";
import uparrow from "./Assets/PAGE ARROWS/arrow up (hidden).png";
import İllu from "./Pages/ArtPages/IIIustration"
import { useEffect } from "react";

function App() {

  return (
    <div className="App">
      <Artmoc />
      <AboutArtmoc />
      <AboutLine />
      <Art />
      <Design />
      <DesignLine />
      <WithWithout />
      <Partner />
      <ContactUs />
      <div className="cont-footer">
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
        <div>
          <a href="#frame_contact">Contact</a>
        </div>
      </div>
      {/* <div className="leftscroll-moc">
        <img src={pageflow1} alt="pageflow1" />
      </div> */}
      
    </div>
        <img className="global-img" src={Artmoc2} alt="" />
        <div className="flex-social">
         <a href=""> <img className="flex-icon" src={contact} alt="" style={{transform: "rotate(313deg)"}} /> </a>
         <a href="https://www.linkedin.com/company/artmoc/" target="_blank"> <img className="flex-icon" src={lin} alt="" /></a>
         <a href="mailto:info@artmoc.io"> <img className="flex-icon1" src={gmail}  alt="" /></a>
          <a href="https://instagram.com/artmoc.io?igshid=MzRlODBiNWFlZA==" target="_blank"><img className="flex-icon" src={instagram} alt="" /></a>
         <a href="https://x.com/artmoc_io?s=21" target="_blank"> <img className="flex-icon" src={twitter} alt="" /></a>
        </div>
        <p>COPYRIGHT &copy; ARTMOC LTD. ŞTİ.</p>
        <a href="#frame_artmoc">
        <div className="up-arrow">
          <img src={uparrow} alt="" />
        </div>
        </a>
      </div>
    </div>
  );
}

export default App;
