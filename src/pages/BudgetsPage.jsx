import { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toggleUI } from '../global-functions';
import Budget from '../components/Budget';
import BudgetForm from '../components/BudgetForm';
import * as budgetsAPI from '../utilities/budgets-api';
import * as categoriesAPI from '../utilities/categories-api';

export default function BudgetsPage({
	user,
	budgets,
	setBudgets,
	categories,
	setCategories,
}) {
	const [showBudgetForm, setShowBudgetForm] = useState(false);
	const [showBudgetDetail, setShowBudgetDetail] = useState(false);

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

	function toggleDetail() {
		toggleUI(showBudgetDetail, setShowBudgetDetail);
	}

	const budgetInfo = budgets.map((b, i) => (
		<Budget
			budget={b}
			showBudgetDetail={showBudgetDetail}
			toggleDetail={toggleDetail}
			key={`${b.name}-${i}`}
		/>
	));

	return (
		<div className='w-full flex flex-col'>
			<section className='w-full flex flex-wrap justify-evenly'>
				{budgets.length ? budgetInfo : <em>No budgets yet</em>}
			</section>

			<label
				className='modal-button flex w-44 justify-between items-center p-2 rounded text-xl text-primary cursor-pointer hover:text-primary-content hover:bg-primary'
				onClick={toggleForm}>
				<FaPlus size={20} />
				<p>New Budget</p>
			</label>
			<BudgetForm
				user={user}
				budgets={budgets}
				setBudgets={setBudgets}
				categories={categories}
				showBudgetForm={showBudgetForm}
				toggleForm={toggleForm}
			/>
		</div>
	);
}
