import { useReducer } from 'react';
import * as usersService from '../../utilities/users-service';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../types';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

export default function UserState(props) {
	const initialState = {
		user: usersService.getUser(),
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	async function userSignUp(userData) {
		const res = await usersService.signUp(userData);
		dispatch({ type: REGISTER_USER, payload: res });
	}

	async function userLogin(credentials) {
		const res = await usersService.login(credentials);
		dispatch({ type: LOGIN_USER, payload: res });
	}
	async function userLogOut() {
		await usersService.logOut();
		dispatch({ type: LOGOUT_USER });
	}

	return (
		<UserContext.Provider
			value={{ user: state.user, userSignUp, userLogin, userLogOut }}>
			{props.children}
		</UserContext.Provider>
	);
}
