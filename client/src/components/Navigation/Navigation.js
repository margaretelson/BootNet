import React from "react";
import HeaderImage from "../../Assets/header.png";
import { Link } from "react-router-dom";
import BootLogo from "../../Assets/logo-sans-title.png";
import { Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container>
      <div className="nav-container">
        <Link to="/">
          <img style={{ width: "50px" }}  alt="Cloud logo" />
        </Link>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link" to="/search">
          Alumni Search
        </Link>
        <Link className="link" to="/login">
          Log In
        </Link>
        <Link className="link" to="/logout">
          Log Out
        </Link>
      </div>

      <div>
        <img
          
          alt="Clip-art rendering of a modern office"
          className="header"
        />
      </div>
    </Container>
  );
};
export default Navigation;
