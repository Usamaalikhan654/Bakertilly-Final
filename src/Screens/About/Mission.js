import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/mission.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Mission extends Component {
  componentDidMount() {
    const path = this.props.history.location.hash;

    if (path) {
      this.main.scrollIntoView();
    }

    console.log(path);
  }

  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Our Mission</title>
        </Helmet>
        <MDBView>
          <img
            className="d-block w-100 banner"
            src={Banner}
            alt="First slide"
          />
        </MDBView>
        <div
          ref={(e) => (this.main = e)}
          className="aboutContainer"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            display: "flex",
            backgroundColor: "#F8F9F8",
            paddingTop: 50,
          }}
        >
          <div className="headerContainer">
            <h1>Our Mission</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Our mission is to be the professional services firm of first
              choice, that consistently exceeds the expectations of our clients
              and our people and this underpins all we do. This mission requires
              an uncompromising commitment to excellence in professional,
              ethical, technical service standards, which are the bedrock of our
              client services.
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
