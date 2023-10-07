import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import "./createcompany.css";
import { createCompany } from "../../features/company/companySlice";

const CreateCompany = () => {
  const [company_logo, setCompanyLogo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.company);
  const { cmpcreate_msg, error, loading } = data;
  console.log("info", cmpcreate_msg, error, loading);

  const addcompany_logo = (e) => {
    setCompanyLogo(e.target.files[0]);
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.TOP_CENTER });
    }
    if (cmpcreate_msg) {
      toast.success(cmpcreate_msg, { position: toast.POSITION.TOP_CENTER });
      navigate("/");
    }
  }, [error, cmpcreate_msg]);

  // Initial Schema of formik
  const defaultValue = {
    companyName: "",
    location: "",
    password: "",
    city: "",
    founded: "",
    userId: "",
  };

  // Starting of validation schema
  const validationSchema = yup.object().shape({
    companyName: yup.string().required("Please enter companyName"),
    location: yup.string().required("Please enter your location"),
    password: yup.string().required("Please Enter your password"),
    city: yup.string().required("Please select your city"),
    founded: yup.string().required("Please enter founded"),
    userId: yup.string().required("Please enter your userId"),
    // company_logo: yup.string().required("Please add company_logo"),
  });

  function handleSubmit(values) {
    console.log("inside handelsubmint****");
    console.log("value", values);
    const user = JSON.parse(localStorage.getItem("user"));
    const comp_obj = {
      ...values,
      userId: user._id,
      company_logo: company_logo,
    };
    console.log("Before dispatch:", comp_obj);
    dispatch(createCompany(comp_obj));
  }

  //----------HTML Code Below--------------//
  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" closeOnClick />
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="covered">
          <div className="container">
            <h2>CreateCompany</h2>
            <Form>
              <div className="form-group">
                <Field
                  type="text"
                  placeholder="companyName"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                />
                <p className="text-danger">
                  <ErrorMessage name="companyName" />
                </p>
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  placeholder="location"
                  className="form-control"
                  id="location"
                  name="location"
                />
                <p className="text-danger">
                  <ErrorMessage name="location" />
                </p>
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  placeholder="city"
                  className="form-control"
                  id="city"
                  name="city"
                />
                <p className="text-danger">
                  <ErrorMessage name="city" />
                </p>
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  placeholder="founded"
                  className="form-control"
                  id="founded"
                  name="founded"
                />
                <p className="text-danger">
                  <ErrorMessage name="founded" />
                </p>
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  placeholder="userId"
                  className="form-control"
                  id="userId"
                  name="userId"
                />
                <p className="text-danger">
                  <ErrorMessage name="userId" />
                </p>
              </div>

              <div className="input-icons">
                <i className="fas fa-file-upload" id="icons-fileUpload"></i>
                <Field
                  name="company_logo"
                  className="input-image"
                  type="file"
                  onChange={addcompany_logo}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default CreateCompany;

{
  /* <Form> */
}
// <div className="main">
// <div className="row justify-content-evenly block">
// {/* <div className="col-5 box1"> */}
// <div className="row">
//   {/* </div> */}
//   <div style={{ maxWidth: 700, margin: "auto" }}>
//     <div className="col-12">
//       <h1 id="heading">Create Company</h1>
//     </div>

// <div className="col-md-11">
//   <Field
//     type="text"
//     name="companyName"
//     placeholder="Company Name"
//     className="form-control"
//   />
//   <p className="text-danger">
//     <ErrorMessage name="companyName" />
//   </p>
// </div>

// <div className="col-md-11">
//   <Field
//     type="text"
//     name="location"
//     placeholder="Location"
//     className="form-control"
//   />
//   <p className="text-danger">
//     <ErrorMessage name="location" />
//   </p>
// </div>

// <div className="col-md-11">
//   <Field
//     type="text"
//     name="city"
//     placeholder="City"
//     className="form-control"
//   />
//   <p className="text-danger">
//     <ErrorMessage name="city" />
//   </p>
// </div>

// <div className="col-md-11">
//   <Field
//     type="text"
//     name="founded"
//     placeholder="Founded"
//     className="form-control"
//   />
//   <p className="text-danger">
//     <ErrorMessage name="founded" />
//   </p>
// </div>

// <div className="col-md-11">
//   <Field
//     type="text"
//     name="userId"
//     placeholder="userId"
//     className="form-control"
//   />
//   <p className="text-danger">
//     <ErrorMessage name="userId" />
//   </p>
// </div>

// <div className="input-icons">
//   <i className="fas fa-file-upload" id="icons-fileUpload"></i>
//   <input
//     name="company_logo"
//     className="input-image"
//     type="file"
//     onChange={addcompany_logo}
//   />
// </div>

// <button className="btn btn-primary mt-4" id="submit" type="Submit">
//   Submit
// </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </Form>;
