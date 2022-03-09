import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import accountStore from "../Store/accountStore";
import transactionStore from "../Store/transactionStore";
function ValidationModal({ transaction, currentAccountId, setIsOpen }) {
  console.log(transaction);
  const [isOpen, setIsOpenM] = useState(false);
  const account = accountStore.accounts.find(
    (account) => account._id === transaction.account
  );
  console.log(account);
  //   const onSubmit = (data) => {
  //     console.log(data);
  //     authStore.signIn(data, setIsOpenM);
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    transactionStore.addTransaction(transaction, currentAccountId, setIsOpen);
    setIsOpenM(false);
    setIsOpen(false);
  };
  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-reg"
        onClick={() => setIsOpenM(true)}
      >
        Submit
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpenM(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Summary of Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <p>Transfer to {account.nickName}</p>
            </InputGroup>
            <InputGroup>
              <p>Transfer amount {transaction.amount}</p>
            </InputGroup>
            {/* <br /> */}
            <InputGroup></InputGroup>
            <br />
            <Button type="submit" variant="primary">
              Confirm
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ValidationModal;
