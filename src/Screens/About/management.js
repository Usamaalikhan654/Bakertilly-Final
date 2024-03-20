import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/about/3.jpg";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import aar from "../../assets/img/partners/aar.png";
import partner1 from "../../assets/img/partners/ark.png";
import partner2 from "../../assets/img/partners/at.png";
import partner3 from "../../assets/img/partners/bak.png";
import faisalyaqub from "../../assets/img/partners/faisal-3.png";
import partner5 from "../../assets/img/partners/mab.png";
import partner6 from "../../assets/img/partners/mar.png";
import partner7 from "../../assets/img/partners/mrs.png";
import partner8 from "../../assets/img/partners/mtr.png";
import partner10 from "../../assets/img/partners/qr.png";
import partner11 from "../../assets/img/partners/riu.png";
import partner12 from "../../assets/img/partners/sa.png";
import partner13 from "../../assets/img/partners/tak.png";
import mas from "../../assets/img/partners/mas.png";
import sk from "../../assets/img/partners/sk.png";
import nm from "../../assets/img/partners/nm.png";
import sua from "../../assets/img/directors/sua.png";
import { Modal, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Ahsan from "../../assets/img/partners/Ahsan.png";
import Faisal1 from "../../assets/img/partners/Faisal.png";
import Aqeel from "../../assets/img/partners/Aqeel.png";
import Naveed from "../../assets/img/partners/Naveed.png";
import najam from "../../assets/img/partners/mn-fotor-bg-remover-20230704234138.png";

export default class Management extends Component {
  componentDidMount() {
    const path = this.props.history.location.hash;

    if (path) {
      this.main.scrollIntoView();
    }

    console.log(path);
  }

  state = {
    modal: false,
    data: {},
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Our Team</title>
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
            <h1>Our Team</h1>
            <div style={{ marginTop: 50 }} className="row">
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Mehmood A. Razzak",
                      details: `Mr. Mehmood Abdul Razzak is the founding and the managing partner heading the Assurance and Business Advisory Services at Baker Tilly. He is a Chartered Accountant. He has over 20 years of experience in conducting the audits of various types of businesses ranging from small family units to large private companies, listed companies and branches and subsidiaries, quoted and unquoted, of multinational companies. Mr. Mehmood has been involved in the planning, execution and review of such audit assignments.\n \n During the course of his career, he has performed audits, other assurance services and agreed upon procedures in the sectors including Pharmaceuticals, Manufacturing, IT/ITeS, Distribution, Infrastructure, Insurance, Brokerage Houses, Mutual Funds, Banks, Modarabas, Non-Banking Financial Companies etc. He has been successfully engaged in a number of consulting assignments, including mergers of Banks, Funds, Modarabas, consultancy on the matters relating to the formation and operations of unit trust schemes, carrying out due diligence engagements for both buy and sell sides. He has also successfully provided consultancy services in the matters relating to formation and commencement of operations of exchange companies in Pakistan. He has served the Southern Regional Committee of the Institute of Chartered Accountants of Pakistan (ICAP). He was actively involved in various Committees of ICAP including Committee on Taxation and has actively participated in finalizing budget proposals for three consecutive years. Currently, he is member of Auditing Standards and Ethics Committee of ICAP. He has also been an active member in different committees of the Income Tax Bar Association Karachi. He has also been an honorary advisor to the Karachi Chamber of Commerce for many years on the matters relating to Indirect Taxation.`,

                      email: "mehmoodrazzak@bakertilly.pk",
                      image: partner6,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner6} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 17,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Mehmood A. Razzak
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Managing Partner - Assurance and Business Advisory Services
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Qamar Rashid",
                      details: `
                        Mr. Qamar Rashid is a Fellow Member of the Institute of Chartered Accountants of Pakistan and a partner at Baker Tilly Mehmood Idrees Qamar.
                        
                        He has diversified experience of performing leading roles in the practice areas of audit and assurances, business advisory and tax consultancy.
                        
                        He has a long and successful career of practicing as partner in reputable firms of Pakistan.
                        
                        He is also a visiting professor of Company Law, Accounting and Auditing at both Foundation and Professional Levels of Chartered Accountancy and ACCA UK in SKANS School of Accountancy.`,

                      email: "qamarrashid@bakertilly.pk",
                      image: partner10,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner10} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 17,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Qamar Rashid{" "}
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Tax Advisory Services
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Muhammad Abdur Rub Khan",
                      details: `
                    
Abdur Rub Khan is also Fellow of the Institute of Chartered Accountant of Pakistan (ICAP) and the Institute of Chartered Secretaries of Pakistan. He is also, a Fellow of Pakistan Institute of Public Finance Accountants (PIPFA) and the Certified Internal Auditor from the Institute of Internal Auditors, USA. He is a partner in the firm and in charge of Kabul operations also.

Working in the field of social service, for the people, through enabling people to work for one another and giving them the potential, skills and courage to be able to stand up and become master of their destiny is the task he has been doing since a long time, starting when his father co-created READ foundation, and later when he joined Islamic Relief. He has founded many other NGOs and most of them are still working, as being taken over. He has also been in HANDS as a consultant for many years and providing back stopping in management operations and financial matters.

During his post qualification experience, he served one of the leading Gas generation company. His diversified experience also comprises serving one of the leading accounting firms in Islamabad. He has vast experience of auditing various organizations in different sectors including telecommunication, electric supply, E&P sector, housing, distribution, pharma etc.

He also possesses valuable reputation for his expertise in the public sector work. He has worked for various NGOs and business houses in his career as a person responsible for arranging finances, management support and other related issues to resolve problems occurring in the development and implementation of various projects and programmes in the field of emergencies, development and provision of livelihood access and support. He has traveled various parts of the word to assess the situation of business and social work maintained around the globe and to improve skills in relations to humanitarian service at the grass root level. He has been the main motivator in the field of micro enterprise development with leading global financiers like World Bank, ADB, USAID, DFID and their counterparts in Pakistan.
                      `,
                      email: "abdurrub@bakertilly.pk",
                      image: partner1,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner1} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Abdur Rub Khan{" "}
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner – Assurance and Business Advisory Services
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Mohammed Rehan Siddiqui",
                      details: `
Mr. Mohammed Rehan Siddiqui serves as Tax partner at Baker Tilly Mehmood Idrees Qamar. He is a Fellow of the Institute of Chartered Accountants of Pakistan and the Institute of Cost and Management Accountants of Pakistan. He is also a member of Karachi Tax Bar Association and member All PTBA. He has earned a reputable fame over his 20 years of experience in the area of direct tax, regulatory compliance with the various regulatory bodies. He possesses valuable experience in tax planning and compliance for both local and overseas entities.

He has considerable experience in expatriate tax compliance, salary packaging and incentive design both for locals and expatriates, handling tax matters of large-scale multinational organizations including the issue of transfer pricing. He has a wide experience of representing number of cases, both individual and corporate, before the judicial forums including Commissioner of Income Tax (Appeals) and Appellate Tribunal Inland Revenue. He also proactively participates in the affairs of the Income Tax Bar Association, Karachi. He also possesses as valuable experience and knowledge regarding various filing requirement with the Federal Board of Revenue, Securities Exchange Commission of Pakistan and State Bank of Pakistan including Foreign Exchange Regulations.

He has presented various papers on different forum such an Institute of Chartered Accountants of Pakistan (ICAP), Karachi Tax Bar Association, (KTBA), Institute of Corporate Secretaries and University of Karachi. He has been a General Secretary of Karachi Tax Bar Association for the term 2011. During his tenure of General Secretary of KTBA he was part of core team who introduced “Professional Development Program” for the training and education of member of the Bar. Presently, he is serving the Bar as the elected Vice President. He was also involved in a project of Government of Sindh with the ICAP for the training and education of the student in respect of accounting, auditing, taxation and corporate matters. He has served following professional bodies:

Currently member of Committee on Taxation of ICAP.
Currently member of Committee on Accounting and Auditing Standards for Interest for mode of Financing & Investment of ICAP.
He is currently member of News and Views Committee of KTBA.
                      `,
                      email: "rehansiddiqui@bakertilly.pk",
                      image: partner7,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner7} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 17,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Mohammed Rehan Siddiqui{" "}
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner – Tax Advisory Services
                  </p>
                </div>
              </div>
              

             
            </div>
            <div style={{ marginTop: 50 }} className="row">
              {/* <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Tariq Ahmad Khan ",
                      details: `
                        Mr. Tariq Ahmad Khan is the Partner-in-Charge at the Islamabad Office of Baker Tilly Mehmood Idrees Qamar and heads its Advisory Services. He is a Chartered Accountant and has well over 30 years’ experience in diversified business interests across Pakistan, Middle East and United Kingdom.
  
                        During his training in reputed accounting firms in Pakistan and United Kingdom, Mr. Khan gained in-depth experience auditing small family businesses, medium-size enterprises as well as listed and unlisted multinational corporations.
                        
                        Prior to returning to the accountancy profession, Mr. Khan gained extensive experience in variegated family conglomerates and blue-chip multinationals in a variety of executive roles and led multiple mergers, acquisitions and divestments, while raising billions of dollars in financing. He has had considerable experience in developing finance strategy and corporate structures whilst keeping in consideration the prevalent legal principles and reporting practices of the country.
                        
                        Mr. Ahmad is a fellow member of the Institute of Chartered Accountants of Pakistan along with being a member of the Canadian Association of Certified Management Consultants, and also holds associate membership of the Association of Certified Fraud Examiner, Austin, USA.
                        `,
                      email: "tariqkhan@bakertilly.pk",
                      image: partner13,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner13} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Tariq Ahmad Khan{" "}
                  </h6>

                  <p
                    // className="aboutContent"
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Assurance and Business Advisory Services
                  </p>
                </div>
              </div> */}

