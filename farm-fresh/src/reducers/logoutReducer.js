import {
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from '../actions/logoutAction'

 import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const register = creds => dispatch => {
	console.log("Registration:", creds);
	dispatch({ type: LOGIN_START });
    return axios 
    .post("https://farm-fresh-bw.herokuapp.com/api/auth/shop/register", creds,{headers:creds})
    .then(res => {
        console.log(res.data)
		const token = res.data.token;
		localStorage.setItem("token", token);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: {
				data: res.data
			}
		});
    })
    .catch(err => {
        dispatch({ type:LOGIN_FAILURE, payload: err})
    });
};
