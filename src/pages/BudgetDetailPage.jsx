import { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import BudgetContext from '../context/BudgetContext';

export default function BudgetDetailPage() {
	const { activeBudget } = useContext(BudgetContext);

	return (
		<main>
			{activeBudget.category}
			{activeBudget.amount}
			{activeBudget.frequency}
			<p>${activeBudget.remainingAmount}</p>
		</main>
	);
}