<div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Aqeel Tabani",
                      details: `
                        Mr. Tabani is a Fellow of the Institute of Chartered Accountants of Pakistan (ICAP) and also an associate member of the Institute of Cost and Management Accountants of Pakistan (ICMAP). He is a partner of the firm.
  
                        Mr. Tabani has over 16 years of experience in providing assurance and accounting services. During his career, he has worked as an Audit Manager with KPMG and also acted as Manager-Audit in Sui-Southern Gas Company Limited. He has successfully served as a CFO for one of the largest cement manufacturer in Pakistan.
                        
                        He possesses vast experience in restructuring of the Accounts and MIS departments of various organizations. Such assignments involved documentation of work and transaction flows and recommending improvements thereon, redesigning of source documents and chart of accounts so as to facilitate line and functional authorities in timely finalization of accounts and implementation of computerized accounting software
                        
                        He possesses vast experience in restructuring of the Accounts and MIS departments of various organizations. Such assignments involved documentation of work and transaction flows and recommending improvements thereon, redesigning of source documents and chart of accounts so as to facilitate line and functional authorities in timely finalization of accounts and implementation of computerized accounting software
                        
                        In respect of corporate and business consulting service, Mr. Tabani is also involved in formation of companies, related business advisory and secretarial services. He has attended various national conferences and seminars on assurance service, corporate and tax laws.
                        
                        
                        `,
                      email: "aqeeltabani@bakertilly.pk",
                      image: partner2,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner2} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 17,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Aqeel Tabani{" "}
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Assurance and Business Advisory Services
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Siraj Ahmed",
                      details: `
                      Mr. Siraj Ahmad is a Partner at the Islamabad Office of Baker Tilly Mehmood Idrees Qamar and heads its Auditing and Assurance Services. He is a Chartered Accountant and has over 20 years of experience in conducting audits of, and providing financial and consultancy services to, diverse business interests spanning small and medium enterprises, large private companies as well as quoted and unquoted multinational companies.

                      Prior to his qualification as a Chartered Accountant, Mr. Ahmad trained with a renowned accounting firm, which afforded him substantial exposure in accounting, financial reporting and audit of major private and public corporations, including leading multinationals. Subsequent to his qualification in 1994, Mr. Ahmad established his professional accountancy practice in the year 2000, which spanned across the major metropolitan cities of Pakistan.
                      
                      In the course of his directorship at an international consulting firm, Mr. Ahmad supervised consulting assignments for the public and the private sector in Pakistan, in addition to those of the organizations working for the consummate development of Afghanistan. In conjunction with the above, Mr. Ahmad also possesses a wealth of experience in North America, having provided financial and management consultancy services to clients pertaining to industries as varied as Oil and Gas, IT, Trading and Manufacturing.
                      
                      Mr. Ahmad is a fellow member of the Institute of Chartered Accountants of Pakistan along with being a member of the Canadian Association of Certified Management Consultants, and also holds associate membership of the Association of Certified Fraud Examiner, Austin, USA.
                      `,
                      email: "sirajahmad@bakertillymiq.com",
                      image: partner12,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner12} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Siraj Ahmad
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Assurance and Business Advisory Services
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Bilal Ahmed Khan",
                      details: `
Mr. Bilal Ahmed Khan is the partner and heads the Audit and Assurance Services department at Baker Tilly Mehmood Idrees Qamar, Lahore office. He is a Chartered Accountant and a fellow member of the Institute of Chartered Accountants of Pakistan. He has over 8 years of experience ranging from family-run businesses to large companies in the private sector, listed companies, multinational companies and government entities.

During his career, he has finalized audit, assurance and agreed upon procedures engagements in various sectors including real estate, textile, cement, sugar, automobile, food and allied, information technology and information technology enabled businesses, insurance, brokerage houses, non-banking financial institutions, EPC, public and other sectors.

He has also served as Chief Financial Officer in a leading EPC company where he was actively involved in merger and acquisitions, operations, due diligence activities, mergers and acquisition and restructuring activities of the group.

He is also engaged in educational, training and capacity development activities such as departmental training of gazette officers of Federal Board of Revenue, excise and taxation and other capacity building engagements in public and private sector. He is skilled professional in Supply Chain Management and serves as specialized faculty member with some of the renowned private sector universities.
                      `,
                      email: "bilal.khan@bakertilly.pk",
                      image: partner3,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner3} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Muhammad Bilal Ahmed
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Assurance and Business Advisory Services
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Muhammad Abu Bakar",
                      details: `
                      Mr. Muhammad Abu Baker is a Fellow Member of the Institute of Chartered Accountants of Pakistan (ICAP) and a fellow Member of Association of Chartered Certified Accountants UK. He is also a BSc (Hons) in Applied Accounting from Oxford Brookes University UK. He is a partner business advisory services and ERP in the Lahore branch of the firm.

                      Mr. Muhammad Abu Bakar is a seasoned professional with 17 years of experience in practice. His experience spreads across Asia (Pakistan, Yemen and Iran) and Africa (Mauritius) where he has led various audit and business advisory engagements. His clients include some of Fortune 500 companies.
                      
                      His experience with Ernst & Young as manager-audit and assurance services provided him an opportunity to handle a wide portfolio of clients including oil & gas exploration and production companies, construction companies, manufacturing companies, micro-financing companies, service organizations and various United Nations and European Commission projects.
                      
                      Being business advisory partner and ERP, he is leading a team of dedicated professionals in the provision of quality services like valuations, business plans, agreed upon procedures, fraud investigations and para-legal matters.
                      
                      He is also leading projects pulling together the full IT Systems equation including system design, application build, infrastructure build, transformation, hardware, software, hosting and application management. Delivered IT enabled business services, which help organizations in the private sectors to operate more efficiently and profitably.
                      
                      He has led the development of the following off-the-shelf solutions for SMEs which are successfully being used by various organizations.                      
                         `,
                      email: "abubakar@bakertilly.pk",
                      image: partner5,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner5} style={{ width: "100%", height: "64%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Muhammad Abu Bakar
                  </h6>

                  <p
                    // className="aboutContent"
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner – Business Advisory Services and Enterprise Resource
                    Planning
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 50 }} className="row">
          

              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Muhammad Tariq Rafique",
                      details: `
                  
Mr. Tariq is an Associate member of the Institute of Chartered Accountants of Pakistan. He was engaged in assurance and advisory assignments of various multinational, listed and non-listed entities during his association with A.F. Ferguson & Co. Chartered Accountants (a member firm of Price Waterhouse Coopers). His experience ranges from planning, execution and finalization of audits of listed and non-listed entities to documentation of accounting procedures, reviewing such procedures, and identifying weaknesses thereof. He has also been involved in various consulting assignments including incorporation of a public service utility company in interior Sindh with the aid of Asian Development Bank. He deals with the business advisory services in our firm.
                      `,
                      email: "tariqrafique@bakertilly.pk",
                      image: partner8,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner8} style={{ width: "100%", height: "64%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Muhammad Tariq Rafique
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner – Business Advisory Services
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Rizwan Iqbal Umer",
                      details: `                
  Mr. Rizwan Iqbal Umer is an Associate member of the Institute of Chartered Accountants of Pakistan. He completed his early education from BVS Parsi High School in 1992 and then went on to complete the Graduation from The Government College of Commerce & Economics in 1996. He then joined A.F Ferguson & Co for his articles and got associated with the Institute of Chartered Accountants of Pakistan in 2001. He served A.F.Ferguson’s Tax department for two years and then joined Baker Tilly in 2013 as Partner Tax Advisory Services. He possesses valuable experience in tax planning and compliance for both local and overseas entities.
  
  He has considerable experience in expatriate tax compliance, salary packaging and incentive design both for locals and expatriates, handling tax matters of large-scale multinational organizations including the issue of transfer pricing. He has a wide experience of representing number of cases, both individual and corporate, before the judicial forums including Commissioner of Income Tax (Appeals) and Appellate Tribunal Inland Revenue.
                        `,
                      email: "rizwaniqbal@bakertilly.pk",
                      image: partner11,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={partner11} style={{ width: "100%", height: "64%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Rizwan Iqbal Umer
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner – Tax Advisory Services
                  </p>
                </div>
              </div>

              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Ahsan Rasheed",
                      details: `
                      Mr. Ahsan Rasheed is heading the Management and Business Advisory Function at the Faisalabad office of Bakertilly Pakistan. He is a Fellow member of the Institute of Chartered Accountants of Pakistan (ICAP) and an Associate member of Institute of Chartered Accounants of England and Wales. His affiliation with ICAP also includes working as member of several working committees of the ICAP. He has an experience of over 12 years of working at senior management positions including the positions of CFO, Director Finance and COO in large manufacturing concerns. Mr. Ahsan has an extensive experience in handling complex financial transactions in the group structures including private acquisitions, dissolution and foreclosures. 
His experience also includes setting up and successfully running one of Pakistan’s biggest e-commerce store. He has also received trainings and certifications in Advanced Corporate Finance, Forensic and Internal Audits from leading organizations both in Pakistan and outside Pakistan.

                     `,
                      email: "ahsanrasheed@bakertilly.pk",
                      image: Ahsan,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={Ahsan} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Ahsan Rasheed
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Business Advisory Services
                  </p>
                </div>
              </div>

              {/* <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Muhammad Faisal Yaqub",
                      details: `Mr. Muhammad Faisal Yaqub is Partner at the Islamabad Office of Baker Tilly Mehmood Idrees Qamar and leads its Taxation Advisory Services. He is an associate member of the Institute of Chartered Accountants of Pakistan and the Pakistan Institute of Public Finance Accountants. He has over 10 years’ experience in various aspects of the profession as well as in-depth knowledge of the industries that he has worked for. Before joining Baker Tilly, he has served as Head of Taxation of renowned corporate groups in Pakistan.`,
                      email: "faisalyaqub@bakertilly.pk",
                      image: faisalyaqub,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img
                  src={faisalyaqub}
                  style={{ width: "100%", height: "64%" }}
                />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Muhammad Faisal Yaqub
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner – Tax Advisory Services
                  </p>
                </div>
              </div> */}
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Faisal Ali Butt",
                      details: `
                      Mr. Faisal Ali Butt is heading Audit and Secretarial departments at Faisalabad office of Baker Tilly Pakistan. He is an associate member of Institute of Chartered Accountants of Pakistan and Law Graduate from Univerty of the Punjab. He has diversified experience in fields of audit, taxation and Secretarial assignments of listed and non listed clients in different industry sectors including textile, chemical, construction, Information technology, transportation, real estate, brokerage houses, food and Modarabas.
During course of his career Mr. Faisal has conducted multiple assignments of system design and implementation including system audit of multiple clients. He has successfully conducted multiple Quality Control Reviews by Institute of Chartered Accountant of Pakistan. Before joining Baker Tilly he has headed one of the oldest and renowned Chartered Accountant firm office as Partner. 


                     `,
                      email: "faisalali@bakertilly.pk",
                      image: Faisal1,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={Faisal1} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Faisal Ali Butt
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Partner - Audit and Assurance
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Muhammad Najamussaqib Shah",
                      details: `
                      Najmussaqib Shah, a Fellow Member of the Institute of Chartered Accountants of Pakistan (ICAP), is a seasoned professional with a successful career spanning over two decades. He has a proven track record of delivering exceptional audit and assurance services to clients across diverse industries.
Having served prestigious firms such as KPMG, EY, Grant Thornton, Crowe Horwath, and currently serving as a Partner at Baker Tilly, Najmussaqib has acquired extensive experience and led transformative initiatives. He has spearheaded the implementation of new audit tools and data analytics, contributing to enhanced efficiency and effectiveness.
His expertise lies in financial reporting adhering to international standards, including IFRS and US GAAP, as well as providing assurance services in alignment with ISAs, GAGAS, and US GAAS. He possesses a strong proficiency in data analytics, forensic audits, due diligence, troubled debt restructuring, and financial planning.
With a deep understanding of the banking, telecom, energy, oil & gas, and development sectors, Najmussaqib has also successfully led several assignments for prominent public sector entities. His experience extends to cross-border projects across Europe, Africa, CIS, and South Asia, which were funded by European Commission, USAID, UNDP, UNICEF, UNFPA, KfW, DFID, and GIZ.



                     `,
                      // email: "muhammadnajamussaqibshah@bakertilly.pk",
                      image: najam,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={najam} style={{ width: "100%" , height: "68%"}} />
                <div style={{ marginTop: 10 }}>
                  <h6 style={{ fontSize: 18, fontFamily: "robotoRegular",textAlign: "center"}}>Muhammad Najamussaqib Shah</h6>

                  <p style={{ color: "gray", fontWeight: "300", fontSize: 15, textAlign: "center" }}>
                  Partner - Tax Advisory Services
                  </p>
                </div>
              </div>
                <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Ali A. Rahim",
                      details: `
                        Mr. Ali A. Rahim is a Director Tax Advisory Services at Baker Tilly Mehmood Idrees Qamar. He is a Bachelor of Commerce, a Certified Income Tax Practitioners and fellow of the Institute of Tax Management. He looks after the cases of both individual and corporate sectors at the adjudication level, and also successfully handled cases at Commissioner Appeal and at Income Tax Appellate Forums. He is also involved in forwarding cases for appeal to High Court and Supreme Court and follow-up of the same.
  
                        He has been actively involved in the BAR activities and was General Secretary of the BAR in the years 1999 and 2004. He was the President of the BAR in the years 2006 and 2010. He is also regularly and pro-actively involved in recommending proposals to the Federal Government regarding Income Tax provisions adversely affecting the business sector, to cater the emerging needs of the economic growth. He is still actively involved as advisor to the Karachi Tax Bar and also the Pakistan Tax Bar.
  
                        He is also on the advisory board of the Karachi Chamber of Commerce and Industry and on the Federation of Pakistan Chamber of Commerce and Industry.`,
                      email: "alirahim@bakertilly.pk",
                      image: aar,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={aar} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Ali A. Rahim{" "}
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Director – Tax Advisory Services.
                  </p>
                  <p
                    style={{ color: "gray", fontWeight: "300", fontSize: 13 }}
                  ></p>
                </div>
              </div>
              <div
                onClick={() =>
                  this.setState({
                    modal: true,
                    data: {
                      name: "Naeem Mehmood",
                      details: `
    Mr. Naeem Mahmood is a Director Corporate and Business Advisory Services at Baker Tilly Mehmood Idrees Qamar looking after the corporate affairs matters. He holds a Master’s Degree in Commerce from the University of Karachi.
    
    He has over more than 26 years of experience in providing corporate and regulatory advisory services. Briefly, He has been looking after SECP corporate secretarial matters including formation and closure of companies, issuance of shares, appointment of officers, representation of companies before concerned commissioners etc.
                     `,

                      email: "naeemmehmood@bakertilly.pk",
                      image: nm,
                    },
                  })
                }
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={nm} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Naeem Mehmood
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Director – Corporate and Business Advisory
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Muneeb Ahmed Siddiqui",
                      details: `
                      Mr. Muneeb Ahmed is the Director Assurance and Business Advisory Services at Baker Tilly Mehmood Idrees Qamar. He has over 12 years of significant experience in conducting the audit and assurance engagements of various types of businesses ranging from small family units to large private companies, listed companies and branches and subsidiaries, quoted and unquoted, of multinational companies. During his articles from A.F. Ferguson & Co (A member firm of PWC Network), Mr. Muneeb was involved in the planning and execution of audit engagements.
                      
                      During the course of his career with Baker Tilly, he has performed audits, other assurance services and agreed upon procedures in the sectors including Banks, Foreign Exchange companies, Mining and Exploration, Pharmaceuticals, Manufacturing, Distribution, Insurance, Brokerage Houses, Mutual Funds, Modarabas, Non-Banking Financial Companies, NGOs / NPOs, large import houses, news agencies, etc.
                      
                      In addition to his assurance work, his experience includes range of advisory services including financial and tax due diligences, forensic investigations, business valuations, business process review and improvement, internal audits, system audits, CDC compliance audits, etc. He also manages complex accounting works.
                      
                      He is also responsible to ensure the overall firms’ audit quality with the managing partner and deal with the Quality Control Reviews and Regulators.
                      `,
                      email: "muneebahmed@bakertilly.pk",
                      image: mas,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={mas} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Muneeb Ahmed Siddiqui
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Director – Assurance and Business Advisory Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 50 }}>
            
             
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Salman Khattak",
                      details: `Mr. Salman Khattak is the Director and heads the Audit and assurance services at Baker Tilly Mehmood Idrees Qamar Afghanistan Office. He is a Cost and Management Accountants and has a Master degree in business administration. He has over 15 years of experience in conducting the audits of various sectors including public, private and not for profit organizations. He conducted and supervised various external and internal audits.

                      He has over more than 26 years of experience in providing corporate and regulatory advisory services. Briefly, He has been looking after SECP corporate secretarial matters including formation and closure of companies, issuance of shares, appointment of officers, representation of companies before concerned commissioners etc.
                      
                      He is also an expert in project development and designing. He has a specific interest in the design of project financial models adapted to the financial reporting needs of entrepreneurs/NGOs and industry. He worked for number of international and local Non-Government Organizations (NGOs) in Pakistan and Afghanistan. His key strengths include Accounting, Auditing, QuickBooks, training, module development, system designing and risk assessment, organizational development, business planning and project impact assessment.
                      
                      He has also been an active member in different committees of the Income Tax Law of Afghanistan. He has also been an advisor to International Chamber of Commerce of Afghanistan.`,
                      email: "salmankhattak@bakertilly.pk",
                      image: sk,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img src={sk} style={{ width: "100%", height: "68%" }} />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Salman Khattak
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Director - Audit and Assurance
                  </p>
                </div>
              </div>
              
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Naveed Abbass",
                      details: `
                      Mr. Naveed Abbass is heading the Indirect Taxation and Financial Advisory Departments in the Faisalabad Office of Baker Tilly Pakistan. He is an Alumni of the University of Punjab, Pakistan. He has more than two decades of experience working at senior management positions including the positions of CFO, Director Finance and COO in large manufacturing and service provider concerns in Pakistan, Europe and USA. 
While serving in the industry Mr. Naveed Abbass has negotiated with all leading banks of Pakistan for project financing, working capital funding and restructuring of banking facilities. His experience also includes setting up a hospital with private medical college and successfully running the project as executive director finance.  
Mr. Naveed Abbass has extensive experience in federal and provincial sales tax and federal excise matters encompassing registrations, monthly sales tax returns, refund processing and post refund audits.


                     `,
                      email: "naveedabbass@bakertilly.pk",
                      image: Naveed,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img
                  src={Naveed}
                  style={{ width: "95%", height: "68%", marginLeft: "10px" }}
                />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Naveed Abbass
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Director - Tax Advisory Services
                  </p>
                </div>
              </div>
              
            </div>

            <div style={{ marginTop: 50 }} className="row">
          

              
              
            </div>

            {/* <div style={{ marginTop: 50 }} className="row">
              <div
                onClick={() => {
                  this.setState({
                    modal: true,
                    data: {
                      name: "Naveed Abbass",
                      details: `
                      Mr. Naveed Abbass is heading the Indirect Taxation and Financial Advisory Departments in the Faisalabad Office of Baker Tilly Pakistan. He is an Alumni of the University of Punjab, Pakistan. He has more than two decades of experience working at senior management positions including the positions of CFO, Director Finance and COO in large manufacturing and service provider concerns in Pakistan, Europe and USA. 
While serving in the industry Mr. Naveed Abbass has negotiated with all leading banks of Pakistan for project financing, working capital funding and restructuring of banking facilities. His experience also includes setting up a hospital with private medical college and successfully running the project as executive director finance.  
Mr. Naveed Abbass has extensive experience in federal and provincial sales tax and federal excise matters encompassing registrations, monthly sales tax returns, refund processing and post refund audits.


                     `,
                      email: "naveedabbass@bakertilly.pk",
                      image: Naveed,
                    },
                  });
                }}
                className="col-lg-3 col-md-3 col-sm-2 imageContainer"
              >
                <img
                  src={Naveed}
                  style={{ width: "95%", height: "77%", marginLeft: "10px" }}
                />
                <div style={{ marginTop: 10 }}>
                  <h6
                    style={{
                      fontSize: 18,
                      fontFamily: "robotoRegular",
                      textAlign: "center",
                    }}
                  >
                    Naveed Abbass
                  </h6>

                  <p
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Director - Tax Advisory Services
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <Modal size="lg" keyboard show={this.state.modal} onHide={this.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.data?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-4">
                <img style={{ width: "100%" }} src={this.state.data?.image} />
                <br />
                <br />
                <a href={`mailto:${this.state.data?.email}`}>
                  {this.state.data?.email}
                </a>
              </div>
              <div className="col-md-8">{this.state.data?.details}</div>
            </div>
          </Modal.Body>
        </Modal>
      </MainContainer>
    );
  }
}
