import React, { useState, useEffect } from "react";
import { render, BrowserRouter } from "react-dom";
import * as Yup from "yup";
import "../Registration.css";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

const Wrap = styled.div`
	max-width: 40vw;
	/* max-height: 80vh; */
	height: auto;
	box-sizing: border-box;
	margin: 5% auto;
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	background: rgb(206, 212, 182, 0.6);
`;
const FormContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	// height: 40vh;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	border: solid blue;
	justify-content: center;
`;

const LogIn = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-evenly; */
	padding: 10%;
	align-items: center;
	margin: auto;
	color: rgb(64, 64, 64);
	border: solid;
`;

const Error = styled.p`
	font-size: 0.65rem;
	color: red;
`;

const StyledForm = styled(Form)`
	width: 80%;
`;

const StyledField = styled(Field)`
	font-size: 1rem;
	width: 100%;
	margin-bottom: 3%;
`;

const SignUp = ({ values, errors, touched, isSubmitting }, props) => (
	<Wrap className="pic">
		{/* <FormContainer className="left"></FormContainer> */}
		<FormContainer>
			<StyledForm>
				<label>Full Name</label>
				<StyledField
					type="text"
					name="name"
					placeholder="Enter your name"
					className="fields"
				/>
				{touched.name && errors.name && <Error>{errors.name}</Error>}

				<label>Address</label>
				<StyledField
					type="text"
					name="address"
					placeholder="please enter your address"
					className="fields"
				/>
				{touched.address && errors.address && <Error>{errors.address}</Error>}

				<label>City</label>
				<StyledField
					type="text"
					name="city"
					placeholder="please enter your city"
					className="fields"
				/>
				{/* {touched.address && errors.address && <Error>{errors.address}</Error>} */}

				<label>State</label>
				<StyledField
					type="text"
					name="state"
					placeholder="please enter your state"
					className="fields"
				/>
				{/* {touched.address && errors.address && <Error>{errors.address}</Error>} */}

				<label>zipcode</label>
				<StyledField
					type="text"
					name="zip"
					placeholder="please enter your zipcode"
					className="fields"
				/>
				{touched.zip && errors.zip && <Error>{errors.zip}</Error>}

				<label>Email Address</label>
				<StyledField
					type="email"
					name="email"
					placeholder="Enter your email"
					className="fields"
				/>
				{touched.email && errors.email && <Error>{errors.email}</Error>}

				<label>Create a Password</label>
				<StyledField
					type="password"
					name="password"
					placeholder="enter your password"
					className="fields"
				/>
				{touched.password && errors.password && (
					<Error>{errors.password}</Error>
				)}

				<label>Verify Password</label>
				<StyledField
					type="password"
					name="confirmPassword"
					placeholder="please confirm password"
					className="fields"
				/>
				{touched.confirmPassword && errors.confirmPassword && (
					<Error>{errors.confirmPassword}</Error>
				)}

				<label>
					<p>
						<StyledField
							type="checkbox"
							name="farmer"
							checked={values.farmer}
							className="fields"
						/>
						I am a Farmer.
					</p>
				</label>

				<div>
					{" "}
					<button
						disabled={isSubmitting}
						onClick={() => {
							axios(() => {});
						}}
					>
						Register
					</button>
				</div>
			</StyledForm>
		</FormContainer>
	</Wrap>
);

const FormikSignUp = withFormik({
	mapPropsToValues({
		name,
		email,
		address,
		city,
		state,
		zip,
		password,
		confirmPassword,
		farmer
	}) {
		return {
			name: name || "",
			email: email || "",
			address: address || "",
			city: city || "",
			state: state || "",
			zip: zip || "",
			password: password || "",
			confirmPassword: confirmPassword || "",
			farmer: farmer || false
		};
	},
	validationSchema: Yup.object().shape({
		name: Yup.string().required("Name is required"),
		zip: Yup.string().required("Zip Code is required"),
		email: Yup.string().required("Email is required"),
		password: Yup.string()
			.min(8)
			.required("Password is required"),
		confirmPassword: Yup.string()
			.required()
			.label("Confirm Password")
			.test("passwords-match", "passwords must match", function(value) {
				return this.parent.password === value;
			})
	}),
	handleSubmit(
		values,
		{ resetForm, setErrors, setSubmitting, setStatus, props }
	) {
		console.log(values);

		resetForm();

		setSubmitting(false);

		axios
			.post("https://reqres.in/api/register", values)
			.then(res => {
				console.log("axios", res);
				setStatus(res.data);
				props.history.push("/");
			})
			.catch(err => console.log("somethingswrongsignup", err));
	}
})(SignUp);

render(<FormikSignUp />, document.getElementById("root"));

export default FormikSignUp;
