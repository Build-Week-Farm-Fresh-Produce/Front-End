import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
	console.log("Registration:", newUser);
	dispatch({ type: REGISTER_START });
    return axios 
    .post("https://farm-fresh-bw.herokuapp.com/api/auth/shop/register", newUser)
    .then(res => {
        console.log(res.data)
		const token = res.data.token;
		localStorage.setItem("token", token);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				data: res.data
			}
		});
    })
    .catch(err => {
        dispatch({ type:REGISTER_FAILURE, payload: err})
    });
};

