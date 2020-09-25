import React, { useState, useContext } from "react";

import { UserContext } from "../../App";

import "./css/Signup.css";
import instagram from "./images/instagram.png";
import appstore from "./images/appstore.png";
import facebook from "./images/facebook.png";
import googleplay from "./images/googleplay.png";

import { Link, useHistory } from "react-router-dom";

const Signin = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "Logged in successfully") {
          localStorage.setItem("jwt", data.data.token);
          dispatch({ type: "USER", payload: data.user });
          localStorage.setItem("user", JSON.stringify(data.data));
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
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
                placeholder="Please enter your email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button" onClick={() => PostData()}>
              <a href="#">Log In</a>
            </div>
          </div>
          <div className="or">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="dif">
            <div className="fb">
              <img src={facebook} alt="facebook" />
              <p>Log in with Facebook</p>
            </div>
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </div>
        <div className="signup">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        <div className="apps">
          <p>Get the app.</p>
          <div className="icons">
            <a href="#">
              <img src={appstore} alt="appstore" />
            </a>
            <a href="#">
              <img src={googleplay} alt="googleplay" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
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
        <div className="copyright">© 2020 INSTAGRAM</div>
      </div>
    </div>
  );
};

export default Signin;
