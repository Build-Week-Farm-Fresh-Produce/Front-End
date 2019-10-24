import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from "../actions/loginAction";
import initialState from "./InitialState";

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				isLoggedIn: false,
				error: ""
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.data.token,
				isLoggingIn: false,
				isLoggedIn: true,
				error: ""
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				isLoggedIn: false,
				error: action.payload
			};
		default:
			return state;
	}
};
export default loginReducer;
