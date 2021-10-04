import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/gostudy-logo-white.png';
import './Footer.css';
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Footer = () => {
     return (
          <div className="footer py-5">

               <div className="container">
                    <Row  >
                         <Col xs={6} md={3}>
                              <img src={logo} width="150" height="" alt=""></img>
                              <p className="mt-4 pe-5" >We support programs that create advancement opportunities for people.</p>
                         </Col>
                         <Col xs={6} md={3} >
                              <h5 className="ms-3">Learning</h5>
                              <Nav.Link as={NavLink} to="/">Project Management</Nav.Link>
                              <Nav.Link as={NavLink} to="/">WordPress Development</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Business Strategy</Nav.Link>
                              <Nav.Link as={NavLink} to="/">SoftWare Development</Nav.Link>
                         </Col>
                         <Col xs={6} md={3}>
                              <h5 className="ms-3">Help & Support</h5>
                              <Nav.Link as={NavLink} to="/">Documentation</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Live Chat</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Privacy</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Faqs</Nav.Link>
                         </Col>
                         <Col xs={6} md={3}>
                              <h5 className="ms-3" >Contact Us</h5>
                              <Nav.Link ><GoLocation></GoLocation>PO Box 16122 Collins Street West Victoria 8007 Australia</Nav.Link>
                              <Nav.Link><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill> +91 458 654 528</Nav.Link>
                              <Nav.Link as={NavLink} to="/"><AiOutlineMail></AiOutlineMail> gostudy@gmail.com</Nav.Link>
                         </Col>
                    </Row>
               </div>


          </div>
     );
};

export default Footer;