import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import NavBar from '../components/Navbar';
import AuthPage from './AuthPage';
import BudgetsPage from './BudgetsPage';
import NewBudgetPage from './NewBudgetPage';
import LandingPage from './LandingPage';
import Profile from './Profile';
import BudgetState from '../context/Budgets/BudgetState';
import BudgetEditor from './BudgetEditor';
import NewTransactionPage from './NewTransactionPage';

const THEMES = {
	'-1': 'dark',
	1: 'corporate',
};

export default function App() {
	const [user, setUser] = useState(getUser());
	const [theme, setTheme] = useState(1);
	const navigate = useNavigate();

	return (
		<div
			className='flex w-full h-screen relative bg-base-100'
			data-theme={THEMES[theme]}>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<BudgetState>
						<Routes>
							<Route path='/' element={<LandingPage user={user} />} />
							<Route path='/profile' element={<Profile user={user} />} />
							<Route path='/budgets' element={<BudgetsPage />} />
							<Route
								path='/budgets/new'
								element={<NewBudgetPage navigate={navigate} />}
							/>
							<Route path='/budgets/:id' element={<BudgetEditor />} />
							<Route
								path='budgets/:id/transactions/new'
								element={<NewTransactionPage />}
							/>
							<Route path='/*' element={<Navigate to='/' />} />
						</Routes>
					</BudgetState>
				</>
			) : (
				<AuthPage user={user} setUser={setUser} />
			)}
		</div>
	);
}
