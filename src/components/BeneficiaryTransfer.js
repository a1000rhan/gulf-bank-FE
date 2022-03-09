import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import transactionStore from "../Store/transactionStore";
import accountStore from "../Store/accountStore";
import Swal from "sweetalert2";

function BeneficiaryTransfer({ beneficiary }) {
  const [isOpen, setIsOpen] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [transaction, setTransaction] = useState({
    method: "withdraw",
    amount: 0,
  });

  const handelAccount = (event) => {
    const otherAccount = accountStore.accounts.find(
      (acc) => event.target.value == acc.nickName
    );
    setAccountId(otherAccount._id);
  };
  const otherAccount = accountStore.accounts.map((acc) => (
    <option>{acc.nickName}</option>
  ));
  const handlechange = (event) => {
    return setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    transactionStore.addTransaction(transaction, accountId, Swal, setIsOpen);
  };
  return (
    <>
      <Button variant="outline-primary" onClick={() => setIsOpen(true)}>
        Transfer
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <p>Benificiary name: &nbsp;&nbsp;</p>
              <p>{beneficiary.fullname}</p>
            </InputGroup>

            <InputGroup>
              <p>IBAN: &nbsp;&nbsp;</p>
              <p>{beneficiary.IBAN}</p>
            </InputGroup>

            <Form.Select onChange={handelAccount}>
              <option>Select account</option>
              {otherAccount}
            </Form.Select>
            <br />
            <InputGroup>
              <InputGroup.Text>Amount</InputGroup.Text>
              <Form.Control
                name="amount"
                type="text"
                placeholder="amount"
                onChange={handlechange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Transfer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BeneficiaryTransfer;
