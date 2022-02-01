import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/8.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class TaxAdvisory extends Component {
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
          <title>Tax Advisory</title>
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
            <h1>Tax Advisory Services</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Domestic and international tax issues play a key role in
              management decisions. Recent trends of takeovers, mergers, joint
              ventures and privatization have further added to the complexities
              of tax planning. Other major considerations like transfer pricing,
              available tax exemptions, preferred taxes and implications of
              double taxation treaties undoubtedly also play a vital role in the
              development of business strategies and formation of both domestic
              and cross-border joint ventures.
              <br />
              <br />
              These intricate tax complexities demand an enterprise to look
              forward well in time, keep an eye on domestic and international
              trends of taxation in order to adopt a strategy of responding to
              upcoming challenges and reaping potential opportunities by
              implementing strategic planning and innovative solutions on a
              timely basis.
              <br />
              <br />
              In this segment of practice, the firm can provide strategic tax
              consulting and impart to clients innovative tax solutions in
              response to new challenges. Skills in the provision of these
              services cover all forms of commercial activity encompassing,
              large or small organizations and corporate or individual entities.
              Our services are tailored so that both international and local
              implications are taken into account in order to achieve highly
              effective structures for our client thereby providing the most
              optimal compliance route.
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
