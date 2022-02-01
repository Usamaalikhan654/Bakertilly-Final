import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/3.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class EenterpriseRisk extends Component {
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
          <title>Enterprise Risk Management</title>
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
            <h1>Enterprise Risk Management</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              In today’s ever-changing business environment of market
              complexity, globalization and increasing investor expectations,
              managing risks while providing value is more important than ever
              before. All organizations – big or small, public or private – have
              risks that they must manage proactively to succeed in today’s
              marketplace
              <br />
              <br />
              The Enterprise Risk Management (ERM) practice offers specialized
              services in the areas of IT assessment and advisory services. We
              offer assistance in managing and optimizing risks, strategically
              identifying, analyzing, overseeing and monitoring the potential
              risks to an organization. This approach enables a company to
              determine how much uncertainty and risk are acceptable to continue
              to add value to the organization.
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

            <div style={{ marginTop: 50 }} />

            <div className="row">
              <div className="col-md-12">
                <h1>Service We Offer</h1>
                <div style={{ marginTop: 30 }} />

                <h3>IT Project Advisory</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Effective IT governance and performance helps organization to
                  ensure that business system delivers value to the business and
                  that the unique risks inherent in the technology are monitored
                  in an appropriate governance framework. Our IT audit and
                  advisory services include: governance, strategy, performance
                  improvement, cost reduction, risk management benchmarking,
                  risk framework and due diligence.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>Governance and Performance</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Assist organization to develop an enterprise approach to
                  project initiation, execution and control to achieve desired
                  project outcomes. IT project advisory services help clients
                  align project activity with key business strategies and
                  identify and manage risk, change and quality as a result of
                  project activity. Our professionals can provide executive
                  support and assist clients to achieve enhanced organization
                  capability and greater project efficiency to deliver the right
                  result.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>Outsourced Risk Management</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Understand organization needs, select and evaluate potential
                  service providers so that organization is able to compare
                  objectively the available offerings.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>Business System Controls</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Assist organization to assess and verify that controls in
                  major system implementation are enhanced, in place and
                  operating effectively.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>Security, Privacy and Continuity</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Assist organization to protect their assets, including
                  availability and reliability, to protect the business itself.
                  Particular attention is provided during the phases of
                  assessment, architecture and monitoring.
                </p>

                <h3>IT Internal Audit</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Assist with full internal audit sourcing resources: a standing
                  agreement or on secondment basis. ERM works with clients to
                  understand the risk profile of the business, determine the
                  appropriate risk profile and help mitigate risk exposures. IT
                  internal auditor considers both compliance and operational
                  risk, determining if appropriate mitigation strategies exist.
                </p>

                <h3>ERM in External Audit</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Identifies financial and operational risk embedded in the
                  business system and processes and provide advisory on risk
                  mitigation. ERM professionals integrate technology issues into
                  the framework of audit, working as part of the audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}
