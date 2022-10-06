import { useEffect, useRef, useState } from 'react';
import { toggleUI } from '../global-functions';
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
	const [showBudgetForm, setShowBudgetForm] = useState(false);

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
			getBudgets();
			getCategories();
		}
		return () => (isMounted.current = false);
	});

	function toggleForm() {
		toggleUI(showBudgetForm, setShowBudgetForm);
	}

	const budgetInfo = budgets.map((b, i) => (
		<Budget budget={b} categories={categories} key={`${b.name}-${i}`} />
	));

	return (
		<div className='w-full flex flex-col'>
			<section className='w-full flex flex-wrap justify-evenly'>
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
