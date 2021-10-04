import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';

import welImg from '../../Images/23423.jpg'

import skillImg from '../../Images/BOT923.jpeg'

import './About.css'
const About = () => {

     return (

          <div className="body">
               <div className="cover-img img-fluid mb-5">
                    <h1>About</h1>
               </div>

               <div className=" com-section container">
                    <Row >
                         <Col xs={6} md={7}>
                              <img src={welImg} width="610" height="420" alt=""></img>

                         </Col>
                         <Col xs={6} md={5} >
                              <h2 > Welcome to Gostudy Enhance your skills with best Online courses</h2>
                              <p className="my-3 pe-3">You can start and finish one of these popular courses in under a day – for free! Check out the list below.. Take the course for free</p>

                              <h5 className="mt-4">400+ Courses </h5>
                              <p className="mb-3 pe-3"> You can start and finish one of these popular courses in under our site</p>


                              <h5 className="mt-4">Lifetime Access </h5>
                              <p className="mb-3 pe-3"> You can start and finish one of these popular courses in under our site</p>
                         </Col>
                    </Row>
               </div>
               <div className="com-section container">
                    <Row >
                         <Col xs={6} md={5} >
                              <h2 > Learn a job-relevant skill that you can use today in under 2 hours</h2>
                              <p className="my-3 pe-3">You can start and finish one of these popular courses in under a day for free! Check out the list below. Take the course for free</p>
                              <div>
                                   Experience <ProgressBar variant="info" now={100} label={`${100}%`} /><br />
                                   Courses  <ProgressBar variant="warning" now={70} label={`${90}%`} /><br />
                                   Lectures  <ProgressBar variant="success" now={90} label={`${70}%`} />
                              </div>
                         </Col>
                         <Col xs={6} md={7} >
                              <img className="skill-image" src={skillImg} width="620" height="" alt=""></img>
                         </Col>
                    </Row>
               </div>
          </div>
     );
};

export default About;