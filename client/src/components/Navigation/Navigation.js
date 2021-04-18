import React from "react";
import HeaderImage from "../../assets/header.png";
import { Link } from "react-router-dom";
import BootLogo from "../../assets/logo-sans-title.png";
import { Container } from "react-bootstrap";


const Navigation = () =>
{
  return <Container>

    <div className="nav-container">
      <ul>
        <Link to="/"><img style={{ width: "44px" }} src={BootLogo} alt="Cloud logo" /></Link>
        <Link className="link" to="/dashboard">Dashboard</Link>
        <Link className="link" to="/search">Alumni Search</Link>
        {/* <a className="link" href={LogIn}>Log In</a> */}
      </ul>
    </div>

    <div>
      <img
        src={HeaderImage}
        alt="Clip art rendering of a modern office"
        className="header"
      />
    </div>


  </Container>;
}
export default Navigation