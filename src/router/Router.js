import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import IIIustration from "../Pages/ArtPages/IIIustration.jsx";
import Animation from "../Pages/ArtPages/Animation.jsx";
import CryptoArt from "../Pages/ArtPages/CryptoArts";
import ArtsOther from "../Pages/ArtPages/ArtsOther";
import Teams from "../Pages/Team"
import Art from "../Pages/Art"


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/art" element={<Art/>} />
      <Route path="/teams" element={<Teams/>} />
      <Route path="/illustration" element={<IIIustration />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/cryptoart" element={<CryptoArt />} />
      <Route path="/artsother" element={<ArtsOther />} />
    </Routes>
  );
}
