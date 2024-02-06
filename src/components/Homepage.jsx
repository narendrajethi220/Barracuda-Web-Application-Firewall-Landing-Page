import React from "react";
import "../App.css";

const Homepage = () => {
  return (
    <div className="home-section">
      <header className="home-header">
        <div className="select-option">
          <select>
            <option>English</option>
            <option>Français </option>
            <option>Español </option>
            <option>Deutsch </option>
            <option>Italiano </option>
            <option>Portuguêsuese</option>
            <option>Русский </option>
            <option>日本語 </option>
            <option>中文 </option>
            <option>العربية </option>
            <option>हिन्दी</option>
            <option>한국어 </option>
            <option>Nederland </option>
            <option>Türkçe </option>
            <option>Svenska </option>
          </select>
        </div>
        {/* <div class="select-arrow">&#9662;</div> */}
      </header>
      <div className="modal-section">
        <div className="home-title">
          <img
            className="logo"
            src="/logo-removebg-preview.png"
            alt="logo-img"
          ></img>
          <h1 className="modal-intro">
            <span>Barracuda |</span> Web Application Firewall
          </h1>
        </div>
        <div className="login-modal">
          <div className="login">
            <p className="modal-para">
              Please enter your administrator login and password.
            </p>
            <div className="input-field">
              <input
                type="text"
                defaultValue="guest"
                placeholder="Username"
              ></input>
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="btn">
              <button className="sign-in">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
