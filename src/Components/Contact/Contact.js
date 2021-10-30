import Button from "@restart/ui/esm/Button";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Contact = () => {
  const preventLoad = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center text-primary fw-bold my-5">Contact Us</h1>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
          />
        </FloatingLabel>

        <Button
          onClick={preventLoad}
          className="my-3 btn-primary border-none px-3 py-1"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
