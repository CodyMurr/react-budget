import { useContext, useEffect, useRef } from 'react';
import Budget from '../components/Budget';
import BudgetContext from '../context/Budgets/BudgetContext';
import PageHeader from '../components/custom/PageHeader';

export default function BudgetsPage() {
	const { budgets, loading, transactions, getBudgets, getCats, routeChange } =
		useContext(BudgetContext);

	const isMounted = useRef(true);

	useEffect(() => {
		if (isMounted.current) {
			getBudgets();
			getCats();
		}
		return () => (isMounted.current = false);
	});

	if (loading) return <h3>Loading...</h3>;

	return (
		<main className='w-10/12 flex flex-col relative'>
			<PageHeader text='Budgets' />

			{budgets.length ? (
				budgets.map((b) => (
					<Budget
						budget={b}
						transactions={transactions}
						routeChange={routeChange}
						key={b._id}
					/>
				))
			) : (
				<section className='w-full flex justify-center p-10'>
					<em className='text-xl font-bold text-primary'>No budgets yet...</em>
				</section>
			)}
		</main>
	);
}
