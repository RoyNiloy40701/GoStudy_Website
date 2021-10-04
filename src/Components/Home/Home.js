import './Home.css'
import TopBannerImg from '../../Images/HR91.png'
import { Col, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Home = () => {

     return (
          <div className="body">
               <div className="container">
                    <Row className="top-banner">
                         <Col xs={12} md={6} className="topBanner-heading">
                              <h1>Great <span className="custom-color">Online</span> Learning Platform to Develop Skill</h1>
                              <button className="btn ">Learn More</button>
                         </Col>
                         <Col xs={6} md={6} className="mt-5">
                              <img className="topBanner-img img-fluid" src={TopBannerImg} alt=""  ></img>
                         </Col>
                    </Row>
               </div>
               <Courses></Courses>
          </div>

     );
};

export default Home;