import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

class MainContainer extends Component {
  state = {
    active: 0,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="headerContainer">
            <Header active={this.state.active} history={this.props.history} />
          </div>
        </div>
        {this.props.children}
        <Footer history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(MainContainer);
