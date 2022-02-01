import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/services/7.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class OtherAdvisory extends Component {
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
          <title>Other Advisory</title>
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
            <h1>Other Advisory Services</h1>

            <h3>Succession Planning</h3>
            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Statistical data across the world has shown that 96% of all
              businesses start as family businesses, but only 30% make it to the
              second generation, falling to 12% and 3% over the next two
              generations. While the reasons for this are multiple, a major one
              is that even successful family businesses become large,
              cumbersome, complex and difficult to manage over the years. For
              family-owned companies to maintain vibrant progress across
              generations, they need to manage the inherent divergence between
              family and business on a regular basis. In order to do so, they
              need to align their strategies across three overlapping and
              important areas, namely the business, ownership and the family.
              <br />
              <br />
              This is something that is difficult to manage independently, and
              it is for this reason that a number of the leading businesses in
              this sphere have felt the need to turn to professional family
              business advisors. Over the years the family advisory profession
              has discovered areas within the family business arena which need
              their expertise such as the governance models that define the
              roles of family and non-family executives, the distinction between
              personal and business investments, succession planning, leadership
              transition etc.
              <br />
              <br />
              We have the leading experts in this kind of advisory work on our
              team, and are devoted to structuring the client’s business affairs
              in the most erudite and professional manner. Our priority is
              ensuring that the wealth and lifestyles of the current generation
              of family owners and beyond grows in line with the growth in the
              number of family members. Our end product which is arrived at
              after detailed discussions and meetings with all key stakeholders
              in the family enterprise system is a tailor-made solution that
              ensures family survival over generations and helps to avoid
              conflicts in future.
            </p>
            <div style={{ marginTop: 40 }} />
            <h3>Outsourcing</h3>
            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Innovation in cost-effective business growth has given birth to a
              new form of consulting commonly termed as outsourcing. As the name
              suggests, outsourcing enables management of enterprises,
              irrespective of their sizes, to concentrate and apply their
              energies on the areas of activities considered as their core
              activities while entrusting non-core functions to an external
              service provider.
              <br />
              <br />
              This modern management technique, by utilizing the concept of cost
              and benefit analysis, has successfully drawn a line distinguishing
              overall business activities into two segments on the basis of
              significance and sensitivity. Excellence in execution and speed is
              the life of the modern business prompting the outsource of
              non-core activities in order to allow management to focus on
              planning, effective operation and ultimately achieving targets of
              success and profitability.
              <br />
              <br />
              The firm is well equipped to handle outsourced services ranging
              from handling and managing accounting and finance functions, book
              keeping, managing payment functions, internal audit, processing of
              voluminous transactions, allocation of trained and qualified staff
              for carrying out specific assignments under the control and
              supervision of management, handling corporate and tax law
              compliance with respect to periodical submissions of various
              statements prescribed therein.
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
