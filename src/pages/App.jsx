import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import NavBar from '../components/Navbar';
import AuthPage from './AuthPage';
import BudgetsPage from './BudgetsPage';
import LandingPage from './LandingPage';
import Profile from './Profile';
import BudgetState from '../context/Budgets/BudgetState';
import ToggleState from '../context/Toggle/ToggleState';

export default function App() {
	const [user, setUser] = useState(getUser());

	const navigate = useNavigate();

	function routeChange(path) {
		navigate(path);
	}

	return (
		<main className='flex w-full h-screen relative'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<BudgetState>
						<ToggleState>
							<Routes>
								<Route path='/' element={<LandingPage user={user} />} />
								<Route path='/profile' element={<Profile user={user} />} />
								<Route
									path='/budgets'
									element={<BudgetsPage routeChange={routeChange} />}
								/>

								<Route path='/*' element={<Navigate to='/' />} />
							</Routes>
						</ToggleState>
					</BudgetState>
				</>
			) : (
				<AuthPage user={user} setUser={setUser} />
			)}
		</main>
	);
}
