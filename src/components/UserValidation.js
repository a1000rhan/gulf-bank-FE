import * as yup from "yup";

export const schema = yup.object({
  username: yup
    .string()
    .min(4)
    .max(15)
    .required("please enter your username must be between 4 and 15 charecters"),

  password: yup.string().min(1).required("please enter your password"),
});
export const signupSchema = schema.shape({
  firstName: yup.string().min(1).required("please enter your first name"),
  lastName: yup.string().min(1).required("please enter your last name"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{8}$/g, "The phone number must be 8 Digits"),
  email: yup
    .string()
    .min(1)
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please enter your email"
    ),
});
