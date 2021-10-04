import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaRegStar } from "react-icons/fa";
import { BsClock, BsPeopleFill } from "react-icons/bs";

const Course = (props) => {
     const { name, price, review, img, duration, view } = props.course;
     return (
          <Col>
               <Card className="h-100" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="bg-white text-danger d-flex  justify-content-between">
                         <h5 className="mb-0"><BsClock className="mb-1"></BsClock> {duration} hours</h5>
                         <h5 className="mb-0"><BsPeopleFill className="mb-1"></BsPeopleFill> {view}</h5>
                         <h5 className="mb-0"><FaRegStar className="mb-1"></FaRegStar> <small> {review}</small></h5>
                         <h5>${price}</h5>
                    </Card.Footer>

               </Card>
          </Col>
     );
};

export default Course;