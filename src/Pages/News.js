import React from "react";
import pageflow2 from "./../Assets/pageflow2.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";
import newsframe from "./../Assets/newsPage/NEWS FRAME.png";
import newstittle from "./../Assets/newsPage/NEWS TITLE.png";
import newsArrow from "./../Assets/newsPage/arrow forward (hidden).png";

import "./News.css";
const News = () => {
  return (
    <div className="div-container-body-news">
      <section>
          <div className="leftscroll-news">
            <img src={pageflow2} alt="pageflow" />
          </div>
           <div className="fixedtopleft-news">
            <a href="#frame_art">Art</a>
          </div>
          <div className="fixedtopright-news">
            <a href="#frame_design">Design</a>
          </div> 
          <div  className="news-frame-newstittle">
            <img 
              src={newstittle}
              alt="NEWS"
            />
          </div>
          <div className="container-news">
           <table>
            <img src= {newsArrow}></img>
           </table>
           <p>LOREM İPSUM DOLAR PIT AHMET. CONSECTETUAR ADIPISHING ELİT, SED DIAM NONUMY NISH AUMID LEFKOŞA MBARDE</p>
          </div>
           <div className="fixeddownleft-news">
            <a href="#frame_about">Info</a>
          </div>
          <div className="fixeddownright-news">
            <div class="social-right-down-news">
              <a href="#">
                <img src={twitterhidden} alt="Twitter" />
              </a>
              <a href="#">
                <img src={instagramhidden} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="#frame_contact">Contact</a>
            </div> 
          </div>
      </section>
    </div>
  );
};

export default News;
