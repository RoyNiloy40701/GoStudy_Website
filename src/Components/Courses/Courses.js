import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
     const [courses, setCourses] = useState([]);

     useEffect(() => {
          fetch('./Courses.JSON')
               .then(res => res.json())
               .then(data => setCourses(data))

     }, []);
     return (
          <div className="container courses mb-0 ">
               <div className=" my-3 courses-heading d-flex justify-content-between">
                    <h2>Choose Your Courses</h2>
                    <button className="btn">View All Courses</button>
               </div>
               <CardGroup>
                    <Row xs={1} md={3} className="g-4">{
                         courses.slice(0, 6).map(course => <Course course={course} key={course.name}></Course>)

                    }
                    </Row>
               </CardGroup>
          </div>
     );
};

export default Courses;