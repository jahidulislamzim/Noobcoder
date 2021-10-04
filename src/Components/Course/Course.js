import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
  console.log(props.course.title);
  const {img, title, details, trainer, price } = props.course;

  return (
    <Card className="card">
          
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                  { details.slice(0,150)}
              </Card.Text>
              <Card.Text>
                  Trainer: {trainer}
              </Card.Text>
              <Card.Text>
                  ${price}
              </Card.Text>
              <Button variant="primary" className='button'>Enroll Course</Button>
            </Card.Body>
          </Card>
  );
};

export default Course;
