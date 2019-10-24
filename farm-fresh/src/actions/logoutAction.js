
import axios from "axios";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const login = auth => dispatch => {
	console.log("login auth:", auth);
	dispatch({ type: LOGOUT_START });
    return axios 
    .post("https://farm-fresh-bw.herokuapp.com/api/auth/shop/register", auth)
    .then(res => {
        console.log(res.data)
		const token = res.data.token;
		localStorage.setItem("token", token);
		dispatch({
			type: LOGOUT_START,
			payload: {
				data: res.data
			}
		});
    })
    .catch(err => {
        dispatch({ type:LOGOUT_FAILURE, payload: err})
    });
};
