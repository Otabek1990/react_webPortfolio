import React from 'react';
import "./NavbarComponent.css";
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/icon.jpg'


const NavbarComponent = (props) => {
  return (
    <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  <Router>
  <Link to="/homePage">
  <img style={{height:"40px"}} 
  src={Logo} alt=" My portfolio logo"/>hello
  </Link>
</Router>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link eventKey={2} href="#experience">
        Experience
      </Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default NavbarComponent;