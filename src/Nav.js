import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
          <Link className="navbar-brand" to="/">
            <strong>Git-Analyser</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  GitHub Analyser
                </Link>
              </li>
              <li className="nav-item">
                {/* {isAuthenticated() ? (
                  
                ) : (
                  <Link className="nav-link" onClick={login()}>
                    Get Analyser
                  </Link>
                )} */}
                <Link className="nav-link" to="/analyser">
                  Get Analyser
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
