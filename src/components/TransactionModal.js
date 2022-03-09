import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import accountStore from "../Store/accountStore";
import authStore from "../Store/authStore";
import transactionStore from "../Store/transactionStore";
import Swal from "sweetalert2";

const TransactionModal = ({ currentAccount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transaction, setTransaction] = useState({
    method: "transfer",
    amount: 1,
    account: "",
  });
  const handChange = (event) => {
    return setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };
  console.log(
    "🚀 ~ file: TransactionModal.js ~ line 14 ~ handChange ~ transaction",
    transaction
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    transactionStore.addTransaction(transaction, currentAccount._id, setIsOpen);
    setTransaction({ method: "", amount: 0 });
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Account has been Successfully Created  ",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <>
      <Button variant="outline-primary" onClick={() => setIsOpen(true)}>
        Make Transactions
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Beneficiary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Full Name</InputGroup.Text>
              <Form.Select name="method" onChange={handChange}>
                <option>select the Transaction Method</option>
                <option value="transfer">Transfer</option>
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </Form.Select>
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroup.Text>Amount</InputGroup.Text>
              <Form.Control
                name="amount"
                type="text"
                placeholder="Amount"
                required={true}
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TransactionModal;
