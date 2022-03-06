import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="mynavbar">
      <nav className="navbar navbar-expand-lg navbar-light trans-bg ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"./"}>
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to={"./"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to={"./account"}>
                  Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to={"./dashboard"}>
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
