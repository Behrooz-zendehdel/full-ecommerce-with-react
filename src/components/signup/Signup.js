import { useFormik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import "./signup.css";
import { Link } from "react-router-dom";


const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfrim: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = yup.object({
  name: yup
    .string()
    .required("name is required")
    .min(6, "name length is not valid"),
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "required in valid"
    )
    .nullable(),
  password: yup
    .string()
    .required("password is required")
    ,
  passwordConfrim: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues :initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize:true,
  });

  return (
    <div className="formConatiner">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="phone Number"
          type="tel"
        />
        <Input formik={formik} name="password" label="password" type="text" />
        <Input
          formik={formik}
          name="passwordConfrim"
          label="password Confrim"
          type="text"
        />
        <button
          style={{ width: "100%" }}
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
        >
          signup
        </button>
        <Link to="/login">
          <p className="top">Already login ?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;