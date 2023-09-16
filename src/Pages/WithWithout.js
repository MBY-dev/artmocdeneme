import React from "react";
import "./WithWithout.css";
import pageflow6 from "./../Assets/pageflow6.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png"

const WithWithout = () => {
  // const imageStyle = {
  //   left: '44%',
  //   // Diğer stil özellikleri buraya eklenebilir
  // };
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
          <div className="social-right-down-ww">
            <a href="/">
              <img src={twitterhidden} alt="Twitter" />
            </a>
            <a href="/">
              <img src={instagramhidden} alt="Instagram" />
            </a>
          </div>
          <div className="c">
            <a href="#frame_contact">Contact</a>
          </div>
        </div>
        <div className="container-ww">
    <div className="with-header">
      <header>With </header>
      <div className="content">
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yaz</p>
      </div>
    </div>
    <div className="without-header">
    <header>Without </header>
      <div className="content">
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
