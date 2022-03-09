import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import authStore from "../Store/authStore";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";

const NavBar = () => {
  return (
    <div className="mynavbar navbg">
      <nav className="navbar navbar-expand-lg navbar-dark  ">
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
            {authStore.user ? (
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
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to={"./"}>
                    Home
                  </NavLink>
                </li>
              </ul>
            )}
            <div className="button"></div>
          </div>
        </div>
      </nav>
      <div>
        {authStore.user ? (
          <Button className="btn-reg" onClick={authStore.logout}>
            logout
          </Button>
        ) : (
          <>
            <SignInModal />
            <SignUpModal />
          </>
        )}
      </div>
    </div>
  );
};

export default observer(NavBar);
