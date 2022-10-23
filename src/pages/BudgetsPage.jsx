import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import * as budgetsAPI from '../utilities/budgets-api';
import * as categoriesAPI from '../utilities/categories-api';
import Budget from '../components/Budget';

export default function BudgetsPage({
	budgets,
	setBudgets,
	categories,
	setCategories,
}) {
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

	if (loading) return <h3>Loading...</h3>;

	return (
		<main className='w-full flex flex-col'>
			<h2 className='w-full bg-primary text-primary-content text-lg font-bold'>
				Budget Summary
			</h2>
			{budgets.length ? (
				budgets.map((b, i) => (
					<Budget budget={b} categories={categories} key={b._id} />
				))
			) : (
				<em>No budgets yet</em>
			)}

			<Link
				to='/budgets/new'
				className='modal-button flex w-44 justify-between items-center p-2 rounded text-xl text-primary cursor-pointer hover:text-primary-content hover:bg-primary'>
				<FaPlus size={20} />
				<p>New Budget</p>
			</Link>
		</main>
	);
}
