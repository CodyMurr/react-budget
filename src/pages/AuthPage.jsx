import { useState } from 'react';
import { toggleUI } from '../global-functions';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<main className='w-11/12 h-screen'>
			{showLogin ? (
				<LoginForm
					setUser={setUser}
					showPassword={showPassword}
					toggleLogin={() => toggleUI(showLogin, setShowLogin)}
					togglePw={() => toggleUI(showPassword, setShowPassword)}
				/>
			) : (
				<SignupForm
					setUser={setUser}
					showPassword={showPassword}
					toggleLogin={() => toggleUI(showLogin, setShowLogin)}
					togglePw={() => toggleUI(showPassword, setShowPassword)}
				/>
			)}
		</main>
	);
}
