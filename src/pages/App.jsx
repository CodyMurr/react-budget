import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { getUser } from '../utilities/users-service';
import AuthPage from './AuthPage';
import BudgetsPage from './BudgetsPage';
import LandingPage from './LandingPage';
import Profile from './Profile';

const THEMES = {
	1: 'corporate',
	'-1': 'dark',
};

export default function App() {
	const [user, setUser] = useState(getUser());
	const [theme, setTheme] = useState(1);
	const [budgets, setBudgets] = useState([]);
	const [categories, setCategories] = useState([]);

	return (
		<main className='flex w-full h-screen relative' data-theme={THEMES[theme]}>
			<NavBar user={user} setUser={setUser} theme={theme} setTheme={setTheme} />
			{user ? (
				<Routes>
					<Route path='/' element={<LandingPage user={user} />} />
					<Route path='/profile' element={<Profile user={user} />} />
					<Route
						path='/budgets'
						element={
							<BudgetsPage
								user={user}
								budgets={budgets}
								setBudgets={setBudgets}
								categories={categories}
								setCategories={setCategories}
							/>
						}
					/>
					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
			) : (
				<AuthPage user={user} setUser={setUser} />
			)}
		</main>
	);
}
