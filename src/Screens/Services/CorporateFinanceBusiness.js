import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/2.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class CorprateFinance extends Component {
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
          <title>Corporate Finance</title>
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
            <h1>
              Corporate Finance and <br /> Business Advisory Services
            </h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Running a successful business requires solid planning and the
              timely execution of strategic initiatives. The best performing
              companies choose acquisition targets and alliance partners more
              carefully, and actively manage their portfolio by selling or
              outsourcing operations whenever economic or strategic
              considerations dictate. Our corporate finance and business
              advisory services department provides a diverse range of strategic
              and financial advice to clients in relation to corporate finance,
              valuation and other corporate activities. Our results oriented
              approach offers our clients specific solutions to complex problems
              and we provide the help needed by our clients to implement them.
              <br />
              <br />
              Led by a partner with a broad understanding of current business
              and management issues, our dedicated consultancy teams help our
              clients to focus on their strengths, set priorities for growth,
              develop marketing strategies and improve their return on
              resources. Our consultants work closely with our clients to
              identify strategic opportunities, suggest practical,
              cost-effective steps to achieve competitive advantage. The Firm
              with commercially oriented specialists, provides services which
              are aimed at meeting clients total corporate finance needs right
              from planning to floatation and beyond and irrespective of size,
              location and types of business. We also work closely with our
              colleagues in Audit, Tax, Enterprise Risk Services and other
              specialists, both internal and external, to provide comprehensive
              services, tailored to the needs of the clients.
            </p>

            <div style={{ marginTop: 50 }} />
            <div className="row">
              <div className="col-md-12">
                <h3>Service We Offer</h3>
                <ul
                  className="ul aboutContent"
                  style={{ color: themeColor, fontSize: 25 }}
                >
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Business Valuation
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Business start-up and raising seed capital
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Corporate financial planning and re-engineering
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Floatation of shares and securities in local and overseas
                    stock exchanges
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Privatization
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Mergers and acquisitions
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Management buy-in and buy-out advice
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Restructuring and reorganization
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Facilitating foreign investment by
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Secretarial and corporate compliance and reporting services
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Consultation on corporate governance compliance
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Liquidation processing and consultancy
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Commercial and technical search
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Studies on relocation and diversification
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
