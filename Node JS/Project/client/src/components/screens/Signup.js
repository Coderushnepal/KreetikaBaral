import React, { useState } from "react";
import "./css/Signup.css";
import instagram from "./images/instagram.png";
import appstore from "./images/appstore.png";
import googleplay from "./images/googleplay.png";

import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/signin");
      });
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="top">
          <div className="logo">
            <img src={instagram} alt="instagram" style={{ width: "175px" }} />
          </div>
          <div className="form">
            <div className="input-field">
              <input
                type="text"
                placeholder="Please enter your username"
                class="input"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Please enter your email"
                class="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                class="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button" onClick={() => PostData()}>
              <Link to="/">Sign Up</Link>
            </div>
          </div>
          <div className="or">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="dif">
            <div className="forgot">
              <Link to="/signup">Forgot password?</Link>
            </div>
          </div>
        </div>
        <div className="signup">
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
        <div className="apps">
          <p>Get the app.</p>
          <div className="icons">
            <Link to="/signup">
              <img src={appstore} alt="appstore" />
            </Link>
            <Link to="/signup">
              <img src={googleplay} alt="googleplay" />
            </Link>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="links">
          <ul>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
            <li>
              <a href="#">PRESS</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">JOBS</a>
            </li>
            <li>
              <a href="#">PRIVACY</a>
            </li>
            <li>
              <a href="#">TERMS</a>
            </li>
            <li>
              <a href="#">DIRECTORY</a>
            </li>
            <li>
              <a href="#">PROFILES</a>
            </li>
            <li>
              <a href="#">HASHTAGS</a>
            </li>
            <li>
              <a href="#">LANGUAGE</a>
            </li>
          </ul>
        </div>
        <div class="copyright">© 2020 INSTAGRAM</div>
      </div>
    </div>
  );
};

export default Signup;
