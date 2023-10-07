import './signup.css'
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Outlet, useNavigate } from "react-router-dom";

import "../../assets/Frame 6.png";
import "../../assets/Mask group.png";
import "../../assets/Group 11664 (1).png";
import { signupuser } from "../../features/auth/authSlice";
// import {Transform,IconProp,FlipProp,SizeProp,PullProp,RotateProp,FaSymbol,} from "@fortawesome/fontawesome-svg-core";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>;

const Signup = () => {
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.user);
  const { message, error, loading } = data;
  console.log("res data", data, message, error, loading);

  const addUserPic = (e) => {
    setProfilePic(e.target.files[0]);
    // console.log
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.TOP_CENTER });
    }
    if (message) {
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
    }
    // navigate("/");
  }, [error, message]);

  // Initial Schema of formik
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
    state: "",
  };

  // Starting of validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter name"),
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please Enter your password"),
    mobile: yup.string().required("Please enter number").min("10").max("10"),
    city: yup.string().required("Please select your city"),
    state: yup.string().required("Please select your state"),
  });

  // handle submit button function
  const handleSubmit = (values) => {
    console.log("value :", values);
    let userobj = { ...values, profilepic: profilePic };
    console.log("***signup data", userobj);
    console.log("handleSubmit data", handleSubmit);
    dispatch(signupuser(userobj));
  };

  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" closeOnClick />

      <div className="container-fluid fullbox">
        <div className="row">
          <div className="col box1">
            <h1>Welcome</h1>
            <h4>
              Lorem ipsum dolor sit, amet consectetur <br />
              adipisicing elit.
            </h4>
            <img src={require("../../assets/Group 11664 (1).png")}></img>
          </div>
          <div className="col">
            <div className="box2">
              <div className="uspe">
                <img
                  className="ima1ge"
                  src={require("../../assets/Mask group.png")}
                />
                <h1 className="log1in">Sign Up</h1>

                <img
                  className="ima2ge"
                  src={require("../../assets/Frame 6.png")}
                />
              </div>

              <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="form">
                  
                  <div className="mb-3">
                    {/* <i className="fa fa-user" /> */}
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="name"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="name" />
                    </p>
                  </div>

                  <div className="mb-3">
                    <div>
                      {/* <i className="fa fa-envelope" /> */}
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Email ID"
                        name="email"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                  </div>

                  <div className="mb-3" >
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password "
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="password" />
                    </p>
                  </div>

                  <div className="mb-3">
                    {/* <i className="fa fa-phone" /> */}
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="mobile"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="mobile" />
                    </p>
                  </div>

                  <div className="mb-3">
                    <i id="icons_eco" className="fa fa-home icon" />
                    <Field as="select" className="form-control" name="city">
                      <option value="">City</option>
                      <option value="Indore">Indore</option>
                      <option value="Bhopal">Bhopal</option>
                      <option value="Gwaliour">Gwaliour</option>
                    </Field>
                    <p>
                      <ErrorMessage name="city" className="text-danger" />
                    </p>
                  </div>

                  <div className="mb-3">
                    <i id="icons_eco" className="fa fa-map icon" />
                    <Field as="select" className="form-control" name="state">
                      <option value="">State</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharastra">Maharastra</option>
                      <option value="UttarPradesh">Uttar Pradesh</option>
                    </Field>
                    <p>
                      <ErrorMessage name="state" className="text-danger" />
                    </p>
                  </div>

                  {/* <div className="mb-3">
                    <input
                      type="file"
                      name="profilepic"
                      className="dfs"
                      onChange={addUserPic}
                    ></input>
                  </div> */}

                  <button type="submit" className="btn btn-primary btn-sm">
                    Sign Up
                  </button>
                  <hr />

                  <p>
                    I already have an account <span> </span>
                    <Link to="/">login </Link>
                    <Outlet />
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
