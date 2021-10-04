import React from 'react';
import logo from "../../Images/gostudy-logo-dark.png"
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
     return (
          <div>
               <Navbar bg="light" expand="lg">
                    <Container>
                         <Navbar>
                              <Container>
                                   <Nav.Link as={NavLink} to="/home">
                                        <img alt="" src={logo} width="130" height="45" className="d-inline-block align-top me-5" />{' '}
                                   </Nav.Link>
                              </Container>
                         </Navbar>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto ms-5">

                                   <Nav.Link as={NavLink} className="mx-3" to="/home">Home</Nav.Link>
                                   <Nav.Link as={NavLink} className="mx-3" to="/services">Services</Nav.Link>
                                   <Nav.Link as={NavLink} className="mx-3" to="/ourTeam">Our Team</Nav.Link>
                                   <Nav.Link as={NavLink} className="mx-3" to="/about">About</Nav.Link>

                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;