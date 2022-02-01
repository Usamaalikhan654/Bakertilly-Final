import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/about/5.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Values extends Component {
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
          <title>Our Values</title>
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
            <h1>Our Values</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Our culture is driven by the core values on which the firm was
              built and is run even today. Since the inception, the core value
              of the firm has been to provide top-notch services with utmost
              integrity, loyalty and innovation. The firm places strong emphasis
              on professional ethics, which are never compromised on. Client
              relationships at Baker Tilly are driven by following fundamental
              values;
            </p>

            <div className="row">
              <div className="col-md-12">
                <ul
                  className="ul aboutContent"
                  style={{ color: themeColor, marginTop: 0 }}
                >
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    IFRS reporting
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Regulatory compliance and reporting
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Corporate reporting improvement
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Financial accounting
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Independent controls & systems process assurance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}
