import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/aboutus.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Details extends Component {
  state = {
    name: "",
    details: "",
  };

  componentDidMount() {
    const data = this.props.history.location.state.data;

    this.setState({
      name: data.name,
      details: data.details,
    });
  }

  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>{this.state.name}</title>
        </Helmet>
        <MDBView>
          <img
            className="d-block w-100 banner"
            src={Banner}
            alt="First slide"
          />
        </MDBView>
        <div
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
            <h1>{this.state.name}</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              {this.state.details}
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
