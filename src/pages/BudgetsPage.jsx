import { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
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
	return (
		<div className='w-full flex flex-col'>
			{budgets.length ? (
				budgets.map((b, i) => <Budget budget={b} key={`${b.name}-${i}`} />)
			) : (
				<em>No budgets yet</em>
			)}
			{showBudgetForm ? (
				<BudgetForm
					user={user}
					budgets={budgets}
					setBudgets={setBudgets}
					categories={categories}
				/>
			) : (
				<span
					className='flex w-44 justify-between items-center p-2 rounded text-xl text-primary cursor-pointer hover:text-primary-content hover:bg-primary'
					onClick={() => setShowBudgetForm(true)}>
					<FaPlus size={20} />
					<p>New Budget</p>
				</span>
			)}
		</div>
	);
}
