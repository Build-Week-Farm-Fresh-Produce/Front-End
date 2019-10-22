import React, { useState, useEffect } from "react";
import { render, BrowserRouter } from "react-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios'

const Wrap = styled.div`
	max-width: 80vw;
	max-height: 80vh;
	height: auto;
	box-sizing: border-box;
	margin: 5% auto;
	/* align-items:center; */
	/* border: 5px dashed; */
	/* border-radius:12px; */
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	background: rgb(206, 212, 182, 0.6);
	flex-wrap: wrap;
`;
const FormContainer = styled.div`
	box-sizing: border-box;
	width: 65vw;
	height: 40vh;
	margin: 0 5%;
	display: flex;
	flex-direction: row;
	/* border: solid blue; */
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

const SignUp = ({ values, errors, touched, isSubmitting }, props) => (
	<Wrap>
		<div></div>
		<FormContainer>
			<Form>
				<div>Full Name</div>
				<Field
					type="text"
					name="name"
					placeholder="Enter your name"
					className="fields"
				/>
				{touched.name && errors.name && <Error>{errors.name}</Error>}


				<div>Address</div>
				<Field
					type="text"
					name="address"
					placeholder="please enter your address"
					className="fields"
				/>
				{touched.address && errors.address && <Error>{errors.address}</Error>}

				<div>Email Address</div>
				<Field
					type="email"
					name="email"
					placeholder="Enter your email"
					className="fields"
				/>
                {touched.email && errors.email && <Error>{errors.email}</Error>}
                
				<div>Create a Password</div>
				<Field
					type="password"
					name="password"
					placeholder="enter your password"
					className="fields"
				/>
				{touched.password && errors.password && (
					<Error>{errors.password}</Error>
				)}

				<div>Verify Password</div>
				<Field
					type="password"
					name="confirmPassword"
					placeholder="please confirm password"
					className="fields"
				/>
				{touched.confirmPassword && errors.confirmPassword && (
					<Error>{errors.confirmPassword}</Error>
				)}

				<label>
					<h4>I am a Farmer.</h4>
					<Field
						type="checkbox"
						name="farmer"
						checked={values.farmer}
						className="fields"
					/>
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
			</Form>
		</FormContainer>
	</Wrap>
);

const FormikSignUp = withFormik({
	mapPropsToValues({
		name,
		email,
		address,
		password,
		confirmPassword,
		farmer
	}) {
		return {
			name: name || "",
			email: email || "",
			address: address || "",
			password: password || "",
			confirmPassword: confirmPassword || "",
			farmer: farmer || false
		};
	},
	validationSchema: Yup.object().shape({
		name: Yup.string().required("Name is required"),
		address: Yup.string().required("Address is required"),
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
		if (values.username === "Shelly12") {
			setErrors({ username: "Username already taken." });
		} else {
			resetForm();
		}
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
