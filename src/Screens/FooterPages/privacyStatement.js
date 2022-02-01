import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/vision.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { Helmet } from "react-helmet";

export default class PrivacyStatement extends Component {
  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Privacy</title>
        </Helmet>
        <div
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
            <h1>Privacy Statement</h1>

            <p
              className="aboutContent"
              style={{ color: "gray", fontWeight: "300" }}
            >
              Your information is being gathered on our global and secure
              systems. Your information will be used in accordance with any
              applicable data privacy law and our Data Privacy Policy, and will
              be held securely. We will not share your personal information with
              any third party, except as needed to manage the events or features
              for which you register. We will use your information to
              communicate with you and provide you the feature for which you
              registered. In order to improve our services and provide better
              content, We may keep track of patterns of use in the e-mails and
              e-mail newsletters we send. We note which links are clicked in our
              e-mail communications as specific user profile information to tell
              us what areas are of most interest to our recipients. In most
              cases, this information is analyzed in aggregate form, but
              sometimes personally identifiable information will be shared
              within Just & Fair with specific program owners for the limited
              purposes described above. We will not use the information for any
              other purpose. We are committed to maintaining your privacy during
              your visit to our website. If you are uncomfortable providing this
              information, please click the "Back" button in your browser, or
              simply close this window. By submitting this information, you
              consent to us using it as described above and sharing it within
              our global organization for these purposes.
            </p>
          </div>
        </div>
      </MainContainer>
    );
  }
}
