import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	function toggleLogin() {
		setShowLogin(!showLogin);
	}
	function togglePassword() {
		setShowPassword(!showPassword);
	}

	return (
		<main className='w-full h-screen'>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<h2 className='text-4xl text-primary font-bold'>
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
			</div>
		</main>
	);
}
