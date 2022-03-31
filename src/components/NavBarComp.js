import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export class NavBarComp extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h4>Navbar</h4>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" role="aboutSection" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/querylist" role="querySection" className="nav-link">
                  QueryList
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/support" role="supportSection" className="nav-link">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavBarComp;
