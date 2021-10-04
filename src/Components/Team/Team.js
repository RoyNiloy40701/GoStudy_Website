import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
const Team = (props) => {
     const { name, img, depertment } = props.team;
     return (
          <Col>
               <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <Card.Title>{name}</Card.Title>
                         <Card.Text>
                          {depertment}
                         </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white  d-flex  justify-content-between ">
                         <h4 className="bg-dark  text-light rounded-circle pb-1 px-1"><FaYoutube></FaYoutube></h4>
                         <h4 className="bg-dark text-light rounded-circle pb-1 px-1" ><FaTwitter></FaTwitter></h4>
                         <h4 className="bg-dark text-light rounded-circle pb-1 px-1"><FaFacebookF></FaFacebookF></h4>
                         <h4 className="bg-dark text-light rounded-circle pb-1 px-1"><FaInstagram></FaInstagram></h4>
                    </Card.Footer>

               </Card>
          </Col>
     );
};

export default Team;