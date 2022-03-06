import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../Store/authStore";

function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signIn(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline-primary"
        className="delete"
        onClick={() => setIsOpen(true)}
      >
        Sign in
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>UserName</InputGroup.Text>
              <Form.Control
                name="username"
                value={user.username}
                type="text"
                placeholder="username here"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                value={user.password}
                type="password"
                placeholder="password here"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignInModal;
