import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <main className="text-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <button onClick={this.props.auth.login}>Login</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
