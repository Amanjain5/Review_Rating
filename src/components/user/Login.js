import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Style.css";
import * as yup from "yup";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Transform,
  IconProp,
  FlipProp,
  SizeProp,
  PullProp,
  RotateProp,
  FaSymbol,
} from "@fortawesome/fontawesome-svg-core";

const Login = () => {
  // Initial Schema of formik
  const defaultValue = {
    name: "",
    email: "",
  };

  // validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter name"),
    email: yup.string().required("Please enter your email"),
  });
  // 3rd after handle submit
  const handleSubmit = (values) => {
    console.log("Values :", values);
  };

  return (
    <div>
      <div className="container-fluid fullbox">
        <div className="row">
          <div className="col box1">
            <h1>Welcome</h1>
            <h4>
              Lorem ipsum dolor sit, amet consectetur <br />
              adipisicing elit.
            </h4>
            <img src="./assets/Group 11664 (1).png" />
          </div>
          <div className="col">
            <div className="box2">
              <div className="up">
                <img className="image1" src="./assets/Mask group.png" alt="" />
                <h1 className="login">Login</h1>
                <img className="image2" src="./assets/Frame 6.png" alt="" />
              </div>
              <div>
                <h6>Hello! Please enter your details for login</h6>
              </div>
              <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="form">
                  <div className="mb-4">
                    <i className="fa fa-user" />
                    <Field
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Full Name"
                      name="name"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="name" />
                    </p>
                  </div>
                  <div className="mb-4">
                    <div>
                      <i className="fa fa-envelope" />
                      <Field
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email ID"
                        name="email"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                  </div>
                  <div className="forget-password">
                    <h6>Forget Password?</h6>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                  <hr />
                  <p>
                    I already have an account <spane> </spane>
                    <Link to="/signup">Registor</Link>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
