import { useFormik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import loginUser from "../../Services/loginService";
import { useState } from "react";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().required("required is email"),
  password: yup.string().required("reuqired is password"),
});

const LoginForm = () => {
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    console.log(values);
    setError(null);
    try {
      const { data } = await loginUser(values);
      setError(null);
      console.log(data);
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: "true",
    validationSchema,
    onSubmit,
  });

  return (
    <div className="formConatiner">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" />
        <Input formik={formik} name="password" label="password" />

        <button
          style={{ width: "100%" }}
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
        >
          login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/signup">
          <p className="top">Not signup yet ?</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
