import { useFormik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object({
  name: yup.string().required("required is Name"),
  password: yup.string().required("reuqired is password"),
});

const LoginForm = () => {
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
        <Link to="/signup">
          <p className="top">Not signup yet ?</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;