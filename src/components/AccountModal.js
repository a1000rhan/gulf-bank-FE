import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import accountStore from "../Store/accountStore";
function AccountModal() {
  const [account, setAccount] = useState({ nickName: "", balance: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const handleChange = (event) => {
    console.log(account);
    return setAccount({ ...account, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    accountStore.addAccount(account);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-reg"
        onClick={() => setIsOpen(true)}
      >
        Add account
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Account name</InputGroup.Text>
              <Form.Control
                name="nickName"
                type="text"
                placeholder="Account name"
                onChange={handleChange}
              />
            </InputGroup>

            <br />
            <InputGroup>
              <InputGroup.Text>Account Balance</InputGroup.Text>
              <Form.Control
                name="balance"
                type="number"
                min={0}
                placeholder="Balance"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <Form.Check
              type="checkbox"
              onClick={() => (check ? setCheck(false) : setCheck(true))}
              label="Accept terms and conditions"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {check && (
            <Button variant="primary" onClick={handleSubmit}>
              Create
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AccountModal;
