import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/about/careers.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class Careers extends Component {
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
          <title>Careers</title>
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
            <h1>Careers</h1>

            <div style={{ marginTop: 50 }} className="row">
              <div className="col-md-6">
                <h3>YOU KNOW US, WE WOULD WANT TO KNOW YOU.</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Whether you’re an accomplished professional or a promising new
                  talent, at Baker Tilly you’ll be challenged by the work you
                  do, supported & motivated by the people you work with, and
                  appreciated by the clients you serve. You’ll be constantly
                  learning, and your ideas will be welcomed in an atmosphere of
                  collaboration and teamwork.
                </p>

                <div style={{ marginTop: 30 }} />

                <h3>WORKING AT BAKER TILLY</h3>
                <p
                  className="aboutContent"
                  style={{ color: "gray", fontWeight: "300" }}
                >
                  Baker Tilly is fast-growing dynamic organization with team of
                  committed, knowledgeable, well-rounded and hardworking
                  individuals that are dedicated to not only meeting client’s
                  expectations but exceeding them.
                  <br />
                  <br />
                  We continually encourage and support the growth of our
                  employees. With world-class learning and development programs
                  as well as abundant on-the-jobtraining opportunities, you will
                  have all the room you need to grow and reach your highest
                  potential. At Baker Tilly we are committed to the diversity of
                  our people and heavily support the career advancement of
                  women.
                  <br />
                  <br />
                  We are looking for candidates who possess a strong work ethic,
                  can think critically, communicate clearly and apply their
                  technical knowledge in real-world settings.
                </p>
              </div>

              <div className="col-md-6">
                <div
                  style={{
                    background: "#d1eb50",
                    padding: 25,
                  }}
                >
                  <h3>CURRENT VACANCIES</h3>

                  <div style={{ marginTop: 30 }} />
                  <h4>We’re hiring! Come join us</h4>
                  <p
                    className="aboutContent"
                    style={{ color: "black", fontWeight: "300" }}
                  >
                    Our reputation for providing quality professional services
                    in an independent, objective, and ethical manner is key to
                    our success as independent auditors. Our strong desire to
                    continue to enhance our reputation has led the firm to adopt
                    a comprehensive set of safeguards that are applicable to
                    every client engagement
                  </p>

                  <div style={{ marginTop: 30 }} />
                  <h4>We believe in:</h4>
                  <p
                    className="aboutContent"
                    style={{ color: "black", fontWeight: "300" }}
                  >
                    We are looking for market-ready young professionals who will
                    go “all in” to further the company mission and will prove to
                    be an excellent fit within our team and culture.
                    <br />
                    <br />
                    So if you think you have what it takes to make a difference
                    to our organization and if you are looking for an
                    opportunity to work within a vibrant environment, then look
                    no further and send your resume to{" "}
                    <span>
                      {" "}
                      <a href="mailto:careers@bakertilly.pk" target="_blank">
                        careers@bakertilly.pk
                      </a>
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}
