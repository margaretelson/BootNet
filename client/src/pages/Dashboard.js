import React from "react";
import TitleImage from "../assets/BootNetwork-logo.png";
import { Container } from "react-bootstrap";
<<<<<<< HEAD
=======
import AllUsers from "../components/AllUsers";
>>>>>>> d617afd0d3f2604863206cdaf603fd11e6701a20
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
      {/* <LinkedinCompanyProfile
        lang="en_US"
        companyId={76820747}
        format="inline" // Or "hover"
        text="BootNetwork" // text to show in "hover" format */}
      {/* /> */}
<<<<<<< HEAD
    </Container>
=======
      <AllUsers 
      />
       
    )
    </Container>

    
>>>>>>> d617afd0d3f2604863206cdaf603fd11e6701a20
  );
};

export default Dashboard;