import React, { useEffect } from "react";
import * as yup from "yup";
import "./forgotpassword.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { forgotPasswordApi } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../../features/auth/authSlice";

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forgotPassData = useSelector((state) => state.user);
  const { error, forget_message } = forgotPassData;
  console.log("data", forgotPassData);

  useEffect(() => {
    if (forget_message) {
      alert(forget_message);
      dispatch(clearState());
      navigate("/");
      console.log("dsf", forget_message);
    }
    if (error) {
      alert(error);
      dispatch(clearState());
    }
  }, [error, forget_message]);

  const defaultValue = {
    email: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .lowercase(" Use Minimum 3 Uppercase")
      // .max({ number: 40, character: 50 }),
  });

  const handleSubmit = (values) => {
    console.log("My values", values);
    dispatch(forgotPasswordApi(values));
  };

  return (
    <div className="Forpass">
      <h1 id="Firstheading">Forgot Password</h1>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form1">
          <Field type="email" name="email" placeholder="Enter your email" />
          <p className="text-danger">
            <ErrorMessage name="name" />
          </p>
        </Form>
      </Formik>

      <button id="sendbutton" onClick={handleSubmit} >Send Link</button>

      <p id="rempasspara">
        if you remember password
        <Link to="/">Login</Link>
        <Outlet />
      </p>
    </div>
  );
};
export default Forgotpassword;
