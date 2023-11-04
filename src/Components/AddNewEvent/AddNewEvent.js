import Button from "@restart/ui/esm/Button";
import React, { useEffect, useRef } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const AddNewEvent = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();

  const addEvent = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const img = imgRef.current.value;
    const newEvent = { name, description, price, img };

    fetch("https://travela-server.onrender.com/events", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Event Added Successfully");
      });
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    imgRef.current.value = "";
  };
  return (
    <div className="py-5" style={{ minHeight: "100vh" }}>
      <h1 className="text-primary mb-5">Add New Event</h1>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Event Name" ref={nameRef} />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Event Description"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Event Description"
            ref={descriptionRef}
            style={{ height: "200px" }}
          />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Control type="number" placeholder="Event Cost" ref={priceRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Control
            type="text"
            placeholder="Event Image URL"
            ref={imgRef}
          />
        </Form.Group>

        <Button
          onClick={addEvent}
          className="my-3 btn-primary border-none px-3 py-1"
          variant="primary"
          type="submit"
        >
          Create Event
        </Button>
      </Form>
    </div>
  );
};

export default AddNewEvent;
