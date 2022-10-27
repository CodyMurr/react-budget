import { useState } from 'react';
import BudgetDetail from './BudgetDetail';

export default function Budget({ budget }) {
	const [showBudgetDetail, setShowBudgetDetail] = useState(false);

	function handleActiveBudget() {
		setShowBudgetDetail(true);
	}

	function deactivateBudget() {
		setShowBudgetDetail(false);
	}

	return (
		<>
			<section className='flex flex-col relative w-2/5 m-2'>
				<h3
					className='w-full rounded-t bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg cursor-pointer'
					onClick={handleActiveBudget}>
					{budget.category}
				</h3>
				<BudgetDetail
					budget={budget}
					showBudgetDetail={showBudgetDetail}
					deactivateBudget={deactivateBudget}
				/>
				<section className='flex justify-between w-full'>
					<span className='w-1/3 flex justify-evenly items-center text-lg font-bold'>
						${budget.totalSpent ? budget.totalSpent : '0'} / ${budget.amount}
					</span>
				</section>
			</section>
		</>
	);
}
