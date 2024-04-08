import "./login.css";
import * as yup from "yup";
import React, {  useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInUser } from "../../features/auth/authSlice";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.user);
  const { message, error } = data;
 
  useEffect(() => {
    if (message) {
      // console.log(message)
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
      navigate("/companylist");
    }
    
    if (error) {
      // console.log (error)
      toast.error(error, { position: toast.POSITION.TOP_CENTER });
      // console.log("Show the error",toast.error)
    }  
  },[message,error]);

 //Validation starting
  const defaultValue = {
    email: "",
    password: "",
  };
 
  //starting of validation schema
  const validationSchema = yup.object().shape({
    email: yup.string().required("please enter your Email"),
    password: yup.string().required("Please Enter your password"),
  });

  //submit button function
  const handleSubmit = (values) => {
    // console.log("value :", values);
    dispatch(signInUser(values));
    // console.log('Result', resResult,)
  };


  //-----------Login UI-----------//
  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" closeOnClick />
      <div className="cont_inr_first">
        <>
          <div className="hepaimg">
            <h1 id="hed_1">Welcome</h1>
            <p id="par_gph_1">
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit.
            </p>
            <img src={require("../../assets/Group 11664 (1).png")} alt="background"></img>
          </div>
        </>

        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div id="form">
            <Form className="fom_im_h_p">
              <img id="ic_1" src={require("../../assets/Mask group.png")} alt="corner"></img>
              <img id="icn_2" src={require("../../assets/Frame 6.png")} alt="star"></img>
              <h2 id="hed_2">Login</h2>
              <p id="par_gph2">Hello ! Please enter your details for login.</p>
              <div>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email "
                  className="Fiel_in_put_12"
                  id="inp_up_idd"
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
                
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password "
                  className="Fiel_in_put_12"
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>

              </div>
              <Link id="for_for_get" to="/forgotpassword">
                Forget Password?
              </Link>

              <button id="btnnn_of_log" type="submit">
                Login
              </button>

              <div><hr className="hrweknow" /></div>

              <p id="prgph3">I don't have an account on Review and Rate </p>

              <Link id="reg_know" to="signup">
                Register Now
              </Link>
              
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
};

export default Login;




































// import "./login.css";
// import * as yup from "yup";
// import "../../assets/Frame 6.png"
// import "../../assets/Mask group.png"
// import React, { useEffect } from "react";
// import "../../assets/Group 11664 (1).png"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer,toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { signInUser } from "../../features/auth/authSlice";
// // import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";


// const Login = () => {

//  let navigate = useNavigate();
//  const dispatch = useDispatch();
//  const data = useSelector((state) => state.user);
//  const{message, error} = data;

//  useEffect(()=>{
//   if(error){
//     toast.error(error,{
//       position: toast.POSITION.TOP_CENTER,
//     });
//   }

//   if(message){
//     toast.success(message,{
//       position: toast.POSITION.TOP_CENTER,
//     });
//     navigate("/");
//   }
//  }, [error, message]);


//   const defaultValue = {
//     email: "",
//     Password: "",
//   };

//   const validationSchema = yup.object().shape({
//     email: yup.string().email("Please enter your email").required(),
//     Password: yup.string().required("Please enter your password"),
//   });

//   // 3rd after handle submit
//   const handleSubmit = async(values) => {
//     console.log("Values:", values);
//     const resResult = await dispatch(signInUser(values));
//   };

//   return (
//     <>
//       <ToastContainer/>
//         <section className="MainSection">
//           <section className="container">
//             <div className="container1">
//               <h1>Welcome</h1>
//             </div>

//             <div className="container2">
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </div>

//             <div className="container3">
//               <img
//                 src={require("../../assets/Group 11664 (1).png")}
//                 alt="Login page image"
//               />
//             </div>
//           </section>

//           <section className="form1">
//             <div className="form-box">
//               <div className="imagecor">
//                 <img src={require("../../assets/Mask group.png")} alt="" />
//               </div>

//               <div className="imageright">
//                 <img src={require("../../assets/Frame 6.png")} alt="" />
//               </div>

//               <div className="height1">
//                 <h2 className="form8">Login</h2>
//               </div>

//               <div className="paragraph1">
//                 <p className="form9">
//                   Hello! Please enter your details for login.
//                 </p>
//               </div>

//               <Formik
//                 initialValues={defaultValue}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 <Form className="form5">
//                   <div className="form10">
//                   {/* <FontAwesomeIcon icon="fa-light fa-envelope" style={{color: "#314f81",}} />                    */}
//                    <Field
//                       type="text"
//                       name="email"
//                       id="inp1"
//                       placeholder="Email"
//                       className="form11"
//                     />
//                     <p className="text-danger">
//                       <ErrorMessage name="email" />
//                     </p>
//                   </div>

//                   <div className="form13">
//                     <Field
//                       type="text"
//                       name="Password"
//                       id="inp2"
//                       placeholder="Password"
//                       className="form14"
//                     />
//                     <p className="text-danger">
//                       <ErrorMessage name="Password" />
//                     </p>
//                   </div>

//                   <div className="form20">
//                     <p className="form16">
//                       <a className="text1" href="#!">
//                         Forgot password?
//                       </a>
//                     </p>
//                   </div>

//                   <div className="buttonhero">
//                     <button className="btn1" type="Submit">
//                       Login
//                     </button>
//                   </div>
//                 </Form>
//               </Formik>
//               <hr />

//               <div className="account1">
//                 <p className="mb-0">
//                   I don't have an account on Review & Rate? <br />
//                   <a href="#!" className="reg">
//                     <b>Register Now</b>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </section>
//         </section>
//     </>
//   );
// };
// export default Login;

