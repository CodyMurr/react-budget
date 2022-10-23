import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import NavBar from '../components/Navbar';
import AuthPage from './AuthPage';
import BudgetsPage from './BudgetsPage';
import LandingPage from './LandingPage';
import Profile from './Profile';
import BudgetDetailPage from './BudgetDetailPage';
import NewBudgetPage from './NewBudgetPage';

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
			{user ? (
				<>
					<NavBar
						user={user}
						setUser={setUser}
						theme={theme}
						setTheme={setTheme}
					/>
					<Routes>
						<Route path='/' element={<LandingPage user={user} />} />
						<Route path='/profile' element={<Profile user={user} />} />
						<Route
							path='/budgets'
							element={
								<BudgetsPage
									budgets={budgets}
									setBudgets={setBudgets}
									categories={categories}
									setCategories={setCategories}
								/>
							}
						/>
						<Route
							path='/budgets/new'
							element={
								<NewBudgetPage budgets={budgets} categories={categories} />
							}
						/>
						<Route
							path='/budgets/:budgetId'
							element={<BudgetDetailPage budgets={budgets} />}
						/>
						<Route path='/*' element={<Navigate to='/' />} />
					</Routes>
				</>
			) : (
				<AuthPage user={user} setUser={setUser} />
			)}
		</main>
	);
}
