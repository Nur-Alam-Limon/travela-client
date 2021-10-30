import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const MyBooking = () => {
  const [bookedEvent, setBookedEvent] = useState([]);
  const { mail } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/mybooking/${mail}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookedEvent(data));
  });

  const handleDeleteEvent = (id) => {
    const proceed = window.confirm("Sure to delete?");
    if (proceed) {
      const url = `http://localhost:5000/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-primary py-5 fw-bold">Events You Have Booked</h1>
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mx-lg-5 g-4 mx-auto pt-5">
        {bookedEvent.map((event) => (
          <div className="col">
            <Card style={{ width: "20rem", height: "460px" }}>
              <Card.Img variant="top" src={event.eventImg} />
              <Card.Body>
                <Card.Title className="text-primary fw-bold">
                  {event.eventName}
                </Card.Title>
                <Card.Text className="des">{event.eventDes}</Card.Text>
                <Card.Title className="text-primary">
                  ${event.eventPrice}
                </Card.Title>

                <Button
                  onClick={() => handleDeleteEvent(event._id)}
                  variant="primary"
                  className="bg-danger text-white px-5 py-1 fw-bold book-now"
                >
                  Cancel Booking
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
