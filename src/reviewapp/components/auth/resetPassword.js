import React, { useEffect } from "react";
import * as yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../../features/auth/authSlice";
import { resetPasswordApi } from "../../features/auth/authSlice";

const resetPassword = () => {
  const param = useParams();
  const { token, id } = param;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restThePass = useSelector((state) => state.user);
  console.log(restThePass);
  const { error, message } = restThePass;

  useEffect(() => {
    if (message) {
      alert(message);
      dispatch(clearState());
      navigate("/");
    }
    if (error) {
      alert(error);
      dispatch(clearState());
    }
  }, [message, error]);

  const defaultValue = {
    password: "",
    confirmpassword: "",
  };

  const validationSchema = yup.object().shape({
    password: yup.string().required("Please enter your Password"),
    confirmpassword: yup
      .string()
      .required("Please enter your Confirm Password"),
  });

  const handleSubmit = (value) => {
    console.log("Give me values =", value);
    let obj = {
      ...value,
      id: id,
      token: token,
    };
    dispatch(resetPasswordApi(obj));
  };

  return (
    <>
      <div>
        <h1>Reset Password</h1>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              type="password"
              name="password"
              placeholder="Password "
              className="Fiel_in_put_12"
            />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>

            <Field
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password "
              className="Fiel_in_put_12"
            />
            <p className="text-danger">
              <ErrorMessage name="confirmpassword" />
            </p>

            <button>Reset Password</button>
            <p>
              if You Remember Password. <Link to="/">Login</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default resetPassword;
