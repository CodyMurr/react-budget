import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../types';

function UserReducer(state, action) {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				user: action.payload,
			};
		case LOGIN_USER:
			return {
				...state,
				user: action.payload,
			};
		case LOGOUT_USER:
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
}

export default UserReducer;
