import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Services.css'

const Courses = () => {

     const [courses, setCourses] = useState([]);

     useEffect(() => {
          fetch('./Courses.JSON')
               .then(res => res.json())
               .then(data => setCourses(data))
     }, []);

     return (
          <div className="body">
               <div className="cover-img img-fluid mb-5">
                    <h1>Courses</h1>
               </div>
               <div className="container   ">
                    <div className="text-center">
                         <h5 className="custom-color">SELECT COURSE</h5>
                         <h2 >Explore Popular Courses</h2>
                    </div>
                    <CardGroup className="mt-5">
                         <Row xs={1} md={3} className="g-4">{
                              courses.map(course => <Course course={course} key={course.name}></Course>)
                         }

                         </Row>
                    </CardGroup>
               </div>
          </div>
     );
};

export default Courses;