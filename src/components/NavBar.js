import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import UserModal from "./UserModal";
import { observer } from "mobx-react";

const NavBar = () => {
  return (
    <div className="nav-stuff">
      <NavLink to="/">
        <h3 className="logo">FOODIEZ</h3>
      </NavLink>
      <div className="navbar navbar-expand-lg navbar-dark trans-bg position-absolute top-0 end-0 px-5">
        <div className="container-fluid">
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
              <NavLink to="/" className="text-decoration-none">
                <li className="nav-item nav-t">
                  <p className="nav-link  active">Home</p>
                </li>
              </NavLink>
              <NavLink to="/recipes" className="text-decoration-none">
                <li className="nav-item nav-t">
                  <p className="nav-link active">Recipes</p>
                </li>
              </NavLink>
              <NavLink to="/" className="text-decoration-none ">
                <li className="nav-item nav-t"></li>
              </NavLink>

              <li className="nav-item nav-t">
                <UserModal />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(NavBar);
