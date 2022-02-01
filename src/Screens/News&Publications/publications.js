import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/img06.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Publications extends Component {
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
          <title>Publications</title>
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
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: 100 }} className="headerContainer">
            <center>
              <h2>PUBLICATIONS</h2>
            </center>

            <div style={{ marginTop: 50 }} />

            <div
              style={{
                width: "100%",
                paddingTop: 20,
                paddingBottom: 0,
                border: "1px solid gainsboro",
              }}
            >
              <ul className="ul aboutContent" style={{ color: themeColor }}>
                <li
                  style={{
                    color: "black",
                    fontWeight: "300",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="https://www.bakertilly.pk/pdf/dop.pdf"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Doing Business in Pakistan
                  </a>
                </li>
              </ul>
            </div>

            <div
              style={{
                width: "100%",
                paddingTop: 20,
                paddingBottom: 0,
                border: "1px solid gainsboro",
              }}
            >
              <ul className="ul aboutContent" style={{ color: themeColor }}>
                <li
                  style={{
                    color: "black",
                    fontWeight: "300",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="https://www.bakertilly.pk/pdf/doa.pdf"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Doing Business in Afghanistan
                  </a>
                </li>
              </ul>
            </div>

            <div
              style={{
                width: "100%",
                paddingTop: 20,
                paddingBottom: 0,
                border: "1px solid gainsboro",
              }}
            >
              <ul className="ul aboutContent" style={{ color: themeColor }}>
                <li
                  style={{
                    color: "black",
                    fontWeight: "300",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="https://www.bakertilly.pk/pdf/firm.pdf"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Firm Profile Baker Tilly
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}
