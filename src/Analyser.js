import React, { Component } from "react";
import { Dashboard } from "./Dashboard";

class Analyser extends Component {
  render() {
    return (
      <div className="mask rgba-purple-light flex-center">
        <br />
        <div className="container text-center white-text wow fadeInUp">
          <h1>Welcome to GitHub Analyser</h1>
          <br />
          <h3>Type in your GitHub name to get your analysis</h3>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Analyser;
