import { useEffect, useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/custom/BackButton';
import PageHeader from '../components/custom/PageHeader';
import TransactionForm from '../components/TransactionForm';
import BudgetContext from '../context/Budgets/BudgetContext';

export default function NewTransactionPage() {
	const { showBudget, newTransaction, routeChange } = useContext(BudgetContext);

	const isMounted = useRef(true);

	const [budget, setBudget] = useState({});

	const { id } = useParams();

	useEffect(() => {
		if (isMounted.current) {
			showBudget(id, setBudget);
		}
		return () => (isMounted.current = false);
	}, [id, showBudget]);

	return (
		<main className='w-10/12 h-full flex flex-col items-center relative'>
			<PageHeader text='New Transaction For ' keyWord={budget.category} />
			<TransactionForm
				budget={budget}
				newTransaction={newTransaction}
				routeChange={routeChange}
			/>
			<BackButton />
		</main>
	);
}
