import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "../assets/styles/style.css";
import Icon from "@material-ui/core/Icon";
import MenuIcon from "../assets/img/menu.png";
import Searchable from "react-searchable-dropdown";
import { themeColor } from "../config";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../assets/styles/style.css";
import { bounce, slideInDown } from "react-animations";

class Header extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
    const activeMenu = localStorage.getItem("menu");

    const state = window.performance.toJSON();

    // console.log(state);

    // if (state.navigation.type != 1) {
    //   window.onunload = () => {
    //     localStorage.setItem("menu", 0);
    //   };
    //   this.setState({ activeMenu: 0 });
    //   return;
    // }

    if (activeMenu != null) {
      this.setState({ activeMenu });
      return;
    }

    this.setState({ activeMenu: 0 });
    localStorage.setItem("menu", 0);
  }

  saveToLocalStorage = (menu, name) => {
    this.setState({ activeMenu: menu, activeMenuName: name });
    localStorage.setItem("menu", menu);
  };

  componentDidUpdate() {
    localStorage.setItem("menu", this.state.activeMenu);
  }

  state = {
    menuColor: "#9D9D9D",
    searchOptions: [],
    isOpen: false,
    activeMenu: 0,
    activeMenuName: "",
    search: false,
    options: [
      {
        label: "Audit and Assurance",
        value: "Audit and Assurance",
        path: "/services/audit#main",
        id: 1,
      },
      {
        label: "Internal Audit",
        value: "Internal Audit",
        path: "/services/internalaudit#main",
        id: 1,
      },
      {
        label: "Forensic Audit & Investigation",
        value: "Forensic Audit & Investigation",
        path: "/services/forensicaudit#main",
        id: 1,
      },
      {
        label: "Corporate Finance and Business Advisory Services",
        value: "Corporate Finance and Business Advisory Services",
        path: "/services/corporatefinance#main",
        id: 1,
      },
      {
        label: "Tax Advisory Services",
        value: "Tax Advisory Services",
        path: "/services/taxadvisory#main",
        id: 1,
      },
      {
        label: "Enterprise Risk Management",
        value: "Enterprise Risk Management",
        path: "/services/enterpriserisk#main",
        id: 1,
      },
      {
        label: "Human Resource Services",
        value: "Human Resource Services",
        path: "/services/humanresource#main",
        id: 1,
      },
      {
        label: "Other Advisory Services",
        value: "Other Advisory Services",
        path: "/services/otheradvisory#main",
        id: 1,
      },
      {
        label: "Our Vision",
        value: "Our Vision",
        path: "/about/vision#main",
        id: 2,
      },
      {
        label: "Our Mission",
        value: "Our Mission",
        path: "/about/mission#main",
        id: 2,
      },
      {
        label: "Our Values",
        value: "Our Values",
        path: "/about/values#main",
        id: 2,
      },
      {
        label: "Our Partners",
        value: "Our Partners",
        path: "/about/management#main",
        id: 2,
      },
      {
        label: "Globally Connected",
        value: "Globally Connected",
        path: "/about/globally#main",
        id: 2,
      },
      {
        label: "Our Directors",
        value: "Our Directors",
        path: "/about/management#main",
        id: 2,
      },
      {
        label: "Management Team",
        value: "Management Team",
        path: "/about/management#main",
        id: 2,
      },
      {
        label: "News",
        value: "News",
        path: "/news#main",
        id: 3,
      },
      {
        label: "Publications",
        value: "Publications",
        path: "/publications#main",
        id: 3,
      },
      {
        label: "Calendar",
        value: "Calendar",
        path: "/calendar#main",
        id: 3,
      },
      {
        label: "Careers",
        value: "Careers",
        path: "/careers#main",
        id: 4,
      },
      {
        label: "Vacancies",
        value: "Careers",
        path: "/careers#main",
        id: 4,
      },
      {
        label: "Jobs",
        value: "Careers",
        path: "/careers#main",
        id: 4,
      },
      {
        label: "Contact",
        value: "Contact",
        path: "/contact#main",
        id: 5,
      },
      {
        label: "Privacy",
        value: "Privacy",
        path: "/privacy#main",
        id: 1,
      },
      {
        label: "Disclaimer",
        value: "Disclaimer",
        path: "/disclaimer#main",
        id: 1,
      },
    ],
    activeHoverMenu: "",
  };

  escFunction(event) {
    if (event.keyCode === 27) {
      this.setState({ searchOptions: [] });
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          style={{
            width: window.innerWidth < 1092 ? "100%" : "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: this.state.search ? 230 : 130,
            fontFamily: "robotoRegular",
          }}
          color="indigo"
          expand="lg"
          fixed="top"
        >
          <div
            style={
              window.innerWidth > 1000
                ? {
                    width: "80%",
                    display: "flex",
                  }
                : {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }
            }
            // className="headerDirections"
          >
            {/* <center> */}
            {/* <MDBNavbarBrand> */}
            {window.innerWidth > 1000 ? (
              <>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.saveToLocalStorage(0);
                    this.props.history.push("/");
                  }}
                  className="logo"
                  src={Logo}
                />
                {/* </MDBNavbarBrand> */}
                <div style={{ width: 10, height: 10, overflow: "hidden" }}>
                  <MDBNavbarToggler
                    style={{ backgroundColor: "black" }}
                    onClick={this.toggleCollapse}
                  />
                </div>
              </>
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.saveToLocalStorage(0);
                    this.props.history.push("/");
                  }}
                  className="logo"
                  src={Logo}
                />
                {/* </MDBNavbarBrand> */}
                <MDBNavbarToggler
                  // style={{ backgroundColor: "red" }}
                  onClick={this.toggleCollapse}
                  image={MenuIcon}
                />
              </div>
            )}
            <MDBCollapse
              style={{
                justifyContent: "center",
              }}
              id="navbarCollapse3"
              isOpen={this.state.isOpen}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      style={{
                        color:
                          this.state.activeMenu == 0
                            ? "black"
                            : this.state.menuColor,
                        textTransform: "uppercase",
                        // fontWeight:
                        //   this.state.activeMenu == 0 ? "bold" : "normal",
                      }}
                      onClick={() => {
                        this.saveToLocalStorage(0);
                        this.props.history.push("/");
                      }}
                      to="/"
                    >
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavItem>
                <div
                  onMouseEnter={() => {
                    this.setState({ activeHoverMenu: 1 });
                  }}
                  onMouseLeave={() => {
                    this.setState({ activeHoverMenu: "" });
                  }}
                  onClick={() => {
                    this.setState({ activeHoverMenu: 1 });
                  }}
                >
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav>
                        <span
                          onClick={() => {
                            this.saveToLocalStorage(1);
                            this.props.history.push("/services/audit");
                          }}
                          style={{
                            color:
                              this.state.activeMenu == 1
                                ? "black"
                                : this.state.menuColor,
                          }}
                          className="mr-2 navItemStyle"
                        >
                          Services
                        </span>
                      </MDBDropdownToggle>
                      {this.state.activeHoverMenu == 1 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-duration="2000"
                          style={{
                            position: "absolute",
                            border: "0px solid black",
                            zIndex: 99,
                            flex: 1,
                            background: "white",
                            padding: 10,
                          }}
                          className={"menuBox"}
                        >
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push("/services/audit");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            Audit and assurance
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push(
                                "/services/internalaudit"
                              );
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            internal audit
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push(
                                "/services/forensicaudit"
                              );
                            }}
                            className="navItemStyle"
                            style={{
                              color: this.state.menuColor,
                            }}
                          >
                            forensic audit
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push(
                                "/services/corporatefinance"
                              );
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            corporate finance
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push("/services/taxadvisory");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            tax advisory
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push(
                                "/services/enterpriserisk"
                              );
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            Risk management
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push(
                                "/services/humanresource"
                              );
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            human resources
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(1);
                              this.props.history.push(
                                "/services/otheradvisory"
                              );
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            other Advisory
                          </Dropdown.Item>
                        </div>
                      ) : null}
                    </MDBDropdown>
                  </MDBNavItem>
                </div>

                <div
                  onMouseEnter={() => {
                    this.setState({ activeHoverMenu: 2 });
                  }}
                  onMouseLeave={() => {
                    this.setState({ activeHoverMenu: "" });
                  }}
                  onClick={() => {
                    this.setState({ activeHoverMenu: 2 });
                  }}
                >
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle style={{ minWidth: 88 }} nav>
                        <span
                          onClick={() => {
                            this.saveToLocalStorage(2);
                            this.props.history.push("/about/why");
                          }}
                          style={{
                            // fontSize: 20,
                            // fontWeight:
                            //   this.state.activeMenu == 2 ? "bold" : "normal",
                            color:
                              this.state.activeMenu == 2
                                ? "black"
                                : this.state.menuColor,
                          }}
                          className="mr-2 navItemStyle"
                        >
                          about us
                        </span>
                      </MDBDropdownToggle>
                      {this.state.activeHoverMenu == 2 ? (
                        <div
                          style={{
                            position: "absolute",
                            border: "0px solid black",
                            zIndex: 99,
                            flex: 1,
                            background: "white",
                            padding: 10,
                          }}
                          className={"menuBox"}
                        >
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(2);
                              this.props.history.push("/about/why");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            Why Bakertilly?
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(2);
                              this.props.history.push("/about/vision");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            our vision
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(2);
                              this.props.history.push("/about/mission");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            our mission
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(2);
                              this.props.history.push("/about/values");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            our values
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(2);
                              this.props.history.push("/about/globally");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            globally connected
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(2);
                              this.props.history.push("/about/management");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            Meet the team
                          </Dropdown.Item>
                        </div>
                      ) : null}
                    </MDBDropdown>
                  </MDBNavItem>
                </div>

                <div
                  onMouseEnter={() => {
                    this.setState({ activeHoverMenu: 3 });
                  }}
                  onMouseLeave={() => {
                    this.setState({ activeHoverMenu: "" });
                  }}
                  onClick={() => {
                    this.setState({ activeHoverMenu: 3 });
                  }}
                >
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle style={{ minWidth: 180 }} nav>
                        <span
                          onClick={() => {
                            this.saveToLocalStorage(3);
                            this.props.history.push("/news");
                          }}
                          style={{
                            color:
                              this.state.activeMenu == 3
                                ? "black"
                                : this.state.menuColor,
                          }}
                          className="mr-2 navItemStyle"
                        >
                          news & publications
                        </span>
                      </MDBDropdownToggle>
                      {this.state.activeHoverMenu == 3 ? (
                        <div
                          style={{
                            position: "absolute",
                            border: "0px solid black",
                            zIndex: 99,
                            flex: 1,
                            background: "white",
                            padding: 10,
                          }}
                          className={"menuBox"}
                        >
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(3);
                              this.props.history.push("/news");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            news
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(3);
                              this.props.history.push("/publications");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            publications
                          </Dropdown.Item>

                          <Dropdown.Item
                            onClick={() => {
                              this.saveToLocalStorage(3);
                              this.props.history.push("/calendar");
                            }}
                            className="navItemStyle"
                            style={{ color: this.state.menuColor }}
                          >
                            Events
                          </Dropdown.Item>
                        </div>
                      ) : null}
                    </MDBDropdown>
                  </MDBNavItem>
                </div>

                <MDBNavItem>
                  <MDBNavLink
                    style={{
                      color:
                        this.state.activeMenu == 4
                          ? "black"
                          : this.state.menuColor,
                      textTransform: "uppercase",
                      // fontWeight:
                      //   this.state.activeMenu == 4 ? "bold" : "normal",
                    }}
                    onClick={() => {
                      this.saveToLocalStorage(4);
                      this.props.history.push("/careers");
                    }}
                    to="/careers"
                  >
                    Careers
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    style={{
                      color:
                        this.state.activeMenu == 5
                          ? "black"
                          : this.state.menuColor,
                      textTransform: "uppercase",
                      // fontWeight:
                      //   this.state.activeMenu == 5 ? "bold" : "normal",
                    }}
                    onClick={() => {
                      this.saveToLocalStorage(5);
                      this.props.history.push("/contact");
                    }}
                    to="/contact"
                  >
                    contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav style={{ marginLeft: 50 }} right>
                {this.state.search ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MDBNavItem
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i
                        style={{ marginLeft: 10, cursor: "pointer" }}
                        onClick={() => this.setState({ search: false })}
                        class="fa fa-window-close"
                        aria-hidden="true"
                      ></i>
                    </MDBNavItem>
                    <MDBNavItem style={{ marginLeft: 20 }}>
                      <a
                        target="_blank"
                        style={{ textDecorationLine: "none", color: "black" }}
                        href="https://www.bakertilly.global/en/shared/worldwide-directory/"
                      >
                        <i class="fa fa-globe"></i>
                      </a>
                    </MDBNavItem>
                    <MDBNavItem style={{ marginLeft: 20, cursor: "pointer" }}>
                      <a
                        target="_blank"
                        style={{ textDecorationLine: "none" }}
                        href="https://billy.bakertillyinternational.com/?signin"
                      >
                        <div
                          style={{
                            backgroundColor: "#D1EB50",
                            display: "flex",
                            alignItems: "center",
                            // justifyContent: "center",
                            width: 50,
                            height: 20,
                            flexDirection: "column",
                            borderRadius: 5,
                          }}
                        >
                          <p style={{ color: "white", fontSize: 12 }}>Login</p>
                        </div>
                      </a>
                    </MDBNavItem>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MDBNavItem
                      onClick={() =>
                        this.setState({ search: !this.state.search })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </MDBNavItem>
                    <MDBNavItem
                      // onClick={() => this.props.history.push("/wwd")}
                      style={{ marginLeft: 20, cursor: "pointer" }}
                    >
                      <a
                        target="_blank"
                        style={{ textDecorationLine: "none", color: "black" }}
                        href="https://www.bakertilly.global/en/shared/worldwide-directory/"
                      >
                        <i class="fa fa-globe"></i>
                      </a>
                    </MDBNavItem>
                    <MDBNavItem style={{ marginLeft: 20, cursor: "pointer" }}>
                      <a
                        target="_blank"
                        style={{ textDecorationLine: "none" }}
                        href="https://billy.bakertillyinternational.com/?signin"
                      >
                        <div
                          style={{
                            backgroundColor: "#D1EB50",
                            display: "flex",
                            alignItems: "center",
                            // justifyContent: "center",
                            width: 50,
                            height: 20,
                            flexDirection: "column",
                            borderRadius: 5,
                          }}
                        >
                          <p style={{ color: "white", fontSize: 12 }}>Login</p>
                        </div>
                      </a>
                    </MDBNavItem>
                  </div>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
            {/* </center> */}
          </div>
          {this.state.search ? (
            <div
              style={{
                width: "80%",
                marginBottom: 20,
                marginTop: 20,
                zIndex: 99,
              }}
            >
              <div className="form-group">
                <input
                  onf
                  type="text"
                  className="form-control"
                  placeholder="Search...!"
                  onChange={(e) =>
                    this.setState(
                      {
                        searchOptions: this.state.options
                          .filter((item) =>
                            item.label.toLowerCase()?.includes(e.target.value)
                          )
                          .slice(0, 10),
                      },
                      () => {
                        console.log(this.state.searchOptions);
                      }
                    )
                  }
                />

                {/* </DropdownButton> */}
              </div>

              {this.state.searchOptions.length > 0 ? (
                <div
                  style={{
                    height: 200,
                    overflowY: "scroll",
                    position: "absolute",
                    border: "1px solid black",
                    zIndex: 99,
                    flex: 1,
                    background: "white",
                  }}
                >
                  {this.state.searchOptions?.map((item, i) => (
                    <Dropdown.Item
                      onClick={() => {
                        this.saveToLocalStorage(item.id);
                        this.props.history.push(item.path, {
                          scroll: true,
                        });
                      }}
                      key={i}
                    >
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </div>
              ) : null}

              {/* <Searchable
              autofocus
              value="" //if value is not item of options array, it would be ignored on mount
              placeholder="Search" // by default "Search"
              notFoundText="No result found" // by default "No result found"
              options={this.state.options}
              onSelect={(option) => {
                this.props.history.push(option.path, {
                  scroll: true,
                });
              }}
              listMaxHeight={200} //by default 140
            /> */}
            </div>
          ) : null}
        </MDBNavbar>
      </Router>
    );
  }
}

export default withRouter (Header);
