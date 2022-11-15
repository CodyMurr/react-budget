import { useState, useContext, useEffect, useRef } from 'react';
import Budget from '../components/Budget';
import ModalButton from '../components/custom/ModalButton';
import BudgetForm from '../components/BudgetForm';
import BudgetContext from '../context/Budgets/BudgetContext';

export default function BudgetsPage() {
	const { budgets, loading, getBudgets, getCats, routeChange } =
		useContext(BudgetContext);

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
			{budgets.length ? (
				budgets.map((b) => (
					<Budget budget={b} routeChange={routeChange} key={b._id} />
				))
			) : (
				<em>No budgets yet</em>
			)}

			<ModalButton name='Budget' handleClick={toggleForm} />

			<BudgetForm toggleState={showBudgetForm} handleToggle={toggleForm} />
		</main>
	);
}
