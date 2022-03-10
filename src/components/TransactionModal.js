import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import accountStore from "../Store/accountStore";
import { observer } from "mobx-react";

import transactionStore from "../Store/transactionStore";

import ValidationModal from "./ValidationModal";

const TransactionModal = ({ currentAccount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transaction, setTransaction] = useState({
    method: "transfer",
    amount: 0,
    account: "",
  });
  const handChange = (event) => {
    return setTransaction({
      ...transaction,
      amount: event.target.value,
    });
  };
  const handelAccount = (event) => {
    const otherAccountId = accountStore.accounts.find(
      (acc) => event.target.value == acc.nickName
    );

    console.log(
      "🚀 ~ file: TransactionModal.js ~ line 25 ~ handelAccount ~ otherAccountId._id",
      otherAccountId._id
    );
    return setTransaction({
      ...transaction,
      account: otherAccountId._id,
    });
  };
  const currentAccountId = currentAccount._id;

  const handleSubmit = (event) => {
    event.preventDefault();
    // transactionStore.addTransaction(transaction, currentAccountId, setIsOpen);
    // setTransaction({ method: "transfer", amount: 0, account: "" });

    // transactionStore.addTransaction(
    //   transaction,
    //   currentAccount._id,

    //   setIsOpen
    // );
    setTransaction({ method: "transfer", amount: 0, account: "" });
  };

  const otherAccount = accountStore.accounts
    .filter((acc) => acc._id !== currentAccount._id)
    .map((acc) => <option>{acc.nickName}</option>);

  return (
    <>
      <Button variant="outline-primary" onClick={() => setIsOpen(true)}>
        Make Transactions
      </Button>

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Make Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
            <br />
            <InputGroup>
              <InputGroup.Text>Account</InputGroup.Text>
              <Form.Select name="account" onChange={handelAccount}>
                <option>Select the account</option>
                {otherAccount}
              </Form.Select>
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {transaction.account !== "" &&
            transaction.amount !== "0" &&
            transaction.amount !== "" && (
              <ValidationModal
                transaction={transaction}
                currentAccountId={currentAccountId}
                setIsOpen={setIsOpen}
              />
            )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default observer(TransactionModal);
