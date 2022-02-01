import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/vision.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Disclaimer extends Component {
  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Disclaimer</title>
        </Helmet>
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
            <h1>Disclaimer</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Baker Tilly Mehmood Idrees Qamar trading as Baker Tilly is an
              independent member of Baker Tilly International. Baker Tilly
              International Limited is an English company. Baker Tilly
              International provides no professional services to clients. Each
              member firm is a separate and independent legal entity, and each
              describes itself as such. Baker Tilly Mehmood Idrees Qamar is not
              Baker Tilly International’s agent and does not have the authority
              to bind Baker Tilly International or act on Baker Tilly
              International’s behalf. None of Baker Tilly International, Baker
              Tilly Mehmood Idrees Qamar, nor any of the other member firms of
              Baker Tilly International has any liability for each other’s acts
              or omissions. The name Baker Tilly and its associated logo is used
              under licence from Baker Tilly International Limited.
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
