import React from 'react';
import MainContainer from '../containers/MainContainer';
import Banner from "../assets/img/img06.jpg";
import "../assets/styles/style.css";
import { themeColor } from "../config";
import { MDBView } from "mdbreact";
import Table from 'react-bootstrap/Table'
import Iframe from 'react-iframe';
import { blue, grey } from '@material-ui/core/colors';
import "./calendar.css";

function Calendar() {
  return (
    <MainContainer>
    <div class="mainSpp">
    {/* <div class="header">
    <a href="https://monday.com?utm_source=virality&amp;utm_campaign=embedded_board&amp;utm_banner=monday_logo">
      <img class="companyLogo" src="https://files.monday.com/use1/logos/5392098/thumb/baker_tilly_global_office_logo_308982.png"/>
    </a>
    </div> */}

<Iframe src="https://view.monday.com//embed/2101668590-92ee3f7c99378a25dbdf35192b81046a?r=use1" className='embeddedBoard'>

</Iframe>
  </div>
  </MainContainer>
  )
}

export default Calendar;
