import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/5.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class HumanResource extends Component {
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
          <title>Human Resource</title>
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
            <h1>Human Resources Services</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              To succeed in today’s market place, it takes good quality people
              to build a business, getting capital and erecting buildings is the
              easy part. Increasingly in this age of technology and rapid
              communications, the backbone of any business is the competency and
              knowledge base of its human capital. Our firm brings its deep
              experience of HR strategic planning, HR management systems and HR
              operational efficiency based on its experience to benefit its
              clients. The services offered by the firm under this segment are:
            </p>

            <div style={{ marginTop: 50 }} />
            <h1>Executive Search and Selection</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Our executive search practice is to assure you the best of our
              assistance in finding the suitable person for the position. Our
              approach for meeting human resource requirements generally
              encompasses the following steps:
            </p>

            <div className="row">
              <div className="col-md-12">
                <div style={{ marginTop: 30 }} />

                <h3>Short-listing</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Short listing is usually done out of CVs available in our
                  database. If the appropriate incumbent is not available in our
                  database, then by:
                </p>
                <ul className="ul aboutContent" style={{ color: themeColor }}>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Advertising in the local newspapers.
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Contacting directly to the people of the similar industry.
                  </li>
                </ul>

                <div style={{ marginTop: 30 }} />

                <h3>Evaluation</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Short listing is usually done out of CVs available in our
                  database. If the appropriate incumbent is not available in our
                  database, then by:
                </p>
                <ul className="ul aboutContent" style={{ color: themeColor }}>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Administration of written tests (if required by the client).
                  </li>
                  <li style={{ color: "gray", fontWeight: "300" }}>
                    Incumbent’s screening.
                  </li>
                </ul>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Competency evaluation of the incumbent to identify the ability
                  of analyzing problem assessment, developing organizational
                  talent, leadership quality, empowering job design, adequacy,
                  coaching, delegation of authority, motivational fit etc.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>Development and Training</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Employees are every company’s asset. Their abilities need to
                  be nurtured and competencies enhanced for them to grow
                  continuously and achieve set goals. They have to be trained
                  from time to time in different areas to help them overcome
                  deficiencies and turn weaknesses into strengths. We offer a
                  wide range of training programs to enhance the abilities of
                  your workforce. These training programs can be tailored to
                  your specific needs. Training Needs Analysis (TNA) can also be
                  conducted within your organization to find out exactly “Who”
                  needs Training and in “Which” area. Post Training Evaluation
                  is carried out to know the outcome of the training programs.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>Human Resources Management</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Our core HRM services include:
                </p>
                <ul className="ul aboutContent" style={{ color: themeColor }}>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Man Power Planning. Job analysis, Job Design, Job Profile,
                    Job Descriptions
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Job Evaluation - (vs. Seniority promotions) Placement
                    Services
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Compensation and benefit systems
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Performance appraisals
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Business process excellence
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Career/Succession Planning - Potential Appraisal
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Post Merger Culture Consolidation and Team Building
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Funds Management: Provident Fund, Gratuity, Pension
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Organization Systems - SOPs
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Time Management Services - With Computerized Record Keeping
                  </li>
                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Health, Hygiene; Medical Check ups - Pre Employment / During
                    Service
                  </li>

                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    Strategic Review: Defining the Mission Statement, Vision,
                    Values, SWOT: Strategic Planning, Setting Objectives, Fixing
                    Responsibilities / Due Date
                  </li>

                  <li
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      display: "flex",
                    }}
                  >
                    The 'Grieving Process: Shock, Denial, Anger - self pity,
                    cynicism, Resignation - sadness, Acceptance - Unfolding /
                    growth / transformation ("Flow through…”)
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
