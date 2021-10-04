import React from "react";
import { Button, Container,Row, Col} from "react-bootstrap";
import useCourses from "../../Hocks/useCourses";
import Course from "../Course/Course";
import "./Home.css";

const Home = () => {

  const [courses] = useCourses();
  const someCourses = courses.slice(0, 4);

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center custom-home">
        <div className="col-11 col-lg-5 hrader-title">
          <h1>The latest digital skills, within reach.</h1>
          <p>
            Discover the fastest, most effective way to gain job-ready expertise
            for the careers of the future
          </p>
          <Button variant="primary" className="mt-2 button">
            Our Courses
          </Button>
        </div>
        <div className="col-11 col-lg-5 image">
          <img src="../image-01.svg" alt="" />
        </div>
      </div>

      <div>
         <Container className="mx-auto mt-5">
        <Row className="mx-auto">
          {someCourses.map((course) => (
            <Col md={6} sm={11} className="mx-auto m-3">
              <Course course={course} key={course.key}></Course>
            </Col>
          ))}
        </Row>
      </Container>
      </div>


    </div>
  );
};

export default Home;
