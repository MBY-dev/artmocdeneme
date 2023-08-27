import React from 'react'
import "./IIIustration.css";
import illustration from "../Assets/Illustration/Rectangle 2.3.png"
import pageflow5 from "./../Assets/pageflow5.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
const IIIustration = () => {
  
  
  return (
    <div className="div-container-body-iustration">
      {/* <div className="leftscroll-illu">
          <img src={pageflow5} alt="pageflow" />
        </div> */}
        <div className="fixedtopleft-illu">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-illu">
          <a href="#frame_design">Design</a>
        </div>
  
        <div className="fixeddownleft-illu">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-illu">
          <div className="social-right-down-illu">
            <a href="#">
              <img src={twitterhidden} alt="Twitter" />
            </a>
            <a href="#"> 
              <img src={instagramhidden} alt="Instagram" />
            </a>
          </div>
          <div className="c">
            <a href="#frame_contact">Contact</a>
          </div>
        </div>
      <div className='gallery'>
        <div className='gallery-container'>
          <img className='gallery-item gallery-item-2' src={illustration} data-index="2" />
          <img className='gallery-item gallery-item-3' src={illustration} data-index="3" />
          <img className='gallery-item gallery-item-4' src={illustration} data-index="4" />
        </div>
        <div className='gallery-contorls'>
          
        </div>
      </div>
       
    </div>
  )
}

export default IIIustration
/*import React, { useState } from 'react';
import "./IIIustration.css";
import illustration from "../Assets/Illustration/Rectangle 2.3.png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";

const IIIustration = () => {
  const initialImages = Array.from({ length: 5 }, (_, index) => index + 1);
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(Math.floor(images.length / 2));

  const handleGalleryItemClick = (index) => {
    const middleIndex = Math.floor(images.length / 2);

    if (index === middleIndex) return;

    const offset = middleIndex - index;
    const newImages = [...images];

    if (offset > 0) {
      for (let i = 0; i < offset; i++) {
        const shiftedImage = newImages.shift();
        newImages.splice(images.length - 1, 0, shiftedImage);
      }
    } else {
      for (let i = 0; i > offset; i--) {
        const poppedImage = newImages.pop();
        newImages.splice(0, 0, poppedImage);
      }
    }

    setImages(newImages);
    setCurrentIndex(middleIndex);
  };

  const moveGallery = (direction) => {
    const newImages = [...images];
    const middleIndex = Math.floor(images.length / 2);

    if (direction === "left") {
      const shiftedImage = newImages.shift();
      newImages.splice(middleIndex, 0, shiftedImage);
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else if (direction === "right") {
      const poppedImage = newImages.pop();
      newImages.splice(middleIndex, 0, poppedImage);
      setCurrentIndex((currentIndex + 1) % images.length);
    }

    setImages(newImages);
  };

  return (
    <div className="div-container-body-iustration">
      <div className="fixedtopleft-illu">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-illu">
        <a href="#frame_design">Design</a>
      </div>
      <div className="fixeddownleft-illu">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-illu">
        <div className="social-right-down-illu">
          <a href="#">
            <img src={twitterhidden} alt="Twitter" />
          </a>
        </div>
        <div className="c">
          <a href="#frame_contact">Contact</a>
        </div>
      </div>
      <div className='gallery'>
        <div className='gallery-container'>
          {images.map((_, index) => (
            <img
              key={index}
              className={`gallery-item gallery-item-${index + 1} ${currentIndex === index ? 'center' : ''}`}
              src={illustration}
              data-index={index + 1}
              alt={`Image ${index + 1}`}
              onClick={() => handleGalleryItemClick(index)}
            />
          ))}
        </div>
        <div className='gallery-controls'>
          <button onClick={() => moveGallery("left")}>Move Left</button>
          <button onClick={() => moveGallery("right")}>Move Right</button>
        </div>
      </div>
    </div>
  );
}

export default IIIustration; */