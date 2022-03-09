import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import authStore from "../Store/authStore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./UserValidation";
import Swal from "sweetalert2";
// import "../App.css";
// import styled from "styled-components";
// import { AccountBox } from "./accountBox";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  console.log("🚀 ~ file: SignUpModal.js ~ line 7 ~ schema", signupSchema);

  const [image, setImage] = useState({
    civilId: "",
  });
  console.log(
    "🚀 ~ file: SignUpModal.js ~ line 13 ~ SignUpModal ~ image",
    image
  );
  // const [user, setUser] = useState({
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   phoneNumber: 0,
  //   civilId: "",
  //   email: "",
  // })
  // =useForm({resolver: yupResolver(schema)});
  //   const onSubmit = (data) =>{
  //       console.log(data);
  //   }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const onSubmit = (data) => {
    console.log(data);
    const obj = { ...data, civilId: image.civilId };
    // data.civilId = image.civilId
    authStore.signUp(obj, Swal, setIsOpen);
  };
  // const handelChange = (event) => {
  //   console.log(user);
  //   return setUser({ ...user, [event.target.name]: event.target.value });
  // };

  const handleImage = (event) => {
    setImage({ ...image, civilId: event.target.files[0] });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   authStore.signUp(user);
  //   setIsOpen(false);
  // };
  // const AppContainer = styled.div`
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // `;

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-reg"
        onClick={() => setIsOpen(true)}
      >
        Sign Up
      </Button>
      {/* <AppContainer>
        <AccountBox />
      </AppContainer> */}
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <InputGroup.Text>UserName</InputGroup.Text>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                {...register("username")}
                // onChange={handelChange}
              />
            </InputGroup>
            <p className="error">{errors.username?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>First Name</InputGroup.Text>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                // onChange={handelChange}
              />
            </InputGroup>
            <p className="error">{errors.firstname?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>Last Name</InputGroup.Text>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                // onChange={handelChange}
              />
            </InputGroup>
            <p className="error">{errors.lastName?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>Phone Number</InputGroup.Text>
              <Form.Control
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber")}
                // onChange={handelChange}
              />
            </InputGroup>
            <p className="error">{errors.phoneNumber?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>Civil ID</InputGroup.Text>
              <Form.Control
                name="civilId"
                type="file"
                placeholder="Upload your Civil ID"
                onChange={handleImage}
                {...register("civilId")}
              />
            </InputGroup>
            <p className="error">{errors.civilId?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                type="password"
                placeholder="password here"
                // onChange={handelChange}
                {...register("password")}
              />
            </InputGroup>
            <p className="error">{errors.password?.message}</p>
            {/* <br /> */}
            <InputGroup>
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                name="email"
                type="text"
                placeholder="email here"
                // onChange={handelChange}
                {...register("email")}
              />
            </InputGroup>
            <p className="error">{errors.email?.message}</p>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
