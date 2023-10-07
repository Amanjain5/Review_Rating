import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { companyReview } from "../../features/review/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddNewReview = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.review);
  const {review_msg, loading, error} = data;
  const {id} = param;

  // let user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (review_msg) {
      toast.review_msg(review_msg, { position: toast.POSITION.TOP_CENTER });
    }
    if (error) {
      toast.error(error, { position: toast.POSITION.TOP_CENTER });
    }
    navigate("/")
  }, [error, review_msg]);

  const defaultValue = {
    subject: "",
    review: "",
    rating: "",
  };

  const validationSchema = yup.object().shape({
    subject: yup.string().required("enter Valid email"),
    review: yup.string().required("enter Valid email"),
    rating: yup.string().required("enter Valid email"),
  });

  const handleSubmit = (values, actions) => {
    console.log("values = ", values);
    const user = JSON.parse(localStorage.getItem("user"));
    let review_Obj = {...values, user_id:user._id, company_id:id};
    dispatch(companyReview(review_Obj));
  };
  

  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" closeOnClick />
    <div>
      <div>
        <div>
          <div>
            <img src="" />
            <h2>Add review</h2>
            <img src="" />
          </div>

          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <div>
                  <div>
                    <Field
                      name="subject"
                      type="text"
                      placeholder="Enter Subject"
                      required
                    />
                    <p>
                      <ErrorMessage name="subject"></ErrorMessage>
                    </p>

                    <Field
                      name="review"
                      type="enter review"
                      placeholder="Enter review"
                      required
                    />
                    <p>
                      <ErrorMessage name="review"></ErrorMessage>
                    </p>

                    <Field
                      name="rating"
                      type="number"
                      placeholder="Enter rating"
                      required
                    />
                    <p>
                      <ErrorMessage name="rating"></ErrorMessage>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button type="submit">ADD</button>
              </div>

              <div>
                {""} <br /> <hr />{" "}
              </div>
            </Form>
          </Formik>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddNewReview;
