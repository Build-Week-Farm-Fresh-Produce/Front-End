import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = auth => dispatch => {
	console.log("login auth:", auth);
	dispatch({ type: LOGIN_START });
    return axios 
    .post("https://farm-fresh-bw.herokuapp.com/api/auth/shop/register", auth)
    .then(res => {
        console.log(res.data)
		const token = res.data.token;
		localStorage.setItem("token", token);
		dispatch({
			type: LOGIN_START,
			payload: {
				data: res.data
			}
		});
    })
    .catch(err => {
        dispatch({ type:LOGIN_FAILURE, payload: err})
    });
};

