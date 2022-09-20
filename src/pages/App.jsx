import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { getUser } from '../utilities/users-service';
import AuthPage from './AuthPage';
import LandingPage from './LandingPage';

const THEMES = {
	1: 'corporate',
	'-1': 'dark',
};

export default function App() {
	const [user, setUser] = useState(getUser());
	const [theme, setTheme] = useState(1);

	function toggleTheme() {
		setTheme(theme * -1);
	}

	return (
		<main className='flex w-full h-screen relative' data-theme={THEMES[theme]}>
			<NavBar theme={theme} toggleTheme={toggleTheme} />
			{user ? (
				<Routes>
					<Route path='/' element={<LandingPage user={user} />} />
					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
			) : (
				<AuthPage user={user} setUser={setUser} />
			)}
		</main>
	);
}
