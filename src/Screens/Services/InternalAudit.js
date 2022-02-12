import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/6.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class InternalAudit extends Component {
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
          <title>Internal Audit</title>
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
            <h1>Internal Audit</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              The existing business and corporate environment has conclusively
              proved that the Internal Audit function has attained much more
              significance than the conventional transaction-based role of the
              past. In order to survive in a technology-driven society, business
              entities must be responsive in order to achieve targets in
              identifying opportunities, managing risks and exposures that can
              determine success or failure. This practice segment provides
              services in enhancing the scope and approach of the existing
              internal audit function of clients by providing advice,
              re-engineering and coordinating the internal audit department. The
              firm is well equipped and staffed to undertake Internal Audit
              Function on a fully outsourced basis.
            </p>
            <div className="row">
              <div className="col-md-8">
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  We have experience of using and implementing a wide range of
                  Internal Audit Tools and have expertise that can be made
                  available to our clients, either as part of Internal Audit
                  consultancy services or as an outsourced project. We can help
                  our clients transform their internal audit department by
                  making it more risk-focused - aligning the internal audit
                  effort with the risks, which threaten the achievement of the
                  business objectives and corporate mission.
                  <br />
                  <br />
                  We provide a tailored strategic approach to help our clients
                  identify and understand specific operational and financial
                  risks; to define the level of risk the client is willing to
                  accept; and to identify and focus on the opportunities
                  available.
                </p>
              </div>

              <div className="col-md-4">
                <div
                  style={{
                    background: "#d1eb50",
                    color: "#000",
                    padding: 25,
                    lineHeight: "1.5rem",
                    fontFamily: "robotoRegular, Arial, Helvetica, sans-serif",
                  }}
                >
                  Our approach relating to Internal Audit is based on the
                  guidelines specifically developed by Baker Tilly Mehmood
                  Idrees Qamar as a separate practice segment. It is a risk
                  based approach that focuses on organizations’ objectives and
                  impediments to achieving those objectives .
                </div>
              </div>
            </div>
            {/* <div className="row">
              <p
                className="aboutContent"
                style={{ color: "gray", fontWeight: "300" }}
              >
                We provide a tailored strategic approach to help our clients
                identify and understand specific operational and financial
                risks; to define the level of risk the client is willing to
                accept; and to identify and focus on the opportunities
                available.
              </p>
            </div> */}
          </div>
        </div>
      </MainContainer>
    );
  }
}
