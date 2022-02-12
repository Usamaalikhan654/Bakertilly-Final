import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/1.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class AuditAssurance extends Component {
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
          <title>Audit and Assurance</title>
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
            <h1>Audit and Assurance</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              An audit is more than a formality; it is a necessity to protect
              your business and encourage it to thrive. Early warnings, open
              communication and pragmatic resolution of issues are the essential
              features of the approach adopted by our firm. By taking the time
              to gain a thorough understanding of our clients' businesses and by
              providing a risk-focused service integrating rigorous risk
              assessment with diagnostic processes and audit testing procedures
              tailored to their specific audit, we maintain excellent
              relationships with our clients. This quality-led approach means we
              provide an intelligent, constructive and challenging audit to
              every one of our clients. We believe the statutory audit should be
              viewed as an opportunity, not an overhead.
            </p>
            <div className="row">
              <div className="col-md-8">
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Through robust audit tools, resources and procedures, We
                  deliver high quality audit services, adhering to the highest
                  standards of independence, ethics, professional objectivity
                  while applying technical excellence. As part of our strategy
                  of continuous audit quality improvement, service performance
                  and delivery to clients is continuously assessed through our
                  Quality Assurance Program.
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
                  Our reputation for providing quality professional services in
                  an independent, objective, and ethical manner is key to our
                  success as independent auditors. Our strong desire to continue
                  to enhance our reputation has led the firm to adopt a
                  comprehensive set of safeguards that are applicable to every
                  client engagement
                </div>
              </div>
            </div>
            {window.innerWidth < 1000 ? (
              <div style={{ marginTop: 50 }} />
            ) : null}
            <div className="row">
              <div className="col-md-8">
                <h1>Our Assurance and Regulatory Reporting Services</h1>
                <ul
                  className="ul aboutContent"
                  style={{ color: themeColor, marginTop: 40 }}
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

            <div style={{ marginTop: 40 }} className="row">
              <h1>Quality Control System</h1>

              <p
                className="aboutContent"
                style={{ color: "gray", fontWeight: "300" }}
              >
                It is the firm’s objective to establish, implement, maintain,
                monitor, and enforce a quality control system that provides
                reasonable assurance that the partners and staff members of the
                firm comply with the International Standard on Quality Control
                (ISQC) 1, Quality Control for Firms that Perform Audits and
                Reviews of Financial Statements, and Other Assurance and Related
                Services Engagements, and that the firm’s engagement reports are
                appropriate for the circumstances. We have a very strong
                assurance system in place, the policies adopted in this respect
                include involvement of an additional partner as quality control
                reviewer in every major audit, dedicated team for specified
                sector, specialized training courses, engagement quality
                assurance review programs and a formalized consultative
                framework. We bring, to every aspect of our service, the highest
                levels of commitment, professionalism, energy and enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}
