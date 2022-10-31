import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import FormInput from './custom/FormInput';
import PasswordToggle from './custom/PasswordToggle';

export default function LoginForm({
	setUser,
	showPassword,
	toggleLogin,
	togglePassword,
}) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<>
			<form
				className='w-1/2 relative'
				autoComplete='off'
				onSubmit={handleSubmit}>
				<FormInput
					title='Email'
					formData={credentials}
					handleChange={handleChange}
				/>
				<FormInput
					title='Password'
					type={showPassword ? 'text' : 'password'}
					formData={credentials}
					handleChange={handleChange}
				/>

				<PasswordToggle
					showPassword={showPassword}
					togglePassword={togglePassword}
				/>

				<section className='flex flex-col items-center justify-evenly w-full mt-4'>
					<button className='btn btn-primary text-lg w-full' type='submit'>
						Log In
					</button>
					<span className='divider'>OR</span>
					<button
						className='btn btn-secondary text-lg w-full'
						type='button'
						onClick={toggleLogin}>
						Sign Up
					</button>
				</section>

				<p className='error-message'>&nbsp;{error}</p>
			</form>
		</>
	);
}
