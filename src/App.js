import './App.css';
import { useEffect } from 'react';
import AboutArtmoc from './Pages/AboutArtmoc';
import Art from './Pages/Art';
import Artmoc from './Pages/Artmoc';
import ContactUs from './Pages/ContactUs';
import Design from './Pages/Design';
import IIIustration from './Pages/IIIustration';
import News from './Pages/News';
import Team from './Pages/Team';
import WithWithout from './Pages/WithWithout';
import { useState } from 'react';
import AboutLine from './Pages/AboutLine';
import DesignLine from './Pages/DesignLine';
import Partner from './Pages/Partner';
import Artmoc2 from "./Assets/Artmoc Logo.png"
import instagram from "./Assets/Social/instagram (hidden).png"
import twitter from "./Assets/Social/twitter (hidden).png"
import lin from "./Assets/contactUs/Social Media/linkedin (hidden).png"
import discord from "./Assets/contactUs/Social Media/discord (hidden).png"
import youtube from "./Assets/contactUs/Social Media/youtube (hidden).png"
import uparrow from  "./Assets/PAGE ARROWS/arrow up (hidden).png"

function App() {
  return (
    <div className="App">
      <Artmoc />
         <News />  
       <AboutArtmoc />
       { <IIIustration />   }
        { <Team />   }
       <AboutLine />
        <Art  /> 
      {/* <IIIustration />  */}
        <Design />  
        <DesignLine />
       <WithWithout /> 
       < Partner/>
      
        <ContactUs />
        <div className='cont-footer'>
        <img className='global-img' src={Artmoc2} alt="" />
        <div className='flex-social'>
        <img  className="flex-icon" src= {youtube} alt="" />
        <img  className="flex-icon" src= {lin} alt="" />
        <img  className="flex-icon1" src= {discord} alt="" />
        <img  className="flex-icon" src= {instagram} alt="" />
        <img  className="flex-icon" src= {twitter} alt="" />
        </div>
        <p>COPYRIGHT &copy; ARTMOC LTD. ŞTİ.</p>
        <div className='up-arrow'>
          <img src={uparrow} alt="" />
        </div>
        </div>
    </div>
  );
}

export default App;
