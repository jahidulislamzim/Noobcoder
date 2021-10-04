import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useCourses from "../../Hocks/useCourses";
import Course from "../Course/Course";

const Courses = () => {
  const [courses] = useCourses();
  const threeCourses = courses.slice(0, 4);
  console.log(threeCourses);

  return (
    <div className="mt-5">
      <h1 className="courses-header">Explore Topics and Skills</h1>
      <Container className="mx-auto mt-5">
        <Row className="mx-auto">
          {courses.map((course) => (
            <Col md={4} sm={11} className="mx-auto m-3">
              <Course course={course} key={course.key}></Course>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
