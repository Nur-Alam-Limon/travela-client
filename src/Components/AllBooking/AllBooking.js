import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Context/useAuth";

const AllBooking = () => {
  const { isLoading } = useAuth();
  const [allBookedEvent, setAllBookedEvent] = useState([]);

  useEffect(() => {
    const url = `https://salty-escarpment-09439.herokuapp.com/allbooking`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllBookedEvent(data));
  });

  const handleDeleteEvent = (id) => {
    const proceed = window.confirm("Sure to delete?");
    if (proceed) {
      const url = `https://salty-escarpment-09439.herokuapp.com/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  if (isLoading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="text-primary py-5 fw-bold" style={{ fontSize: "30px" }}>
        Events Booked
      </h1>
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mx-lg-5 g-4 mx-3 pt-3">
        {allBookedEvent.map((event) => (
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

export default AllBooking;
