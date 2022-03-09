import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import accountStore from "../Store/accountStore";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  nickName: yup
    .string()
    .matches(/^[a-zA-Z_ ]*$/, "must be only letters")
    .required("Should be only letters"),
  balance: yup
    .number()
    .min(0)
    .typeError("Should be numbers more than 0")
    .required("Invalid balance"),
});
function AccountModal() {
  //   const [account, setAccount] = useState({ nickName: "", balance: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  //   const handleChange = (event) => {
  //     console.log(account);
  //     return setAccount({ ...account, [event.target.name]: event.target.value });
  //   };
  const onSubmit = (data) => {
    console.log(data);
    accountStore.addAccount(data, setIsOpen);
    setCheck(false);

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
                type="text"
                placeholder="Account name"
              />
            </InputGroup>

            <p className="error">{errors.nickName?.message}</p>

            <InputGroup>
              <InputGroup.Text>Account Balance</InputGroup.Text>
              <Form.Control
                {...register("balance")}
                type="text"
                min={0}
                placeholder="Balance"
              />
            </InputGroup>
            <p className="error">{errors.balance?.message}</p>

            <Form.Check
              type="checkbox"
              onClick={() => (check ? setCheck(false) : setCheck(true))}
              label="Accept terms and conditions"
            />
            {check && (
              <Button type="submit" variant="primary">
                Create
              </Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AccountModal;
