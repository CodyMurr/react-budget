import { useState, useContext, useEffect, useRef } from 'react';
import Budget from '../components/Budget';
import ModalButton from '../components/custom/ModalButton';
import BudgetForm from '../components/BudgetForm';
import BudgetContext from '../context/Budgets/BudgetContext';

export default function BudgetsPage() {
	const { budgets, loading, getBudgets, getCats } = useContext(BudgetContext);

	const isMounted = useRef(true);

	const [showBudgetForm, setShowBudgetForm] = useState(false);

	useEffect(() => {
		if (isMounted.current) {
			getBudgets();
			getCats();
		}
		return () => (isMounted.current = false);
	});

	function toggleForm() {
		setShowBudgetForm(!showBudgetForm);
	}

	if (loading) return <h3>Loading...</h3>;

	return (
		<main className='w-full flex flex-col'>
			<h2 className='w-full bg-primary text-primary-content text-lg font-bold'>
				Budget Summary
			</h2>
			{budgets.length ? (
				budgets.map((b) => <Budget budget={b} key={b._id} />)
			) : (
				<em>No budgets yet</em>
			)}

			<ModalButton name='Budget' handleClick={toggleForm} />

			<BudgetForm
				budgets={budgets}
				showBudgetForm={showBudgetForm}
				toggleForm={toggleForm}
			/>
		</main>
	);
}
