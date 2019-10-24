import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE
} from "../actions/registerAction";
import initialState from "./InitialState";

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_START:
			return {
				...state,
				addingUser: true,
				addedUser: false,
				error: ""
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				addingUser: false,
				addedUser: true,
				user: action.payload.user,
				token: action.payload.data.token,
				error: ""
			};
		case REGISTER_FAILURE:
			return {
				...state,
				addedUser: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default registerReducer;
