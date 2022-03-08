import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import accountStore from "../Store/accountStore";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  nickName: yup
    .string()
    .matches(/^[A-Z]+$/i, "must be only letters")
    .required("Should be only letters"),
  balance: yup
    .number()
    .min(0)
    .typeError("Should be numbers more than 0")
    .required("Invalid balance"),
});
function AccountModal() {
  const [account, setAccount] = useState({ nickName: "", balance: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const handleChange = (event) => {
    console.log(account);
    return setAccount({ ...account, [event.target.name]: event.target.value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    accountStore.addAccount(data, setIsOpen);
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <InputGroup.Text>Account name</InputGroup.Text>
              <Form.Control
                {...register("nickName")}
                name="nickName"
                type="text"
                placeholder="Account name"
              />
            </InputGroup>
            <p className="error">{errors.nickName?.message}</p>
            <br />
            <InputGroup>
              <InputGroup.Text>Account Balance</InputGroup.Text>
              <Form.Control
                {...register("balance")}
                name="balance"
                type="number"
                min={0}
                placeholder="Balance"
              />
              <p className="error">{errors.balance?.message}</p>
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
            <Button type="submit" variant="primary">
              Create
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AccountModal;
