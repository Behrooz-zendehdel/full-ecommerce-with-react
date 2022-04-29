import { useFormik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import "./signup.css";
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
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfrim: yup
    .string()
    .required("passwrod confrim is required")
    .oneOf([yup.ref("password"), null])
    .min(8, "Error"),
});

const SignupForm = ({
  name,
  email,
  phoneNumber,
  password,
  passwordConfrim,
}) => {
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
        <Input formik={formik} name="phoneNumber" label="phone Number" />
        <Input formik={formik} name="password" label="Password" />
        <Input formik={formik} name="passwordConfrim" label="passwordConfrim" />
        <button
          style={{ width: "100%" }}
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
