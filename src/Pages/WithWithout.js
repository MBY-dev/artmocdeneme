import React from "react";
import "./WithWithout.css";
import pageflow6 from "./../Assets/pageflow6.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";

import circles from "./../Assets/withWithout/CIRCLES.png"
import withText from "./../Assets/withWithout/WITH TEXT.png"
import withimg from "./../Assets/withWithout/WITH.png"
import withOuthText from "./../Assets/withWithout/WITHOUT TEXT.png"
import withOuthimg from "./../Assets/withWithout/WITHOUT.png"
import Artmoc2 from "./../Assets/Artmoc Logo.png"



const WithWithout = () => {
  const imageStyle = {
    left: '44%',
    // Diğer stil özellikleri buraya eklenebilir
  };
  return (
    <div className="div-container-body-without">
      
        <div className="leftscroll-ww">
          <img src={pageflow6} alt="pageflow" />
        </div>
        <div className="fixedtopleft-ww">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-ww">
          <a href="#frame_design">Design</a>
        </div>
        <div className="fixeddownleft-ww">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-ww">
          <div class="social-right-down-ww">
            <a href="#">
              <img src={twitterhidden} alt="Twitter" />
            </a>
            <a href="#">
              <img src={instagramhidden} alt="Instagram" />
            </a>
          </div>
          <div class="c">
            <a href="#frame_contact">Contact</a>
          </div>
        </div>
        <div class="container-ww">
    <div class="with-header">
      <header>With </header>
      <div class="content">
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
      </div>
    </div>
    <div class="without-header">
    <header>Without </header>
      <div class="content">
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
      </div>
    </div>
  </div>
  <div>
      <img className="artmoc-global" src={Artmoc2} alt="" />
    </div>
    </div>
  );
};

export default WithWithout;
