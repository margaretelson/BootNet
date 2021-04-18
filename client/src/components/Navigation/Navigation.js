import React from 'react';
import HeaderImage from "../../assets/header.png";
import { Link } from 'react-router-dom';
import BootLogo from '../../assets/logo-sans-title.png';
import Dashboard from '../../pages/Dashboard';
import { Container } from "react-bootstrap";

// import AlumniSearch from '../../pages/AlumniSearch';

const Navigation = () =>
{
  return <Container>
  
  <div className="nav-container">
  <ul>
  <Link to='/'><img style={{ width: '44px' }} src={BootLogo} alt='Cloud logo' /></Link>
  <a className="link" href={Dashboard}>Dashboard</a>
  <a className="link" href="{AlumniSearch}">Alumni Search</a>
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
  
  
  </Container>;}
  export default Navigation
  
  
  
  //   <Navbar bg="light" expand="lg">
  //   <Navbar.Brand><Link to='/'><img style={{width: '72px'}} src={BootLogo} alt=''/></Link></Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="mr-auto">
  //       {/* <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link> */}
//       <Nav.Link>
//         <Link to='/'>Dashboard</Link>
//       </Nav.Link>
//       <Nav.Link><Link to='/alumnisearch'>Search Alumni</Link></Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>

