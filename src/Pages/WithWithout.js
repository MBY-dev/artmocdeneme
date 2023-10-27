import React from "react";
import "./WithWithout.css";
import Artmoc2 from "./../Assets/Artmoc Logo.png"
import With from "./../Assets/withWithout/WITH.png"
import Without from "./../Assets/withWithout/WITHOUT.png"
import Global2 from "./../Assets/aboutArtmoc/Artmoc Website_Diğer Sayfalar iç.png"
const WithWithout = () => {
  // const imageStyle = {
  //   left: '44%',
  //   // Diğer stil özellikleri buraya eklenebilir
  // };
  return (
    <div className="div-container-body-without">
        {/* <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-svg" src={Global2} alt="" style={{ width: "100%" }}  />
          </div>  */}
        {/* <div className="leftscroll-ww">
          <img src={pageflow6} alt="pageflow" />
        </div> */}
        {/* <div className="fixedtopleft-ww">
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
        </div> */}
        <div className="container-ww">
    <div className="with-header">
      <img src={With} alt="With" />
      <div className="content">
        <p>ARTMOC IS THERE FOR YOU WHEN YOU NEED IT, ALLOWING YOU TO GET RID OF FIXED EXPENSES</p>
        <p>IT OFFERS TRANSPARENT SERVICES WITH A NET PRICING POLICY, KEEPING YOU AWAY FROM SURPRISE COSTS</p>
        <p>WITH MANY TALENTED DESIGNERS AND BUSINESS PARTNERS SPECIALIZED IN THE DESIGN FIELD, ARTMOC PROVIDES YOU WITH THE HIGHEST QUALITY SERVICES</p>
        <p>ARTMOC MANAGES THE PROCESS ON YOUR BEHALF</p>
      </div>
    </div>
    <div className="without-header">
    <img src={Without} alt="Without" />
      <div className="content">
        <p>YOU WILL HAVE TO COVER FIXED EMPLOYEE EXPENSES (INSURANCE, TRANSPORTATION, MEALS, ETC.)</p>
        <p>YOU WILL STRUGGLE WITH LANGUAGE BARRIERS, TECHNICAL TERMS, AND PROCESS TRACKING, RESULTING IN A WASTE OF TIME</p>
        <p>YOU WILL HAVE TO PAY FOR 8 HOURS OF WORK FOR A DAILY 4-HOUR WORKER YOU WILL STRUGGLE WITH LANGUAGE BARRIERS, TECHNICAL TERMS, AND PROCESS TRACKING, RESULTING IN A WASTE OF TIME</p>
        <p>YOUR PROJECTS WILL BE LIMITED TO THE PERSPECTIVE OF THE WORKING DESIGNER</p>
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
