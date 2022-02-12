import React, { Component } from "react";
import "../assets/styles/style.css";
import Logo from "../assets/img/white.png";
import link from "../components/Firm.pdf";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          flex: 1,
          background: "#181818",
          marginTop: 80
        }}
      >
        <div
          style={{
            alignItems: "center",
            width: "100%",
            backgroundColor: "#181818",
            paddingTop: 50,
            paddingBottom: 50,
            paddingLeft: 100,
            paddingRight: 100,
           
          }}
          className="row"
        >
          <div
            style={{
              display: "flex",
              justifyContent: window.innerWidth > 800 ? "flex-start" : "center",
            }}
            className="col-md-6"
          >
            <img
              style={{ width: 200, height: 50 }}
              className="logo"
              src={Logo}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: window.innerWidth > 800 ? "flex-end" : "center",
              marginTop: window.innerWidth > 800 ? 0 : 50,
            }}
            className="col-md-6"
          >
            <div style={{ display: "flex" }}>
              <a
                style={{ color: "black", textDecorationLine: "none" }}
                href="https://www.facebook.com/bakertillypakistan/"
                target="_blank"
              >
                <div
                  class="facebookIcon"
                  style={{
                    borderRadius: 100,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </a>

              <a
                style={{ color: "black", textDecorationLine: "none" }}
                href="https://twitter.com/bakertillypaktw"
                target="_blank"
              >
                <div
                  class="facebookIcon"
                  style={{
                    borderRadius: 100,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </a>

              <a
                style={{ color: "black", textDecorationLine: "none" }}
                href="https://www.linkedin.com/company/baker-tilly-pakistan/"
                target="_blank"
              >
                <div
                  class="facebookIcon"
                  style={{
                    borderRadius: 100,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "black",
            flexDirection: "column",
            padding: 40,
            paddingLeft: 100,
            paddingRight: 100,
          }}
        >
          <div
            style={{ alignItems: "center", marginTop: 70, width: "100%" }}
            className="row"
          >
            <div className="col-md-4">
              <div
                onClick={() => this.props.history.push("/about/vision")}
                className="footerMenus"
                style={{
                  display: "flex",
                }}
              >
                <i
                  style={{ marginTop: 5 }}
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
                <p style={{ marginLeft: 10, fontSize: 22 }}>Our Visions</p>
              </div>

              <div
                className="footerMenus"
                style={{
                  display: "flex",
                }}
                onClick={() => this.props.history.push("/about/mission")}
              >
                <i
                  style={{ marginTop: 5 }}
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
                <p style={{ marginLeft: 10, fontSize: 22 }}>Our Mission</p>
              </div>
              <div
                className="footerMenus"
                style={{
                  display: "flex",
                }}
                onClick={() => this.props.history.push("/about/values")}
              >
                <i
                  style={{ marginTop: 5 }}
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
                <p style={{ marginLeft: 10, fontSize: 22 }}>Our Values</p>
              </div>
              <div
                className="footerMenus"
                style={{
                  display: "flex",
                }}
                onClick={() => this.props.history.push("/about/globally")}
              >
                <i
                  style={{ marginTop: 5 }}
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>
                <p style={{ marginLeft: 10, fontSize: 22 }}>
                  Globally Connected
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <p
                onClick={() => this.props.history.push("/")}
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Home
              </p>
              <p
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                  <a  href={link} target="_blank" style={{ color: "white", textDecoration: "none"}}>Firm Profile</a>
      
              </p>
              <p
                onClick={() => this.props.history.push("/privacy")}
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Privacy Statement
              </p>
              <p
                onClick={() => this.props.history.push("/disclaimer")}
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Disclaimer
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flex: 1,
                marginTop: 100,
                justifyContent: "flex-end",
              }}
              className="col-md-4"
            >
              <h5 style={{ color: "white" }}>Now, for tomorrow</h5>
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
            }}
            className="headerContainer"
          >
            <span style={{ fontSize: 12, color: "white" }}>
              Copyright © Baker Tilly Mehmood Idrees Qamar. Bakertilly is the
              trade name of Baker Tilly Mehmood Idrees Qamar. (made with{" "}
              <i
                style={{ color: "red" }}
                class="fa fa-heart"
                aria-hidden="true"
              ></i>{" "}
              by{" "}
              <a href="https://www.bizintel.co/" target="_blank">
                BizIntel
              </a>
              )
            </span>
          </div>
        </div>
      </div>
    );
  }
}
