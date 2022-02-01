import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/about/2.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Globally extends Component {
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
          <title>Globally Connected</title>
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
            <h1>Globally Connected</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              We are proud to be a member of the Baker Tilly network, which
              extends across 147 territories, with 33,600 people working out of
              more than 960 offices. Our membership gives us significant global
              reach in addition to our national presence.
              <br />
              <br />
              At Baker Tilly, we believe in the power of great relationships,
              great conversations and great futures. They represent what we
              stand for and what we are working together to achieve. Find out
              more at{" "}
              <span style={{ color: "black", textDecorationLine: "underline" }}>
                <a href="https://www.bakertilly.global/" target="_blank">
                  www.bakertilly.global
                </a>
              </span>
            </p>
          </div>
        </div>

        <div
          style={{ width: window.innerWidth, backgroundColor: themeColor }}
          className="row"
        >
          {/* <div  className="col-md-7"> */}
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/_07yjX5VSZY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ margin: 0 }}
            className="col-md-7"
          ></iframe>
          {/* </div> */}
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 30,
              backgroundColor: themeColor,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              marginRight: 0,
            }}
            className="col-md-5"
          >
            <div style={{ width: "100%" }}>
              <h3>Globally Connected</h3>

              <p
                className="aboutContent"
                style={{ color: "black", fontWeight: "300" }}
              >
                We are proud to be a member of the Baker Tilly network, which
                extends across 147 territories, with 33,600 people working out
                of more than 960 offices. Our membership gives us significant
                global reach in addition to our national presence.
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}
