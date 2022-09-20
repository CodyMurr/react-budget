import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import LandingPage from './LandingPage';
export default function App() {
	const [user, setUser] = useState(null);

	return (
		<main className='App'>
			{user ? (
				<Routes>
					<Route path='/' element={<LandingPage />} />
				</Routes>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
