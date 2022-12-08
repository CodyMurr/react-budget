import { useState, useContext, useEffect, useRef } from 'react';
import Budget from '../components/Budget';
import BudgetForm from '../components/BudgetForm';
import BudgetContext from '../context/Budgets/BudgetContext';
import ToggleContext from '../context/Toggle/ToggleContext';
import ModalButton from '../components/custom/ModalButton';

export default function BudgetsPage() {
	const { budgets, loading, getBudgets, getCats, routeChange } =
		useContext(BudgetContext);

	const { toggleState } = useContext(ToggleContext);

	const isMounted = useRef(true);

	const [showBudgetForm, setShowBudgetForm] = useState(false);

	useEffect(() => {
		if (isMounted.current) {
			getBudgets();
			getCats();
		}
		return () => (isMounted.current = false);
	});

	if (loading) return <h3>Loading...</h3>;

	return (
		<main className='w-full flex flex-col relative'>
			<ModalButton
				name='New Budget'
				handleClick={() => toggleState(setShowBudgetForm)}
			/>
			{budgets.length ? (
				budgets.map((b) => (
					<Budget budget={b} routeChange={routeChange} key={b._id} />
				))
			) : (
				<em>No budgets yet</em>
			)}
			{showBudgetForm && (
				<BudgetForm
					toggleState={showBudgetForm}
					handleToggle={() => toggleState(setShowBudgetForm)}
				/>
			)}
		</main>
	);
}
