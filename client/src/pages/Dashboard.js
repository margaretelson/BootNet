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
    <Dashboardmain>
      {results.map(result=>
<AllUsers/>
    
      )}

    </Dashboardmain>

  );
};

export default Dashboard;