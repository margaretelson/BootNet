import React from "react";
import { useState } from "react";
//import TitleImage from "../assets/BootNetwork-logo.png";
//import { Container } from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import Dashboardmain from "../components/Dashboardmain";
//import UsersCard from "../components/UsersCard";

/// get request to get the saved results

// /// get request to get the saved results

//display results.map()
//
const Dashboard = () => {
  // const [results, setResults] = useState([]);
  return (
    <Dashboardmain>
      {/* {results.map(results => */}
      <AllUsers/>
    
      {/* )} */}

    </Dashboardmain>

  );
};
export default Dashboard;
