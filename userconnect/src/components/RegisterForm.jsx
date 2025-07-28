import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { fullName: "", email: "", password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid").required("Required"),
      password: Yup.string().min(6).required("Required"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Passwords must match").required("Required")
    }),
    onSubmit: values => {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/profile");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 border rounded shadow bg-white">
        <div className="mb-3">
            <input name="fullName" className="form-control" placeholder="Full Name" onChange={formik.handleChange} />
            {formik.errors.fullName && <div className="text-danger">{formik.errors.fullName}</div>}
        </div>

        <div className="mb-3">
            <input name="email" className="form-control" placeholder="Email" onChange={formik.handleChange} />
            {formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
        </div>

        <div className="mb-3">
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={formik.handleChange} />
            {formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
        </div>

        <div className="mb-3">
            <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" onChange={formik.handleChange} />
            {formik.errors.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

  );
};

export default RegisterForm;
