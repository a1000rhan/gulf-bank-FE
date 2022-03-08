import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../Store/authStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { schema } from "./UserValidation";
// const schema = yup.object().shape({
//   username: yup
//     .string()
//     .min(4)
//     .max(15)
//     .required("please enter your username must be between 4 and 15 charecters"),

//   password: yup.string().min(1).required("please enter your password"),
// });
function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);
  console.log("🚀 ~ file: SignInModal.js ~ line 9 ~ schema", schema);

  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  // });
  // const handChange = (event) =>
  //   setUser({ ...user, [event.target.name]: event.target.value });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   authStore.signIn(user, setIsOpen);
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
    authStore.signIn(data, setIsOpen);
  };

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-reg"
        onClick={() => setIsOpen(true)}
      >
        Sign in
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <InputGroup.Text>UserName</InputGroup.Text>
              <Form.Control
                name="username"
                // value={user.username}
                type="text"
                placeholder="username here"
                {...register("username")}
                // onChange={handChange}
              />
            </InputGroup>
            <p className="error">{errors.username?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                // value={user.password}
                type="password"
                placeholder="password here"
                {...register("password")}
                // onChange={handChange}
              />
            </InputGroup>
            <p className="error">{errors.password?.message}</p>
            <br />
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default SignInModal;
