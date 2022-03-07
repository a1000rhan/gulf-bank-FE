import dashboard from "../dashboard.css";
import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const BeneficiaryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [beneficiary, setBeneficiary] = useState({
    fullname: "",
    IBAN: 0,
  });
  const handChange = (event) => {
    return setBeneficiary({
      ...beneficiary,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsOpen(false);
  };
  return (
    <>
      <Button variant="outline-primary" onClick={() => setIsOpen(true)}>
        Add Beneficiary
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Beneficiary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Full Name</InputGroup.Text>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="Full Name"
                onChange={handChange}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroup.Text>IBAN</InputGroup.Text>
              <Form.Control
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BeneficiaryModal;
