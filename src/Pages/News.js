import React from "react";
import newstittle from "./../Assets/newsPage/NEWS TITLE.png";
import newsArrow from "./../Assets/newsPage/arrow forward (hidden).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png";

import "./News.css";
const News = () => {
  return (
    <div className="div-container-body-news">
      <section>
        {/* <div className="leftscroll-news">
          <img src={pageflow2} alt="pageflow" />
        </div> */}
        {/* <div className="fixedtopleft-news">
          <a href="#frame_art">Art</a>
        </div>
        <div className="fixedtopright-news">
          <a href="#frame_design">Design</a>
        </div>
       
       
        <div className="fixeddownleft-news">
          <a href="#frame_about">Info</a>
        </div>
        <div className="fixeddownright-news">
          <div className="social-right-down-news">
            <a href="/" about="Twitter">
              <img src={twitterhidden} alt="Twitter" />
            </a>
            <a href="/" about="Instagram">
              <img src={instagramhidden} alt="Instagram" />
            </a>
          </div>
          <div>
            <a href="#frame_contact">Contact</a>
          </div>
        </div> */}
       
        <div className="news-frame-newstittle">
          <img src={newstittle} alt="NEWS" />
        </div>
        <div className="news-user">
        <p>News</p>
        </div>
        <div className="container-news">
          <table>
            <img src={newsArrow} alt=""></img>
          </table>
          <p>
            LOREM İPSUM DOLAR PIT AHMET. CONSECTETUAR ADIPISHING ELİT, SED DIAM
            NONUMY NISH AUMID LEFKOŞA MBARDE
          </p>
        </div>
      </section>
      <div>
        <img className="artmoc-global" src={Artmoc2} alt="" />
      </div>
    </div>
  );
};

export default News;
