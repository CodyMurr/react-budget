import { useState, useContext } from 'react';
import ToggleContext from '../context/ToggleContext';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage({ setUser }) {
	const { toggleState } = useContext(ToggleContext);

	const [showLogin, setShowLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	function toggleLogin() {
		toggleState(setShowLogin);
	}
	function togglePassword() {
		toggleState(setShowPassword);
	}

	return (
		<main className='w-11/12 h-screen'>
			<div className='w-full flex flex-col items-center justify-center h-full'>
				<h2 className='text-4xl text-primary mb-5 font-bold'>
					{showLogin ? 'Welcome Back!' : 'Register Account'}
				</h2>

				{showLogin ? (
					<LoginForm
						setUser={setUser}
						toggleLogin={toggleLogin}
						togglePassword={togglePassword}
						showPassword={showPassword}
					/>
				) : (
					<SignupForm
						setUser={setUser}
						toggleLogin={toggleLogin}
						togglePassword={togglePassword}
						showPassword={showPassword}
					/>
				)}
				{/* <PasswordToggle
					showPassword={showPassword}
					togglePassword={togglePassword}
				/> */}
			</div>
		</main>
	);
}
