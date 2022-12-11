import { useContext } from 'react';
import BudgetContext from '../../context/Budgets/BudgetContext';

export default function BackButton() {
	const { routeChange } = useContext(BudgetContext);
	return (
		<p
			className='absolute bottom-0 font-bold h-20 flex items-center cursor-pointer underline text-primary text-xl'
			onClick={() => routeChange('/budgets')}>
			Go Back
		</p>
	);
}
