import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import accountStore from "../Store/accountStore";
import transactionStore from "../Store/transactionStore";
import Swal from "sweetalert2";
import PasswordValidation from "./PasswordValidation";
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
    transactionStore.addTransaction(
      transaction,
      currentAccountId,
      Swal,
      setIsOpen
    );

    setIsOpenM(false);
    setIsOpen(false);
  };
  const closeModals = (event) => {
    setIsOpenM(true);
  };
  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-reg"
        onClick={closeModals}
      >
        Submit
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpenM(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Summary of Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup>
              <p>Transfer to {account.nickName}</p>
            </InputGroup>
            <InputGroup>
              <p>Transfer amount: {transaction.amount}KD</p>
            </InputGroup>
            {/* <br /> */}
            <InputGroup></InputGroup>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <PasswordValidation
            handleSubmit={handleSubmit}
            setIsOpenM={setIsOpenM}
            setIsOpen={setIsOpen}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ValidationModal;
