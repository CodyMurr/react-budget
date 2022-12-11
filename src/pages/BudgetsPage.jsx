import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Budget from '../components/Budget';
import BudgetContext from '../context/Budgets/BudgetContext';

export default function BudgetsPage() {
	const { budgets, loading, getBudgets, getCats, routeChange } =
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
			<header className='text-primary font-extrabold w-full h-24 flex items-center justify-between p-5 border-b-2'>
				<h1 className='text-4xl'>Budgets</h1>
				<Link
					to='/budgets/new'
					className='w-1/6 h-18 btn btn-ghost border-accent border-4 rounded text-accent flex justify-center items-center cursor-pointer hover:bg-accent hover:text-accent-content'>
					<FaPlus size={20} />
					&nbsp; &nbsp;
					<p>New Budget</p>
				</Link>
			</header>

			{budgets.length ? (
				budgets.map((b) => (
					<Budget budget={b} routeChange={routeChange} key={b._id} />
				))
			) : (
				<section className='w-full flex justify-center p-10'>
					<em className='text-xl font-bold text-primary'>No budgets yet...</em>
				</section>
			)}
		</main>
	);
}
