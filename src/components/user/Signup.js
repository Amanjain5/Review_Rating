import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Style.css";
import * as yup from "yup";
import { Link, Outlet } from "react-router-dom";
import {
  Transform,
  IconProp,
  FlipProp,
  SizeProp,
  PullProp,
  RotateProp,
  FaSymbol,
} from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  // Initial Schema of formik
  const defaultValue = {
    name: "",
    email: "",
    number: "",
    // city: "",
    // state:"",
  };

  // validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter name"),
    email: yup.string().required("Please enter your email"),
    number: yup.string().required("Please enter number").min("10").max("10"),
    // city: yup.string().required("Please select your city"),
    // state: yup.string().required("Please select your state")
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
              {" "}
              Lorem ipsum dolor sit, amet consectetur <br />
              adipisicing elit.
            </h4>
            <img src={require("./assets/Group 11664 (1).png")}></img>
          </div>
          <div className="col">
            <div className="box2">
              <div className="up">
                <img className="image1" src={require("./assets/Mask group.png")}/>
                <h1 className="login">Signup</h1>
                <img className="image2" src={require("./assets/Frame 6.png")}/>
              </div>
              
              <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="form">
                  <div className="mb-3">
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

                  <div className="mb-3">
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

                  <div className="mb-3">
                    <i className="fa fa-phone" />
                    <Field
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Phone Number"
                      name="number"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="number" />
                    </p>

                  </div>
                  <div className="mb-3">
                    <i className="fa fa-home" />
                    <select id="inputCity" className="form-select">
                       <option selected>City</option>
                      <option>Indore</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <i className="fa fa-map" />
                    <select id="inputState" className="form-select">
                      <option selected>State</option>
                      <option>...</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                  <hr />

                  <p>
                    I already have an account <span> </span>
                    <Link to="./Signin.js">login </Link>
                    <Outlet />
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
export default Signup;

// import {Formik, Form, Field, ErrorMessage} from "formik";
// import * as yup from "yup";
// import "./signup.css"

// const AddUser = () => {
//     // Initial Schema of formik
//     const defaultValue = {
//         name:-"",
//         email:-"",
//     };

//     // validation schema
//     const validationSchema = yup.object().shape({
//         name: yup.string().required("Please enter name"),
//         email: yup.string().required("Please enter your email")
//     })
//     // 3rd after handle submit
//     const handleSubmit = (values) =>{
//         console.log("Values :",values);
//     };

//     return (
//         <div className="container bg-warning"> <br></br>
//             <div className="col-md-12 text-center">
//             <br></br>
//                 <Formik
//               initialValues={defaultValue}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//                     <Form>
//                         <div className="col-md-10">
//                             <Field
//                             type="text" name="name"
//                             placeholder="Enter your name"
//                             className="form-control"
//                             />
//                                 <p className="text-danger">
//                                     <ErrorMessage name="name"/>
//                                 </p>
//                         </div>
//                     </Form>
//                 </Formik>
//             </div>
//         </div>
//     )
// }

// export default AddUser;
