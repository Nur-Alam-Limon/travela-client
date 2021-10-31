import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import useAuth from "../../Context/useAuth";

const AllBooking = () => {
  const { isLoading } = useAuth();
  const [allBookedEvent, setAllBookedEvent] = useState([]);
  const [status, setStatus] = useState({});

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

  const handleEventStatus = (id) => {
    const status1 = "approved";
    const updateStatus = { status: status1 };
    setStatus(updateStatus);

    const url = `https://salty-escarpment-09439.herokuapp.com/status/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Click 2 time Approve Button for Status Update");
        }
      });
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
            <Card style={{ width: "20rem", height: "520px" }}>
              <Card.Img variant="top" src={event.eventImg} />
              <Card.Body>
                <Card.Title className="text-primary fw-bold">
                  {event.eventName}
                </Card.Title>
                <Card.Text className="des">{event.eventDes}</Card.Text>
                <Card.Title className="text-primary">
                  ${event.eventPrice}
                </Card.Title>
                <Card.Title>
                  <small>
                    Status :
                    <span className="text-primary">{event.eventStatus}</span>
                  </small>
                </Card.Title>
                <Button
                  onClick={() => handleDeleteEvent(event._id)}
                  variant="primary"
                  className="bg-danger text-white px-5 py-1 fw-bold book-now"
                >
                  Cancel Booking
                </Button>
                <Button
                  onClick={() => handleEventStatus(event._id)}
                  variant="primary"
                  className="bg-success text-white px-5 py-1 mt-2 book-now"
                >
                  Approve Status
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
