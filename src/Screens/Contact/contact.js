import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/contact.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Helmet } from "react-helmet";

export default class Contact extends Component {
  componentDidMount() {
    const path = this.props.history.location.hash;

    if (path) {
      this.main.scrollIntoView();
    }

    console.log(path);
  }

  state = {
    expand1: true,
    expand2: true,
  };

  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Contact</title>
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
            <h1>Contact Us:</h1>
            <div style={{ marginTop: 50 }} />
            <Accordion
              onClick={() => {
                this.setState({ expand1: !this.state.expand1 });
              }}
              expanded={this.state.expand1}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: themeColor }}
              >
                <Typography>
                  <h4>PAKISTAN</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F7F7F7",
                }}
              >
                <div style={{ width: "100%" }} className="row">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      flexGrow: 1,
                    }}
                    className="col-md-4"
                  >
                    <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Corporate Headquarters</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                        4th Floor , Central Hotel Building, Civil Lines,
                        Mereweather Road, Karachi, Pakistan.
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        +(92-21) 35644872-7 <br />{" "}
                        <span>
                          <i class="fa fa-fax" aria-hidden="true"></i>
                        </span>{" "}
                        +(92-21) 35694573
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      flexGrow: 1,
                    }}
                    className="col-md-4"
                  >
                    <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Lahore</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                        188-D-1, Model Town, Lahore,Pakistan.
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        +(92-42) 5842491-2 <br />{" "}
                        <span>
                          <i class="fa fa-fax" aria-hidden="true"></i>
                        </span>{" "}
                        +(92-42) 5833461
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      flexGrow: 1,
                    }}
                    className="col-md-4"
                  >
                    <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Islamabad</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                        Office 401, 4th floor, Mauve Area, RDF Centre, G - 9/1, 
                        Islamabad.
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          {/* <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        +(92-51) 2340353
                        <br />{" "}
                        <span> */}
                          <i class="fa fa-fax" aria-hidden="true"></i>
                        </span>{" "}
                        051-4717808
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ width: "100%", marginTop: 30 }} className="row">
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="col-md-4"
                  >
                    <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Islamabad - II</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                         Office 401, 4th floor, Mauve Area, RDF Centre, G - 9/1, 
                        Islamabad.
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        051-4717808
                        <br />{" "}
                      </p>
                    </div>
                  </div> */}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // flex: 1,
                      // flexGrow: 1,
                    }}
                    className="col-md-4"
                  >
                    <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Peshawar</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                        3rd Floor, 58, Deans Trade Center, Islamia Road,
                        Peshawar Cantt, Peshawar, Pakistan.
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        +(92-91) 5253354
                        <br />{" "}
                      </p>
                    </div>
                  </div>

                  <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Faisalabad</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                        2nd Floor, GM PLaza, Kohinoor City,
                        Faisalabad, Pakistan
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        041 8531357 <br />{" "}
                        <span>
                          <i class="fa fa-fax" aria-hidden="true"></i>
                        </span>{" "}
                        041 8531957
                      </p>
                    </div>
                
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              onClick={() => {
                this.setState({ expand2: !this.state.expand2 });
              }}
              expanded={this.state.expand2}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: themeColor, marginTop: 10 }}
              >
                <Typography>
                  <h4>AFGHANISTAN</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F7F7F7",
                }}
              >
                <div style={{ width: "100%" }} className="row">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // flex: 1,
                      // flexGrow: 1,
                    }}
                    className="col-md-4"
                  >
                    <div
                      style={{
                        background: "white",
                        padding: 25,
                        borderTopWidth: 6,
                        borderTopColor: "#d1eb50",
                        borderTopStyle: "solid",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      <h6>Kabul</h6>
                      <div
                        style={{
                          width: 150,
                          height: 2,
                          background: themeColor,
                        }}
                      ></div>

                      <div style={{ marginTop: 30 }} />
                      <p
                        className="aboutContent"
                        style={{
                          color: "black",
                          fontWeight: "300",
                          textAlign: "left",
                          fontSize: 20,
                        }}
                      >
                        House#5 , Selo Main Road 5, Near Sang e Kasha Mosque,
                        Kabul University, Kabul, Afghanistan
                        <br />
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            background: "gainsboro",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                        <span>
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        0093-783575279
                        <br />{" "}
                        <span>
                          <i class="fa fa-fax" aria-hidden="true"></i>
                        </span>{" "}
                        0093-770043057
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </MainContainer>
    );
  }
}
