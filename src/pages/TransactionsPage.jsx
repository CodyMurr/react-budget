import { useEffect, useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import BudgetContext from '../context/Budgets/BudgetContext';
import Transaction from '../components/Transaction';

export default function TransactionsPage() {
	const { showTransactions } = useContext(BudgetContext);

	const isMounted = useRef(true);

	const { id } = useParams();

	const [tr, setTr] = useState([]);

	useEffect(() => {
		async function getEm() {
			const tran = await showTransactions(id);
			setTr(tran);
		}
		if (isMounted.current) {
			getEm();
		}

		return () => (isMounted.current = false);
	}, []);

	return (
		<div>
			{tr && tr.map((t) => <Transaction transaction={t} key={t._id} />)}
		</div>
	);
}
