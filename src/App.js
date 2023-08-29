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
function App() {
  return (
    <div className="App">
      <Artmoc />
         <News />  
       <AboutArtmoc />
       <Team /> 
       <AboutLine />
        <Art  /> 
      {/* <IIIustration /> */}
        <Design />  
        <DesignLine />
       <WithWithout /> 
       < Partner/>
       
       {/* <IIIustration />   */}
        <ContactUs />
    </div>
  );
}

export default App;
