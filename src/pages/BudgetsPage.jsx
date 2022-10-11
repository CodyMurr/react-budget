import { useEffect, useRef, useState, useContext } from 'react';
import ToggleContext from '../context/ToggleContext';
import Budget from '../components/Budget';
import BudgetForm from '../components/BudgetForm';
import * as budgetsAPI from '../utilities/budgets-api';
import * as categoriesAPI from '../utilities/categories-api';
import ModalButton from '../components/custom/ModalButton';

export default function BudgetsPage({
	budgets,
	setBudgets,
	categories,
	setCategories,
}) {
	const { toggleState } = useContext(ToggleContext);

	const [showBudgetForm, setShowBudgetForm] = useState(false);
	const [loading, setLoading] = useState(false);

	const isMounted = useRef(true);

	useEffect(() => {
		async function getBudgets() {
			const res = await budgetsAPI.getAll();
			setBudgets(res);
		}
		async function getCategories() {
			const res = await categoriesAPI.getAll();
			setCategories(res);
		}
		if (isMounted.current) {
			setLoading(true);
			getBudgets();
			getCategories();
			setLoading(false);
		}
		return () => (isMounted.current = false);
	}, [setLoading, setCategories, setBudgets]);

	function toggleForm() {
		toggleState(setShowBudgetForm);
	}

	const budgetInfo = budgets.map((b, i) => (
		<Budget budget={b} categories={categories} key={`${b.name}-${i}`} />
	));

	if (loading) return <h3>Loading...</h3>;

	return (
		<div className='w-full flex flex-col'>
			<h2 className='w-full bg-primary text-primary-content text-lg font-bold'>
				Budget Summary
			</h2>
			<section className='w-full flex flex-col justify-start'>
				{budgets.length ? budgetInfo : <em>No budgets yet</em>}
			</section>

			<ModalButton handleClick={toggleForm} />

			<BudgetForm
				budgets={budgets}
				setBudgets={setBudgets}
				categories={categories}
				showBudgetForm={showBudgetForm}
				toggleForm={toggleForm}
			/>
		</div>
	);
}
