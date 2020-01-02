import React from "react";
import axios from 'axios';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextAreaInput from './TextArea'
import TextInput from './TextInput'


  export default () => {
		const phoneRegExp = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
    return (
            <>
              <Formik
                initialValues={{
                  firstName: "",
									lastName: "",
									phone: "",
                  zip: "",
									email: "",
									description: "",
									origin: "Web Form"
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                  lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                  email: Yup.string()
                    .email("Invalid email addresss")
										.required("Required"),
									phone: Yup.string()
										.min(10, "Phone should be 10 digits.")
										.max(14, "Too many characters in phone number")
										.matches(phoneRegExp, 'Phone number is not valid')
										.required("Required"),
                  zip: Yup.string()
										.min(5, "Zip code 5 digits only")
										.max(5, "Zip code 5 digits only")
										.required("Required"),
									description: Yup.string()
										.max(800, "Must be 800 characters or less")
										.required("Required")
                })}
                onSubmit={ async (values, { setSubmitting, resetForm }) => {
									setSubmitting = false
									resetForm({})
									//Replace phone with all numbers
									values.phone = values.phone.replace(/[^0-9]+/g, "");
									values.phone = "+1" + values.phone

									const response = await axios.post(
										'https://bva4nho4ld.execute-api.us-east-1.amazonaws.com/prod/interactions',
										{ ...values },
										{ headers: { 'Content-Type': 'application/json' } }
									)
									//console.log(response.data)
                }}
              >
                <Form>
								<div className="form-row">
									<div className="col-md-6 mb-3">
										<div className="form-group">
												<TextInput 
														label="First Name"
														name="firstName"
														type="text"
														placeholder="First"
												/>
										</div>
									</div>

									<div className="col-md-6 mb-3">
										<div className="form-group">
												<TextInput 
														label="Last Name"
														name="lastName"
														type="text"
														placeholder="Last"
												/>
										</div>
									</div>
								</div>

								<div className="form-row">
									<div className="col-md-4 mb-3">
										<div className="form-group">
											<TextInput 
													label="Email Address"
													name="email"
													type="email"
													placeholder="Email"
											/>
										</div>
									</div>

									<div className="col-md-4 mb-3">
										<div className="form-group">
											<TextInput 
													label="Phone"
													name="phone"
													type="text"
													placeholder="Phone"
											/>
										</div>
									</div>

									<div className="col-md-4 mb-3">
										<div className="form-group">
											<TextInput 
													label="Project Zip"
													name="zip"
													type="text"
													placeholder="Zip Code"
											/>
										</div>
									</div>
								</div>

                <div className="form-group">
                  <TextAreaInput 
                    label="Project Description"
										name="description"
										placeholder="Short description of your project"
                    >
                    </TextAreaInput>
                </div>

        
                <button className="btn btn-primary" type="submit">Submit form</button>

              </Form>
            </Formik>
          </>
        );
    
}