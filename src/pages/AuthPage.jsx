import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage() {
	const [showLogin, setShowLogin] = useState(false);
	return <div>{showLogin ? <LoginForm /> : <SignupForm />}</div>;
}
