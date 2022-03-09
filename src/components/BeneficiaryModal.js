import dashboard from "../dashboard.css";
import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import beneficiaryStore from "../Store/beneficiaryStore";
import Swal from "sweetalert2";

const BeneficiaryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [beneficiary, setBeneficiary] = useState({
    fullname: "",
    IBAN: 0,
    bankName: "",
    address: "",
  });
  const handChange = (event) => {
    return setBeneficiary({
      ...beneficiary,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    beneficiaryStore.addBeneficiary(beneficiary, Swal, setIsOpen);
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
                name="fullname"
                type="text"
                placeholder="Full Name"
                onChange={handChange}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroup.Text>IBAN</InputGroup.Text>
              <Form.Control
                name="IBAN"
                type="text"
                placeholder="IBAN"
                required={true}
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Bank Name</InputGroup.Text>
              <Form.Control
                name="bankName"
                type="text"
                placeholder="Bank Name"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Address</InputGroup.Text>
              <Form.Control
                name="address"
                type="text"
                placeholder="address"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BeneficiaryModal;
