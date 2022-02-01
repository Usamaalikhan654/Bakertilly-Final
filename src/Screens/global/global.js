import { MDBView } from "mdbreact";
import React, { Component } from "react";
import MainContainer from "../../containers/MainContainer";
import Banner from "../../assets/img/GB.png";
import "../../assets/styles/style.css";
import { themeColor } from "../../config";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Helmet } from "react-helmet";

export default class Global extends Component {
  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Global</title>
        </Helmet>
        <MDBView>
          <img
            className="d-block w-100 banner"
            src={Banner}
            alt="First slide"
          />
        </MDBView>
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
            <h3>
              Baker Tilly is present in 145 countries worldwide with individual
              and innovative consulting services.
            </h3>

            <Accordion style={{ marginTop: 50 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h3>Africa</h3>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography style={{ fontSize: 25 }}>
                  Angola{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.pt/"
                    >
                      https://www.bakertilly.pt/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Benin{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.bj/"
                    >
                      https://www.bakertilly.bj/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Botswana{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillygwatidzo.co.bw"
                    >
                      http://www.bakertillygwatidzo.co.bw
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Cameroon{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.aacbti.com"
                    >
                      http://www.aacbti.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Egypt{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillywag.com/"
                    >
                      http://www.bakertillywag.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Gabon{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.newacegabon.com/"
                    >
                      http://www.newacegabon.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Ghana{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyandahandandah.com/"
                    >
                      http://www.bakertillyandahandandah.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Ivory Coast{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.ci/"
                    >
                      https://www.bakertilly.ci/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Kenya{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.ke/"
                    >
                      http://www.bakertilly.ke/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Liberia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertillylr.com/"
                    >
                      https://www.bakertillylr.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Mauritius{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillymu.com/"
                    >
                      http://www.bakertillymu.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Mozambique{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.com.pt/"
                    >
                      http://www.bakertilly.com.pt/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Nigeria{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.ng/"
                    >
                      https://www.bakertilly.ng/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Rwanda{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:btmrwanda@meraliscpa.com"
                    >
                      btmrwanda@meraliscpa.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Senegal{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.erabti.com/"
                    >
                      http://www.erabti.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Seychelles{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.sc/"
                    >
                      http://www.bakertilly.sc/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Sierra Leone{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.sl/"
                    >
                      http://www.bakertilly.sl/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Somalia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillymeralis.co.ke/"
                    >
                      http://www.bakertillymeralis.co.ke/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  South Africa{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertillygreenwoods.co.za/"
                    >
                      https://www.bakertillygreenwoods.co.za/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Tanzania{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.co.tz/"
                    >
                      http://www.bakertilly.co.tz/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Tunisia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.cnf-tn.com/CNF/"
                    >
                      http://www.cnf-tn.com/CNF/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Uganda{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.global/en/shared/worldwide-directory/africa/uganda/baker-tilly/"
                    >
                      https://www.bakertilly.global/en/shared/worldwide-directory/africa/uganda/baker-tilly/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Zambia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://bakertilly.co.zw/"
                    >
                      http://bakertilly.co.zw/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Zimbabwe{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://bakertilly.co.zw/"
                    >
                      http://bakertilly.co.zw/
                    </a>
                  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h3>Europe & Middle East</h3>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography style={{ fontSize: 25 }}>
                  Albania{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyalbania.com"
                    >
                      http://www.bakertillyalbania.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Andorra{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.bakertilly.es"
                    >
                      www.bakertilly.es
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Armenia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyarmenia.com"
                    >
                      http://www.bakertillyarmenia.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Austria{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.at/en"
                    >
                      https://www.tpa-group.at/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Azerbaijan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyaz.az"
                    >
                      http://www.bakertillyaz.az
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Bahrain{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:mago@bakertillyjfc.com"
                    >
                      mago@bakertillyjfc.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Belarus{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.by/"
                    >
                      www.bakertilly.by
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Belgium{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillybelgium.be"
                    >
                      http://www.bakertillybelgium.be
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Bosnia & Herzegovina{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyreopinion.ba"
                    >
                      http://www.bakertillyreopinion.ba
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Bulgaria{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyklitou.bg"
                    >
                      http://www.bakertillyklitou.bg
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Croatia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.bakertilly.hr"
                    >
                      www.bakertilly.hr
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Cyprus{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.bakertilly.com.cy"
                    >
                      www.bakertilly.com.cy
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Czech Republic{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.tpa-group.cz"
                    >
                      www.tpa-group.cz
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Denmark{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.dk"
                    >
                      http://www.bakertilly.dk
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Estonia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.btb.ee"
                    >
                      http://www.btb.ee
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Finland{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.btf.fi"
                    >
                      http://www.btf.fi
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  France{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyfrance.com"
                    >
                      http://www.bakertillyfrance.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Georgia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillygeorgia.ge"
                    >
                      http://www.bakertillygeorgia.ge
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Gibraltar{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillygibraltar.gi"
                    >
                      http://www.bakertillygibraltar.gi
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Greece{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillygreece.com"
                    >
                      http://www.bakertillygreece.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Guernsey{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.bakertilly.je"
                    >
                      www.bakertilly.je
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Hungary{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.hu/en"
                    >
                      https://www.tpa-group.hu/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Iceland{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://bakertilly.is/"
                    >
                      https://bakertilly.is/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Iraq{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:Ihsan@bakertillymeralis.com"
                    >
                      Ihsan@bakertillymeralis.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Ireland{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyhb.ie/"
                    >
                      http://www.bakertillyhb.ie/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Isle of Man{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyiom.com"
                    >
                      http://www.bakertillyiom.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Israel{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.co.il"
                    >
                      http://www.bakertilly.co.il
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Italy{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyrevisa.it"
                    >
                      http://www.bakertillyrevisa.it
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Jersey{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.je/"
                    >
                      https://www.bakertilly.je/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Jordan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyrafidi.com"
                    >
                      http://www.bakertillyrafidi.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Kazakhstan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.kz"
                    >
                      http://www.bakertilly.kz
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Kosovo{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillykosovo.com"
                    >
                      http://www.bakertillykosovo.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Kuwait{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillykuwait.com"
                    >
                      http://www.bakertillykuwait.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Kyrgyz Republic{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://bakertilly-ca.com/russian/"
                    >
                      https://bakertilly-ca.com/russian/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Latvia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillybaltics.lv"
                    >
                      http://www.bakertillybaltics.lv
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Lebanon{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyzacca.com"
                    >
                      http://www.bakertillyzacca.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Lichtenstein{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:info@fiduciana.com"
                    >
                      info@fiduciana.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Lithuania{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.sac.lt/"
                    >
                      http://www.sac.lt/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Luxembourg{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.ifgroup.lu"
                    >
                      http://www.ifgroup.lu
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Macedonia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyjoanidis.com"
                    >
                      http://www.bakertillyjoanidis.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Malta{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillysant.com"
                    >
                      http://www.bakertillysant.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Moldova{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyklitou.md"
                    >
                      http://www.bakertillyklitou.md
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Netherlands{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyberk.nl"
                    >
                      http://www.bakertillyberk.nl
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Northern Ireland{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillymooneymoore.co.uk"
                    >
                      http://www.bakertillymooneymoore.co.uk
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Norway{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.grimsrud.no"
                    >
                      http://www.grimsrud.no
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Oman{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyjfc.com"
                    >
                      http://www.bakertillyjfc.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Palestine{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:philipfarrage@gmail.com"
                    >
                      philipfarrage@gmail.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Poland{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.pl/en"
                    >
                      https://www.tpa-group.pl/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Portugal{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.com.pt"
                    >
                      http://www.bakertilly.com.pt
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Qatar{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.bakertillyjfc.com"
                    >
                      www.bakertillyjfc.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Romania{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.ro/en"
                    >
                      https://www.tpa-group.ro/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Russia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.ru"
                    >
                      http://www.bakertilly.ru
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Saudi Arabia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:mago@bakertillyjfc.com"
                    >
                      mago@bakertillyjfc.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Serbia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.rs/en"
                    >
                      https://www.tpa-group.rs/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Slovakia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.sk/en"
                    >
                      https://www.tpa-group.sk/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Slovenia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.tpa-group.si/en"
                    >
                      https://www.tpa-group.si/en
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Spain{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.es"
                    >
                      http://www.bakertilly.es
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Sweden{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.se"
                    >
                      http://www.bakertilly.se
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Switzerland{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyobt.ch"
                    >
                      http://www.bakertillyobt.ch
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Tajikistan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://bakertilly.tj/en/"
                    >
                      http://bakertilly.tj/en/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Turkey{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.gureli.com.tr"
                    >
                      http://www.gureli.com.tr
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Ukraine{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.ua"
                    >
                      http://www.bakertilly.ua
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  United Arab Emirates{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="www.bakertilly.ae"
                    >
                      www.bakertilly.ae
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Uzbekistan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyuz.com"
                    >
                      http://www.bakertillyuz.com
                    </a>
                  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h3>Latin America</h3>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Argentina{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyargentina.com"
                    >
                      http://www.bakertillyargentina.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Bolivia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.villazonmartinez.com"
                    >
                      http://www.villazonmartinez.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Brazil{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillybrasil.com.br"
                    >
                      http://www.bakertillybrasil.com.br
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Chile{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillychile.cl"
                    >
                      http://www.bakertillychile.cl
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Colombia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillycolombia.com"
                    >
                      http://www.bakertillycolombia.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Costa Rica{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillycostarica.com"
                    >
                      http://www.bakertillycostarica.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Dominican Republic{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:pedro.chalas@bakertillyrd.com"
                    >
                      pedro.chalas@bakertillyrd.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Ecuador{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyecuador.com"
                    >
                      http://www.bakertillyecuador.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  El Salvador{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.acn.com.sv"
                    >
                      http://www.acn.com.sv
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Guatemala{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyguatemala.com"
                    >
                      http://www.bakertillyguatemala.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Honduras{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.iriasyasociados.com"
                    >
                      http://www.iriasyasociados.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Mexico{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="https://www.bakertilly.mx/"
                    >
                      https://www.bakertilly.mx/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Nicaragua{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillynicaragua.com"
                    >
                      http://www.bakertillynicaragua.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Panama{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillypanama.com"
                    >
                      http://www.bakertillypanama.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Paraguay{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:dolly.diaz@bakertillyparaguay.com.py"
                    >
                      dolly.diaz@bakertillyparaguay.com.py
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Peru{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyperu.com.pe"
                    >
                      http://www.bakertillyperu.com.pe
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Uruguay{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyuruguay.com.uy"
                    >
                      http://www.bakertillyuruguay.com.uy
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Venezuela{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyvenezuela.com/"
                    >
                      http://www.bakertillyvenezuela.com/
                    </a>
                  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h3>Asia Pacific</h3>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Afghanistan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.pk"
                    >
                      http://www.bakertilly.pk
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Australia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.pitcher.com.au"
                    >
                      http://www.pitcher.com.au
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Bangladesh{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.acnabin.com"
                    >
                      http://www.acnabin.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Cambodia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.com.kh/"
                    >
                      http://www.bakertilly.com.kh/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  China{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillychina.com"
                    >
                      http://www.bakertillychina.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Hong Kong{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyhk.com"
                    >
                      http://www.bakertillyhk.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  India{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.dhc.co.in"
                    >
                      http://www.dhc.co.in
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Indonesia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.johanmalonda.com"
                    >
                      http://www.johanmalonda.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Japan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillyjapan.jp"
                    >
                      http://www.bakertillyjapan.jp
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Korea{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.sungto.co.kr"
                    >
                      http://www.sungto.co.kr
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Macau{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillymacao.com.mo"
                    >
                      http://www.bakertillymacao.com.mo
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Malaysia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillymh.com.my"
                    >
                      http://www.bakertillymh.com.my
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Mongolia{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.dalaivanaudit.mn"
                    >
                      http://www.dalaivanaudit.mn
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Myanmar{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillymyanmar.com/"
                    >
                      http://www.bakertillymyanmar.com/
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Nepal{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillynepal.com"
                    >
                      http://www.bakertillynepal.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  New Zealand{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.staplesrodway.com"
                    >
                      http://www.staplesrodway.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Pakistan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.pk"
                    >
                      http://www.bakertilly.pk
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Philippines{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.cgco.com.ph"
                    >
                      http://www.cgco.com.ph
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Singapore{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillytfw.com"
                    >
                      http://www.bakertillytfw.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Sri Lanka{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:anura@eco.lk"
                    >
                      anura@eco.lk
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Taiwan{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.clockcpa.com.tw"
                    >
                      http://www.clockcpa.com.tw
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Thailand{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillythailand.com"
                    >
                      http://www.bakertillythailand.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Vietnam{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.a-c.com.vn"
                    >
                      http://www.a-c.com.vn
                    </a>
                  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h3>North America</h3>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography style={{ fontSize: 25 }}>
                  Bahamas{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.btgomez.com"
                    >
                      http://www.btgomez.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Barbados{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:ayub.kola@askbarbados.com"
                    >
                      ayub.kola@askbarbados.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Belize{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:mch@bakertillyhulse.com"
                    >
                      mch@bakertillyhulse.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Bermuda{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="mailto:kinsley@zobec.bm"
                    >
                      kinsley@zobec.bm
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Britische Jungferninseln{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.belmontbvi.com"
                    >
                      http://www.belmontbvi.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Curacao{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="	
                      http://www.bakertillycuracao.com"
                    >
                      http://www.bakertillycuracao.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Jamaica{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://bakertilly.com.jm"
                    >
                      http://bakertilly.com.jm
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Kaimaninseln{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillycayman.com"
                    >
                      http://www.bakertillycayman.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Canada{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.collinsbarrow.com"
                    >
                      http://www.collinsbarrow.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Mexico{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="	
                      http://www.bakertillymexico.com"
                    >
                      http://www.bakertillymexico.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Puerto Rico{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillypr.com"
                    >
                      http://www.bakertillypr.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  St. Maarten{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertillystmaarten.com"
                    >
                      http://www.bakertillystmaarten.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  Trinidad & Tobago{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="leslie.ramcharitar@bakertillytt.com"
                    >
                      leslie.ramcharitar@bakertillytt.com
                    </a>
                  </span>
                </Typography>

                <Typography style={{ fontSize: 25, marginTop: 40 }}>
                  USA{" "}
                  <span style={{ marginLeft: 20 }}>
                    <a
                      target="_blank"
                      style={{ color: "black" }}
                      href="http://www.bakertilly.com"
                    >
                      http://www.bakertilly.com
                    </a>
                  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </MainContainer>
    );
  }
}
