import React, { Component } from "react";
import Header from "../components/Header";
import "../assets/styles/style.css";
import slide1 from "../assets/img/slide4.jpg";
import slide2 from "../assets/img/slide5.jpg";
import slide3 from "../assets/img/slide7.jpg";
import slide4 from "../assets/img/slide9.jpg";
import slide5 from "../assets/img/slide10.jpg";
import slide6 from "../assets/img/slide11.jpg";
import slide7 from "../assets/slides/slide-1.jpeg";
import slide8 from "../assets/slides/Ok 394_AERIAL.jpg";
import slide9 from "../assets/slides/Main Slide2.jpg";
import slide10 from "../assets/slides/Ok 485_AERIAL.jpg";
import slide11 from "../assets/slides/slide11.jpeg";
import banner from "../assets/img/slide6.jpg";
import icon1 from "../assets/img/icons/AA.jpg";
import icon2 from "../assets/img/icons/CF.jpg";
import icon3 from "../assets/img/icons/ERM.jpg";
import icon4 from "../assets/img/icons/FA.jpg";
import icon5 from "../assets/img/icons/HR.jpg";
import icon6 from "../assets/img/icons/IA.jpg";
import icon7 from "../assets/img/icons/Others.jpg";
import icon8 from "../assets/img/icons/Tax.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../assets/styles/style.css";
import Footer from "../components/Footer";
import MainContainer from "../containers/MainContainer";
import { Helmet } from "react-helmet";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <MainContainer>
          <CarouselProvider
            infinite={true}
            isPlaying={true}
            naturalSlideWidth={window.innerWidth}
            naturalSlideHeight={800}
            totalSlides={2}
            interval={2000}
            playDirection="forward"
          >
            <Slider>
              <Slide index={0}>
                <img
                  style={{ width: window.innerWidth, height: 800 }}
                  className="d-block w-100 firstslide"
                  src={slide7}
                  alt="First slide"
                />
              </Slide>
              <Slide index={1}>
                <img
                  style={{ width: window.innerWidth, height: 800}}
                  className="d-block w-100 secondslide"
                  src={slide9}
                  alt="First slide"
                />
              </Slide>
            </Slider>
          </CarouselProvider>

          <div
            className="aboutContainer"
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              display: "flex",
              backgroundColor: "#F8F9F8",
            }}
          >
            <div className="headerContainer">
              <h1>About Us</h1>

              <p
                className="aboutContent"
                style={{ color: "gray", fontWeight: "300" }}
              >
                BAKER TILLY (A trade name of Baker Tilly Mehmood Idrees Qamar)
                has been providing the highest quality of audit, assurance, tax
                and other advisory services. Formed in 2001, the firm is
                regarded for its quality services, ethical and professional
                standards. The firm is currently headquartered in Karachi,
                having five offices across Pakistan strategically located at
                Lahore , Faisalabad , Islamabad and Peshawar. We also have an office in Kabul,
                Afghanistan.
                <br />
                <br />
                Baker Tilly Mehmood Idrees Qamar is an independent member firm
                of Baker Tilly International, the world’s ninth largest
                accountancy and business advisory network of outstanding firms.
                Dealing with Baker Tilly means dealing with the whole world at
                one place, for seamless services are provided through worldwide
                offices of the member firms around the Globe.
              </p>

              {/* <input
                type="submit"
                class="btn readButton aboutContent"
                value="Read More"
              /> */}
            </div>
          </div>

          {/* image */}
          <img
            style={{ width: "100%", height: 500, objectFit: "cover" }}
            src={slide8}
          />

          {/* services */}
          <div
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              display: "flex",
              backgroundColor: "#F8F9F8",

              flexDirection: "column",
              padding: 30,
            }}
          >
            <h2 style={{ marginTop: 50 }}>Our Services</h2>
          </div>
          <div
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              display: "flex",
              backgroundColor: "white",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <div style={{ marginTop: 80 }} className="headerContainer">
              <div className="row">
                <div className={`col-md-6`}>
                  <div
                    onClick={() => this.props.history.push("/services/audit")}
                    className={"serviceBox"}
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <img src={icon1} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        Audit and Assurance
                      </p>

                      <p className="serviceBoxText">
                        Our methodology provides a continuous audit process by
                        staying in touch with clients round the year, keeping
                        them updated with changing conditions and providing
                        ongoing feedback on business decisions that could affect
                        financial statements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className={"serviceBox"}
                    onClick={() =>
                      this.props.history.push("/services/internalaudit")
                    }
                  >
                    <div>
                      <img src={icon6} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        internal audit
                      </p>

                      <p className="serviceBoxText">
                        Our approach relating to Internal Audit is based on the
                        guidelines specifically developed by Baker Tilly Mehmood
                        Idrees Qamar as a separate practice segment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 30 }} className="row">
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      this.props.history.push("/services/forensicaudit")
                    }
                    className={"serviceBox"}
                  >
                    <div>
                      <img src={icon4} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        forensic audit and investigation
                      </p>

                      <p className="serviceBoxText">
                        At Baker Tilly, we recognize the complex and sensitive
                        nature of investigations, which is why our experience is
                        valuable when we are asked to provide efficient,
                        accurate and robust accounting assistance to our
                        regulatory clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className={"serviceBox"}
                    onClick={() =>
                      this.props.history.push("/services/corporatefinance")
                    }
                  >
                    <div>
                      <img src={icon2} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        CORPORATE FINANCE AND BUSINESS ADVISORY SERVICES
                      </p>

                      <p className="serviceBoxText">
                        Our corporate finance and business advisory services
                        department provides a diverse range of strategic and
                        financial advice to clients in relation to corporate
                        finance, valuation and other corporate activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 30 }} className="row">
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className={"serviceBox"}
                    onClick={() =>
                      this.props.history.push("/services/taxadvisory")
                    }
                  >
                    <div>
                      <img src={icon8} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        tax advisory services
                      </p>

                      <p className="serviceBoxText">
                        The firm can provide strategic tax consulting and impart
                        to clients innovative tax solutions in response to new
                        challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className={"serviceBox"}
                    onClick={() =>
                      this.props.history.push("/services/enterpriserisk")
                    }
                  >
                    <div>
                      <img src={icon3} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        enterprise risk management
                      </p>

                      <p className="serviceBoxText">
                        The firm offers assistance in managing and optimizing
                        risks, strategically identifying, analyzing, overseeing
                        and monitoring the potential risks to an organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 30 }} className="row">
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className={"serviceBox"}
                    onClick={() =>
                      this.props.history.push("/services/humanresource")
                    }
                  >
                    <div>
                      <img src={icon5} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        human resource services
                      </p>

                      <p className="serviceBoxText">
                        Our firms bring its deep experience of HR strategic
                        planning, HR management systems and HR operational
                        efficiency based on its experience to benefit its
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className={"serviceBox"}
                    onClick={() =>
                      this.props.history.push("/services/otheradvisory")
                    }
                  >
                    <div>
                      <img src={icon7} style={{ width: 40, height: 40 }} />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                      <p
                        style={{
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        other advisory services
                      </p>

                      <p className="serviceBoxText">
                        We have the leading experts in this kind of advisory
                        work on our team, and are devoted to structuring the
                        client’s business affairs in the most erudite and
                        professional manner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
        </MainContainer>
      </div>
    );
  }
}
