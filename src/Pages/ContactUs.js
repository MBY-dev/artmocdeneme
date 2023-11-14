import React, { useState } from "react";
import "./ContactUs.css";
import contact from "./../Assets/contactUs/Social Media/call (hidden).png";
import Artmoc2 from "./../Assets/Artmoc Logo.png";
import Global2 from "./../Assets/aboutArtmoc/Artmoc Website_Diğer Sayfalar iç.png"
const ContactUs = () => {
  const [activeSection, setActiveSection] = useState('');
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [message, setMessage] = useState("");

  const toggleContent = (section) => {
    if (activeSection === section) {
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z ]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^[0-9+/-]*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleMailAddressChange = (e) => {
    setMailAddress(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    // E-posta doğrulaması ekleyin
    if (!isValidEmail(mailAddress)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    // Form gönderme kodu buraya gelebilir
    alert("Form gönderildi!");
  };

  return (
    <div  id="frame_contact" className="div-container-body">
       {/* <div className="responsive-classname" style={{position: "absolute", width: "100%"} }>
        <img  className="art-global-svg" src={Global2} alt="" style={{ width: "100%" }}  />
          </div>  */}
      <h2>Contact Us</h2>
      {/* <img src={contact} alt="" className="phone" /> */}
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
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Mail Address"
                      value={mailAddress}
                      onChange={handleMailAddressChange}
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
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
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Mail Address"
                      value={mailAddress}
                      onChange={handleMailAddressChange}
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
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
