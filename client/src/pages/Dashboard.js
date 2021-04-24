import React from "react";
import  { useState } from 'react';
import { Container } from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import Dashboardmain from "../components/DashboardALL";
import UsersCard from "../components/UsersCard";


/// get request to get the saved results




//display results.map()
//
const Dashboard = () => {
  const [results,setResults] = useState([])
  return (
<<<<<<< HEAD
    <Container>
      <div className="title-image">
        <img src={TitleImage} alt="BootNetwork" />
      </div>
      {/* <div>
        <h2>There's strength in alumni</h2>
      </div> */}
      {/* <LinkedinCompanyProfile
        lang="en_US"
        companyId={76820747}
        format="inline" // Or "hover"
        text="BootNetwork" // text to show in "hover" format */}
      {/* /> */}
    </Container>
=======
    <Dashboardmain>
      {results.map(result=>
<AllUsers/>
    
      )}

    </Dashboardmain>

>>>>>>> 10b060f52a91bb439d508458b9cef35de9056fec
  );
};

export default Dashboard;
