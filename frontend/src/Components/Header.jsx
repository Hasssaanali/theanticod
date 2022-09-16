import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <Fragment>

      <Navbar expand="lg">
        <Container>

          <Link to='/'><Navbar.Brand href="#home" className='logo'><img src="../img/logo3.png" />
            {<Typewriter options={{ strings: ['The Anticod'], autoStart: true, loop: true, }} />}
          </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="about">About Us</Link>
              <Link to="articles">Articles</Link>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">UI/UX Design </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Social Media Marketing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SEO Optimisation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Video Animation</NavDropdown.Item>
              </NavDropdown>
              <Link to="contactus">Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Fragment>
  )
}
