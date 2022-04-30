import { useFormik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import loginUser from "../../Services/loginService";
import { useState } from "react";
// import { useAuthActions } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().required("required is email"),
  password: yup.string().required("reuqired is password"),
});

const LoginForm = () => {
  // const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    console.log(values);
    setError(null);
    try {
      const { data } = await loginUser(values);
      // setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      Navigate("/");

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

        {error && <p style={{ color: "red" }}>{error}</p> &&
          toast.success("wellcome")}
        <Link to="/signup">
          <p className="top">Not signup yet ?</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
