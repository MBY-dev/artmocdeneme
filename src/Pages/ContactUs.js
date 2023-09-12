import React from "react";
import "./ContactUs.css";
import pageflow7 from "./../Assets/pageflow7.png";
import instagramhidden from "./../Assets/Social/instagram (hidden).png";
import instagramuse from "./../Assets/Social/instagram (in use).png";
import twitterhidden from "./../Assets/Social/twitter (hidden).png";
import twitteruse from "./../Assets/Social/twitter (in use).png";
import contact from "./../Assets/contactUs/Social Media/call (hidden).png"
import Artmoc2 from "./../Assets/Artmoc Logo.png"
import { useState } from "react";

const ContactUs = () => {
  const [activeSection, setActiveSection] = useState('');

  const toggleContent = (section) => {
    if (activeSection === section) {
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="div-container-body">
      <div className="leftscroll-cu">
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
            <img src={contact} alt="contanct" />
          </a>
         
        </div>
        <div class="c">
          <a href="#frame_contact">Contact</a>
        </div>
      </div>
      <div className="container2-position">
        <div className="container2">
        <div className="deneme2-us">
          <div
            className={`section left-section ${activeSection === 'get-service' ? 'active' : ''}`}
            onClick={() => toggleContent('get-service')}
          >
            <h3>Get Service</h3>
          </div>
          
          <div className={`content2 ${activeSection === 'get-service' ? 'active' : ''}`}>
            {activeSection === 'get-service' && (
              <>
                <div className="input-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Mail Address" />
                </div>
                <div className="input-group">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div className="input-group">
                  <button className="submit-button">Submit</button>
                </div>
              </>
            )}
          </div>
          </div>
          <div className="deneme3-us">
          <div
            className={`section right-section ${activeSection === 'join-us' ? 'active' : ''}`}
            onClick={() => toggleContent('join-us')}
          >
            <h3>Join Us</h3>
          </div>
          <div className={`content2 ${activeSection === 'join-us' ? 'active' : ''}`}>
            {activeSection === 'join-us' && (
              <>
                <div className="input-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Mail Address" />
                </div>
                <div className="input-group">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div className="input-group">
                  <button className="submit-button">Submit</button>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
      <div>
      <img className="artmoc-global" src={Artmoc2} alt=""  />
    </div>
    </div>
  );
};

export default ContactUs;