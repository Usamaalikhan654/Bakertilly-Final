import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/about/why.png";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class WhyBakertilly extends Component {
  componentDidMount() {
    const path = this.props.history.location.hash;

    if (path) {
      this.main.scrollIntoView();
    }
  }

  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Why Baker Tilly?</title>
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
            <h1>Why Baker Tilly?</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              As a US$3.9bn global organisation with member firms in more than
              146 territories, we have the scale to meet your changing needs,
              but the agility that helps you stay one step ahead. When you
              choose to work with a Baker Tilly member firm, you choose a firm
              that believes in the power of great relationships, great
              conversations and great futures. We know you by name and value our
              relationship. We are not afraid to have tomorrow's conversations,
              today. And we embrace the opportunities that tomorrow presents.
            </p>
            <br />
            <br />

            <h3>Now, for tomorrow for our clients</h3>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              We create meaningful experiences with our clients to solve their
              most pressing problems and seize new opportunities. Our
              relationships with clients are genuine. We understand their world
              today and provide insights that shape their tomorrow. Network
              members collaborate seamlessly to serve our clients across the
              globe.
            </p>

            <br />
            <br />

            <h3>Now, for tomorrow for our people</h3>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Our profession is dynamic and our network and firms are innovative
              and growing. This gives team members rewarding opportunities at
              every stage of their career.
            </p>

            <br />
            <br />

            <h3>Now, for tomorrow for our communities and profession</h3>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              We are vested in the communities where we live and work, making a
              difference for future generations. Our network’s global influence
              makes us outstanding advocates for our profession.
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
