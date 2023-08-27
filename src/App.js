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
function App() {
  return (
    <div className="App">
      <Artmoc />
         <News />  
       <AboutArtmoc />
       <div className="FooterLine">GEÇİŞ EKLE</div>
        <Art  /> 
  
      {/* <IIIustration /> */}
        <Design />  
        <div className="FooterLine">GEÇİŞ EKLE</div> 
       <WithWithout /> 
      {/* { <Team /> 
      <IIIustration /> } */}
      {/* { <ContactUs />} */}
    </div>
  );
}

export default App;
