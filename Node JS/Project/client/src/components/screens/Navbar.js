import React, { useContext } from "react";
import "./css/Navbar.css";
import logo from "./images/logo.png";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <div>
      <nav className="navigation">
        <div className="navigation__column">
          <Link to="/">
            <img src={logo} alt="Instagram logo" />
          </Link>
        </div>
        <div className="navigation__column">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="navigation__column">
          <ul className="navigations__links">
            <li className="navigation__list-item">
              <Link to="/create" className="navigation__link">
                <i className="fas fa-plus"></i>
              </Link>
            </li>

            <li className="navigation__list-item">
              <Link to="/profile" className="navigation__link">
                <i className="fas fa-user"></i>
              </Link>
            </li>
            <li className="navigation__list-item">
              <div className="navigation__link" style={{ cursor: "pointer" }}>
                <i
                  className="fas fa-power-off"
                  onClick={() => {
                    localStorage.clear();
                    history.push("/signin");
                  }}
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
