import { useEffect, useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import BudgetContext from '../context/Budgets/BudgetContext';
import Transaction from '../components/Transaction';
import PageHeader from '../components/custom/PageHeader';

export default function TransactionsPage() {
	const { showBudget, budgets } = useContext(BudgetContext);

	const [currentBudget, setCurrentBudget] = useState([]);

	const isMounted = useRef(true);

	const { id } = useParams();

	useEffect(() => {
		async function getEm() {
			await showBudget(id, setCurrentBudget);
		}
		if (isMounted.current) {
			getEm();
		}

		return () => (isMounted.current = false);
	}, []);

	return (
		<main className='w-10/12 flex flex-col relative'>
			<PageHeader text={`Transactions for ${currentBudget.category}`} />
			{currentBudget.transactions &&
				currentBudget.transactions.map((t) => (
					<Transaction transaction={t} key={t._id} />
				))}
		</main>
	);
}
