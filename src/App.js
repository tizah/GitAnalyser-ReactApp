import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Analyser from "./Analyser";
import Header from "./Header";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Header />
        <Route
          path="/"
          exact
          render={props => <Home auth={this.auth} {...props} />}
        />
        <Route
          className="body"
          path="/callback"
          render={props => <Callback auth={this.auth} {...props} />}
        />
        <Route
          path="/analyser"
          render={props => <Header auth={this.auth} {...props} />}
        />
        <Route
          path="/analyser"
          render={props => <Nav auth={this.auth} {...props} />}
        />
        <Route path="/analyser" component={Analyser} />
      </>
    );
  }
}

export default App;
