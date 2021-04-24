import React from "react";
import TitleImage from "../assets/BootNetwork-logo.png";
import { Container } from "react-bootstrap";
import Dashboardmain from "../components/DashboardALL";
// import { LinkedinCompanyProfile } from "react-social-plugins";

const Dashboard = () => {
  return (
    <Container>
      <div className="title-image">
        <img src={TitleImage} alt="BootNetwork" />
      </div>
      <div>
        <h2>There's strength in alumni</h2>
      </div>

  <Dashboardmain></Dashboardmain>
    </Container>
  );
};

export default Dashboard;
