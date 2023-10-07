import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

const Signin = () => {
  const defaultValue = {
    email: "",
    Password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Please enter your email").required(),
    Password: yup.string().required("Please enter your password"),
  });

  // 3rd after handle submit
  const handleSubmit = (values) => {
    console.log("Values", values);
  };

  return (
    <>
      <div>
        <section className="MainSection">
          <section className="container">
            <div className="container1">
              <h1>Welcome</h1>
            </div>

            <div className="container2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="container3">
              <img
                src={require("./assets/Group 11664 (1).png")}
                alt="Login page image"
              />
            </div>
          </section>

          <section className="form1">
            <div className="form-box">
              <div className="imagecor">
                <img src={require("./assets/Mask group.png")} alt="" />
              </div>

              <div className="imageright">
                <img src={require("./assets/Frame 6.png")} alt="" />
              </div>

              <div className="height1">
                <h2 className="form8">Login</h2>
              </div>

              <div className="paragraph1">
                <p className="form9">
                  Hello! Please enter your details for login.
                </p>
              </div>

              <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="form5">
                  <div className="form10">
                  <FontAwesomeIcon icon="fa-light fa-envelope" style={{color: "#314f81",}} />                   
                   <Field
                      type="text"
                      name="email"
                      id="inp1"
                      placeholder="Email"
                      className="form11"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="email" />
                    </p>
                  </div>

                  <div className="form13">
                    <Field
                      type="text"
                      name="Password"
                      id="inp2"
                      placeholder="Password"
                      className="form14"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="Password" />
                    </p>
                  </div>

                  <div className="form20">
                    <p className="form16">
                      <a className="text1" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  </div>

                  <div className="buttonhero">
                    <button className="btn1" type="Submit">
                      Login
                    </button>
                  </div>
                </Form>
              </Formik>
              <hr />

              <div className="account1">
                <p className="mb-0">
                  I don't have an account on Review & Rate? <br />
                  <a href="#!" className="reg">
                    <b>Register Now</b>
                  </a>
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
export default Signin;
