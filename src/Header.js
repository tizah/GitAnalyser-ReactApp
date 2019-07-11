import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="view intro-2 body">
          <div className="full-bg-img">
            <div className="mask rgba-purple-light flex-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="container text-center white-text wow fadeInUp">
                <h2>GitHub Analyser</h2>
                <br />
                <h5>A GitStart Learning Project By David Zagi</h5>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
