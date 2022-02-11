import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
import AuditAssurance from "./Screens/Services/auditAssurance";
import CorprateFinance from "./Screens/Services/CorporateFinanceBusiness";
import EenterpriseRisk from "./Screens/Services/EnterpriseRiskManage";
import ForensicAudit from "./Screens/Services/ForensicAuditInvestigation";
import HumanResource from "./Screens/Services/HumanResource";
import InternalAudit from "./Screens/Services/InternalAudit";
import TaxAdvisory from "./Screens/Services/TaxAdvisoryServices";
import OtherAdvisory from "./Screens/Services/OtherAdvisoryServices";
import Vision from "./Screens/About/Vision";
import Mission from "./Screens/About/Mission";
import Values from "./Screens/About/Values";
import Globally from "./Screens/About/globally";
import Management from "./Screens/About/management";
import Detail from "./Screens/About/detail";
import Careers from "./Screens/Careers/Careers";
import Contact from "./Screens/Contact/contact";
import News from "./Screens/News&Publications/News";
import Publications from "./Screens/News&Publications/publications";
import PrivacyStatement from "./Screens/FooterPages/privacyStatement";
import Disclaimer from "./Screens/FooterPages/disclaimer";
import Global from "./Screens/global/global";
import WhyBakertilly from "./Screens/About/WhyBakertilly";
import Calendar from "./components/Calendar.js";

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services/audit" component={AuditAssurance} />
          <Route
            exact
            path="/services/internalaudit"
            component={InternalAudit}
          />
          <Route
            exact
            path="/services/forensicaudit"
            component={ForensicAudit}
          />
          <Route
            exact
            path="/services/corporatefinance"
            component={CorprateFinance}
          />
          <Route exact path="/services/taxadvisory" component={TaxAdvisory} />
          <Route
            exact
            path="/services/enterpriserisk"
            component={EenterpriseRisk}
          />
          <Route
            exact
            path="/services/humanresource"
            component={HumanResource}
          />
          <Route
            exact
            path="/services/otheradvisory"
            component={OtherAdvisory}
          />
          <Route exact path="/about/vision" component={Vision} />
          <Route exact path="/about/mission" component={Mission} />
          <Route exact path="/about/values" component={Values} />
          <Route exact path="/about/globally" component={Globally} />
          <Route exact path="/about/management" component={Management} />
          <Route exact path="/about/detail" component={Detail} />
          <Route exact path="/about/why" component={WhyBakertilly} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/news" component={News} />
          <Route exact path="/publications" component={Publications} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/privacy" component={PrivacyStatement} />
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route exact path="/wwd" component={Global} />
        </Switch>
      </Router>
    );
  }
}
