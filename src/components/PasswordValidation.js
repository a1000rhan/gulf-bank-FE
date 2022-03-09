import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import authStore from "../Store/authStore";
import Swal from "sweetalert2";
function PasswordValidation({ handleSubmit, setIsOpenM, setIsOpen }) {
  const [isOpenP, setIsOpenP] = useState(false);
  const [user, setUser] = useState({
    username: authStore.user.username,
    password: "",
  });
  const handlePassword = (event) => {
    setUser({ ...user, password: event.target.value });
    console.log(user);
  };
  const handleSubmitPass = (event) => {
    event.preventDefault();
    authStore.confirmPassword(user, setIsOpenP, handleSubmit, event, Swal);
    setIsOpenM(false);
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={() => setIsOpenP(true)}>Confirm</Button>
      <Modal centered show={isOpenP} onHide={() => setIsOpenP(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitPass}>
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                // value={user.password}
                type="password"
                placeholder="password here"
                onChange={handlePassword}
              />
            </InputGroup>

            <Button type="submit" variant="primary">
              Transfer
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default PasswordValidation;
