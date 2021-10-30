import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Event.css";

const Event = (props) => {
  const { _id, name, description, price, img } = props.event;
  return (
    <div>
      <div className="col">
        <Card style={{ width: "20rem", height: "460px" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-primary fw-bold">{name}</Card.Title>
            <Card.Text className="des">{description}</Card.Text>
            <Card.Title className="text-primary">${price}</Card.Title>
            <Link to={`/placeorder/${_id}`}>
              <Button
                variant="primary"
                className="bg-primary text-white px-5 py-1 fw-bold book-now"
              >
                Book Now
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Event;
