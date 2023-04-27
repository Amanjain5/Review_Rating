import React from 'react'

const Signin = () => {
  return (
    return (
      <div className="container bg-warning"> <br></br>
          <div className="col-md-12 text-center">
          <br></br>
              <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
                  <Form>
                      <div className="col-md-10">
                          <Field
                          type="text" name="name"
                          placeholder="Enter your name"
                          className="form-control"
                          />
                              <p className="text-danger">
                                  <ErrorMessage name="name"/>
                              </p>
                      </div>

                      <div className="col-md-10">
                              <Field
                                  type="text" name="email"
                                  placeholder="Enter your email"
                                  className="form-control"
                              />
                              <p className="text-danger">
                                  <ErrorMessage name="email" />
                              </p>
                          </div>

                          <div className="col-md-10">
                              <Field
                                  type="text" name="Password"
                                  placeholder="Enter your Password"
                                  className="form-control"
                              />
                              <p className="text-danger">
                                  <ErrorMessage name="Password" />
                              </p>
                          </div>

                          <div className="col-md-10">
                              <Field
                                  type="text" name="gender"
                                  placeholder="Enter your gender"
                                  className="form-control"
                              />
                              <p className="text-danger">
                                  <ErrorMessage name="gender" />
                              </p>
                          </div>
  )
}
export default Signin
