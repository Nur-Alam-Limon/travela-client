import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  });

  return (
    <div className="py-5">
      <h5 className="text-primary fw-light">Check our best promotional tour</h5>
      <h1 className="fw-bold text-primary">Upcoming Events</h1>
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mx-lg-5 g-4 mx-auto pt-5">
        {events.map((event) => (
          <Event key={event._id} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
