import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	function toggleLogin() {
		setShowLogin(!showLogin);
	}
	function togglePw() {
		setShowPassword(!showPassword);
	}

	return (
		<main className='w-11/12 h-screen'>
			{showLogin ? (
				<LoginForm
					setUser={setUser}
					showPassword={showPassword}
					toggleLogin={toggleLogin}
					togglePw={togglePw}
				/>
			) : (
				<SignupForm
					setUser={setUser}
					showPassword={showPassword}
					toggleLogin={toggleLogin}
					togglePw={togglePw}
				/>
			)}
		</main>
	);
}
