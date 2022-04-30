import { useFormik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import "./signup.css";
import { Link } from "react-router-dom";
import { signupUser } from "../../Services/sinupService";
import { useState } from "react";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfrim: "",
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
  password: yup.string().required("password is required"),
  // .matches(
  //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
  passwordConfrim: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password must matechs"),
});

const SignupForm = () => {
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message)
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/login">
          <p className="top">Already login ?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
