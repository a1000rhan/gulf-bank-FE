import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import authStore from "../Store/authStore";
import React, { useState } from "react";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleImage = (event) => {
    setUser({ ...user, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signUp(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-reg"
        onClick={() => setIsOpen(true)}
      >
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>UserName</InputGroup.Text>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>First Name</InputGroup.Text>
              <Form.Control
                name="firstname"
                type="text"
                placeholder="First Name"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Last Name</InputGroup.Text>
              <Form.Control
                name="lastname"
                type="text"
                placeholder="Last Name"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Phone Number</InputGroup.Text>
              <Form.Control
                name="phonenumber"
                type="number"
                placeholder="Phone Number"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Civil ID</InputGroup.Text>
              <Form.Control
                name="civilid"
                type="file"
                placeholder="Upload your Civil ID"
                onChange={handleImage}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                type="password"
                placeholder="password here"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                name="email"
                type="text"
                placeholder="email here"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
