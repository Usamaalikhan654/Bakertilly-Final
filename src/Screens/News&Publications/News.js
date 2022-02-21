import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/news.jpeg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class News extends Component {
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
          <title>News</title>
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
          <div className="headerContainer">
            <center>
              <h2>LOCAL NEWS AND EVENTS</h2>
            </center>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300", marginTop: 20 }}
            >
              <center>
                In this section you will find a selection of local news and
                events about Baker Tilly.
              </center>
            </p>

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
                  Baker Tilly Pakistan celebrates brand refresh
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 100 }} className="headerContainer">
            <center>
              <h2>FEATURED NEWS</h2>
            </center>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300", marginTop: 20 }}
            >
              <center>
                In this section you will find a selection of International news
                articles about Baker Tilly.
              </center>
            </p>

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
                    href="https://www.bakertilly.global/en/news/2018/december/baker-tilly-international-unveils-new-visual-identity-and-brand-positioning/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Baker Tilly International Unveils New Visual Identity and
                    Brand Positioning
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
                    href="https://www.bakertilly.global/en/news/2019/january/baker-tilly-international-announces-financial-results-2018-global-revenues-reach-us-36bn/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Baker Tilly International Announces Financial Results 2018
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
                    href="https://www.bakertilly.global/en/news/2018/november/baker-tilly-international-enters-into-strategic-testing-partnership-with-inflo/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Baker Tilly International Enters Into Strategic Testing
                    Partnership with Inflo
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
                    href="https://www.bakertilly.global/en/news/2018/november/baker-tilly-international-introduces-pe-tracker-a-mobile-tool-designed-to-manage-permanent-establishment-pe-risks/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Baker Tilly International Introduces PE Tracker: A Mobile
                    Tool Designed to Manage Permanent Establishment (PE) Risks
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
                    href="https://www.bakertilly.global/en/news/2018/november/new-member-firm-expands-our-coverage-in-africa/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    New Member Firm Expands our Coverage in Africa
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
                    href="https://www.bakertilly.global/en/news/2018/november/baker-tilly-in-the-us-enters-houston-with-mrz-merger/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Baker Tilly in the US Enters Houston with MRZ Merger
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
                    href="https://www.bakertilly.global/en/news/2018/november/collins-barrow-vancouver-wolrige-mahon-cw-group-merge/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Collins Barrow Vancouver, Wolrige Mahon & CW Group Merge
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
                    href="https://www.bakertilly.global/en/news/2018/november/baker-tilly-international-names-new-chief-information-officer/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Baker Tilly International Names New Chief Information
                    Officer
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
                    href="https://www.bakertilly.global/en/news/2018/november/cherry-bekaert-grows-transaction-advisory-capabilities-with-acquisition-of-cts-capital-advisors/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Cherry Bekaert Grows Transaction Advisory Capabilities with
                    Acquisition of CTS Capital Advisors
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
                    href="https://www.bakertilly.global/en/news/2018/november/our-representation-in-liechtenstein/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "none" }}
                  >
                    Our Representation in Liechtenstein
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
