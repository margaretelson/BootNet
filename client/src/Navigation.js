import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import BootLogo from "./Assets/bootlogo.jpg";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img style={{ width: "72px" }} src={BootLogo} alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto bootNav">
          {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}

          <Link to="/">Dashboard</Link>
          <Link to="/alumnisearch">Search Alumni</Link>
          <NavDropdown
            className="bootDropDown"
            title="Dropdown"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
