import { useState } from 'react';
import { toggleUI } from '../global-functions';

import BudgetDetail from './BudgetDetail';

export default function Budget({ budget, catOpts }) {
	const [showBudgetDetail, setShowBudgetDetail] = useState(false);

	function toggleDetail() {
		toggleUI(showBudgetDetail, setShowBudgetDetail);
	}

	return (
		<>
			<label
				className='modal-button flex flex-col w-1/4 border-2 border-primary m-2 rounded hover:cursor-pointer hover:border-info hover:text-info-content'
				onClick={toggleDetail}>
				<h3 className='w-full flex justify-center'>{budget.category}</h3>
				<h3 className='w-full flex justify-center'>${budget.amount}</h3>
			</label>
			<BudgetDetail
				budget={budget}
				catOpts={catOpts}
				showBudgetDetail={showBudgetDetail}
				toggleDetail={toggleDetail}
			/>
		</>
	);
}
