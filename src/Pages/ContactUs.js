import React, { useState } from "react";
import "./ContactUs.css";
import Artmoc2 from "./../Assets/Artmoc Logo.png";

const ContactUs = () => {
  const [activeSection, setActiveSection] = useState('');

  // Hizmet Al bölümü için state değişkenleri
  const [getServiceName, setGetServiceName] = useState("");
  const [getServicePhoneNumber, setGetServicePhoneNumber] = useState("");
  const [getServiceMailAddress, setGetServiceMailAddress] = useState("");
  const [getServiceMessage, setGetServiceMessage] = useState("");

  // Bize Katıl bölümü için state değişkenleri
  const [joinUsName, setJoinUsName] = useState("");
  const [joinUsPhoneNumber, setJoinUsPhoneNumber] = useState("");
  const [joinUsMailAddress, setJoinUsMailAddress] = useState("");
  const [joinUsMessage, setJoinUsMessage] = useState("");

  const toggleContent = (section) => {
    if (activeSection === section) {
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };

  const handleGetServiceNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z ]*$/.test(value)) {
      setGetServiceName(value);
    }
  };

  const handleGetServicePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^[0-9+/-]*$/.test(value)) {
      setGetServicePhoneNumber(value);
    }
  };

  const handleGetServiceMailAddressChange = (e) => {
    setGetServiceMailAddress(e.target.value);
  };

  const handleJoinUsNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z ]*$/.test(value)) {
      setJoinUsName(value);
    }
  };

  const handleJoinUsPhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^[0-9+/-]*$/.test(value)) {
      setJoinUsPhoneNumber(value);
    }
  };

  const handleJoinUsMailAddressChange = (e) => {
    setJoinUsMailAddress(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!isValidEmail(getServiceMailAddress) || !isValidEmail(joinUsMailAddress)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
    alert("Form gönderildi!");
  };

  return (
    <div id="frame_contact" className="div-container-body">
      <h2>Contact Us</h2>
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
                      value={getServiceName}
                      onChange={handleGetServiceNameChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={getServicePhoneNumber}
                      onChange={handleGetServicePhoneNumberChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Mail"
                      value={getServiceMailAddress}
                      onChange={handleGetServiceMailAddressChange}
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="Message"
                      value={getServiceMessage}
                      onChange={(e) => setGetServiceMessage(e.target.value)}
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
                      value={joinUsName}
                      onChange={handleJoinUsNameChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={joinUsPhoneNumber}
                      onChange={handleJoinUsPhoneNumberChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Mail"
                      value={joinUsMailAddress}
                      onChange={handleJoinUsMailAddressChange}
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="Message"
                      value={joinUsMessage}
                      onChange={(e) => setJoinUsMessage(e.target.value)}
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
        <img className="artmoc-global" src={Artmoc2} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
