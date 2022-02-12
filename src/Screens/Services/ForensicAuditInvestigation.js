import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/4.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class ForensicAudit extends Component {
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
          <title>Forensic Audit</title>
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
            <h1>Forensic Audit & Investigation</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Your reputation – with your customers and employees, the public,
              regulators and other companies is what keeps you in business and
              underpins your success. But reputation can be lost with terrifying
              speed such as hackers stealing your data, a competitor accusing
              your sales force of corruption, a dispute with your business
              partner threatening to erode value, an accounting discrepancy
              undermining market confidence and etc, the risks you face are
              unending and continue to change.
            </p>
            <div className="row">
              <div className="col-md-8">
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  here is a need to act swiftly when fraud is suspected in order
                  to prevent the situation deteriorating and to provide the very
                  best opportunity for recovering any losses that have already
                  occurred. We recognize that simply reporting suspicions of
                  fraud straight away may not be the only solution. It is
                  important to understand that primary interest of the
                  regulatory bodies is not only to recover stolen assets but to
                  secure a successful prosecution – even then they may not
                  proceed until you provide them with a comprehensive evidence
                  file.
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
                  At Baker Tilly, we recognize the complex and sensitive nature
                  of investigations, which is why our experience is valuable
                  when we are asked to provide efficient, accurate and robust
                  accounting assistance to our regulatory clients.
                </div>
              </div>
            </div>

            {window.innerWidth < 1000 ? (
              <div style={{ marginTop: 50 }} />
            ) : null}
            <div className="row">
              <div className="col-md-12">
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  At Baker Tilly Mehmood Idrees Qamar, We react quickly and
                  confidentially to safeguard assets and reputation, resolve
                  matters from situations occurring outside the normal course of
                  business. The services we offer includes:
                </p>
                <ul
                  className="ul aboutContent"
                  style={{ color: themeColor, marginTop: 40, fontSize: 25 }}
                >
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Fraud Investigations
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Anti-fraud and fraud risk assessment
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Fraud and ethics whistleblowing helpline advisory services
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Dispute advisory services
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Forensic technology and discovery services
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
