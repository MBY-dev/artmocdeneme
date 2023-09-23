import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import IIIustration from "../Pages/ArtPages/IIIustration.jsx";
import Animation from "../Pages/ArtPages/Animation.jsx";
import CryptoArt from "../Pages/ArtPages/CryptoArts";
import ArtsOther from "../Pages/ArtPages/ArtsOther";
import Teams from "../Pages/Team"
import Art from "../Pages/Art"
import Graphic from "../Pages/ArtPages/Graphic"
import Brand from "../Pages/ArtPages/Brand-x"
import UiUx from "../Pages/ArtPages/Uı&Ux"
import Interion from "../Pages/ArtPages/Interion"
import Motion from "../Pages/ArtPages/Motion"
import Game from "../Pages/ArtPages/Game"
import Consult from "../Pages/ArtPages/Consult"
import Priting from "../Pages/ArtPages/Printing"


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/art" element={<Art/>} />
      <Route path="/teams" element={<Teams/>} />
      <Route path="/illustration" element={<IIIustration />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/cryptoart" element={<CryptoArt />} />
      <Route path="/otherarts" element={<ArtsOther />} />
      <Route path="/graphic" element={<Graphic />} />
      <Route path="/brand" element={<Brand/>} />
      <Route path="/uiux" element={<UiUx/>} />
      <Route path="/motion" element={<Motion/>} />
      <Route path="/intertion" element={<Interion/>} />
      <Route path="/game" element={<Game/>} />
      <Route path="/consult" element={<Consult/>} />
      <Route path="/priting" element={<Priting/>} />
    </Routes>
  );
}
