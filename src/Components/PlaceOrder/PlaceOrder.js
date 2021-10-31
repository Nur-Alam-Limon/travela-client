import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Form, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";
import Event from "../Event/Event";

const PlaceOrder = () => {
  const { user, isLoading } = useAuth();
  const { eventid } = useParams();
  const [bookevent, setBookevent] = useState({});
  const history = useHistory();

  useEffect(() => {
    const url = `https://salty-escarpment-09439.herokuapp.com/placeorder/${eventid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookevent(data));
  });

  const confirmBooking = (e) => {
    e.preventDefault();

    const email = user.email;
    const eventName = bookevent.name;
    const eventDes = bookevent.description;
    const eventPrice = bookevent.price;
    const eventImg = bookevent.img;
    const eventStatus = "pending";

    const bookedEvent = {
      email,
      eventName,
      eventDes,
      eventPrice,
      eventImg,
      eventStatus,
    };

    fetch("https://salty-escarpment-09439.herokuapp.com/bookconfirm", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Booking Confirmed. You can check status in my booking page.");
        history.push("/home");
      });
  };
  if (isLoading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }
  return (
    <div className="d-lg-flex justify-content-center align-items-center py-5">
      <div className="px-lg-5 mx-3">
        <Card style={{ width: "20rem", height: "460px" }}>
          <Card.Img variant="top" src={bookevent.img} />
          <Card.Body>
            <Card.Title className="text-primary fw-bold">
              {bookevent.name}
            </Card.Title>
            <Card.Text>{bookevent.description}</Card.Text>
            <Card.Title className="text-primary">${bookevent.price}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="px-5 w-100">
        <h1 className="text-center text-primary fw-bold my-5">
          Booking Information
        </h1>
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder={user.displayName} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder={user.email} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formcity">
            <Form.Control placeholder="City" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formcountry">
            <Form.Control placeholder="Country" />
          </Form.Group>

          <Button
            onClick={confirmBooking}
            className="my-3 btn-primary border-none px-3 py-1"
            variant="primary"
            type="submit"
          >
            Confirm Booking
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PlaceOrder;
