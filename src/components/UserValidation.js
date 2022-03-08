import * as yup from "yup";
const schema = yup.object().shape({
  username: yup.string().min(4).max(15).required("please enter your username"),
  firstName: yup.string().min(1).required("please enter your first name"),
  lastName: yup.string().min(1).required("please enter your last name"),
  phoneNumber: yup.string().matches(/^[0-9]{8}$/g, "enter your phone number"),
  email: yup
    .string()
    .min(1)
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please enter your email"
    ),
  civilId: yup
    .mixed()
    .required("please provide your Civil ID as Picture")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    }),
  password: yup.string().min(1).required("please enter your password"),
});
export default schema;
