import React from "react";
import "./ContactUs.css";
import pageflow7 from "./../Assets/pageflow7.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";
import contactframe from "./../Assets/contactUs/FRAMES/CONTACT FRAME.png";
import submitframe from "./../Assets/contactUs/FRAMES/SUBMIT FRAME.png";
import yourmessageframe from "./../Assets/contactUs/FRAMES/YOUR MASSAGE FRAME.png";
import getService from "./../Assets/contactUs/IMAGES/Get Service.png";
import mailAdress from "./../Assets/contactUs/IMAGES/Mail Adress.png";
import name from "./../Assets/contactUs/IMAGES/Name.png";
import phoneNumber from "./../Assets/contactUs/IMAGES/Phone Number.png";
import submit from "./../Assets/contactUs/IMAGES/Submit.png";
import yourMessage from "./../Assets/contactUs/IMAGES/Your Message.png";
import jobPreferences from "./../Assets/contactUs/joinUs/JOB PREFERENCES.png";
import joinUs from "./../Assets/contactUs/joinUs/JOIN US.png";
import joinMailAdress from "./../Assets/contactUs/joinUs/MAIL ADRESS.png";
import joinName from "./../Assets/contactUs/joinUs/NAME.png";
import joinSubmit from "./../Assets/contactUs/joinUs/Submit.png";
import yourPortfolio from "./../Assets/contactUs/joinUs/YOUR PORTFOLIO LINK.png";
import artmocLtdSti from "./../Assets/contactUs/ARTMOC LTD. ŞTİ..png";
import contact from "./../Assets/contactUs/CONTACT.png";
import contactUsfalse from "./../Assets/contactUs/FALSE.png";
import contactUstrue from "./../Assets/contactUs/TRUE.png";

const ContactUs = () => {
  return (
    <div className="div-container-body">
      <div className="leftscroll">
        <img src={pageflow7} alt="pageflow" />
      </div>
      <div className="fixedtopleft-cu">
        <a href="#frame_art">Art</a>
      </div>
      <div className="fixedtopright-cu">
        <a href="#frame_design">Design</a>
      </div>

      <div className="fixeddownleft-cu">
        <a href="#frame_about">Info</a>
      </div>
      <div className="fixeddownright-cu">
        <div class="social-right-down-cu">
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
      <div class="container">
        <div class="section-contact-us">Contact US</div>
        <div class=""></div>
        <div class="section-left">

          <img className="contact-frame-left" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text" src={getService} alt="Get Service"/>
          </div>

        <div class="section-right">
          <img className="contact-frame-right" src={contactframe} alt="Contact Frame"/>
        <img className="Contact-frame-text-right" src={joinUs} alt="Joun Us"/>
        </div>
        <div class="section-left">
          <img className="contact-frame-left" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text" src={name} alt="Get Service"/>

          </div>
        <div class="section-right">
          <img className="contact-frame-right" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text-right" src={name} alt="Get Service"/>

          </div>
        <div class="section-left">
          <img className="contact-frame-left" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text" src={phoneNumber} alt="Get Service"/>

          </div>
        <div class="section-right">
          <img className="contact-frame-right" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text-right" src={jobPreferences} alt="Get Service"/>

          </div>
        <div class="section-left">
          <img className="contact-frame-left" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text" src={mailAdress} alt="Get Service"/>
          <img className="Contact-frame-true" src={contactUstrue} alt="Get Service"/>


          </div>
        <div class="section-right">
          <img className="contact-frame-right" src={contactframe} alt="Contact Frame"/>
          <img className="Contact-frame-text-right" src={mailAdress} alt="Get Service"/>
          <img className="Contact-frame-false" src={contactUsfalse} alt="Get Service"/>
          
          </div>
        <div class="section-left">
          <img className="yourmessage-frame-left" src={yourmessageframe} alt="Contact Frame"/>
          <img className="Contact-frame-text" src={yourMessage} alt="Get Service"/>

          </div>
        <div class="section-right">
          <img className="yourmessage-frame-right" src={yourmessageframe} alt="Contact Frame"/>
          <img className="Contact-frame-text-right" src={yourPortfolio} alt="Get Service"/>

          </div>
        <div class="section-left">
          <img className="submit-frame-left" src={submitframe} alt="Contact Frame"/>
          <img className="Contact-frame-text" src={submit} alt="Get Service"/>

          </div>
        <div class="section-right">
          <img className="submit-frame-right" src={submitframe} alt="Contact Frame"/>
          <img className="Contact-frame-text-right" src={submit} alt="Get Service"/>

          </div>


      </div>
    </div>
  );
};

export default ContactUs;
