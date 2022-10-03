// import { useState } from 'react';

import BudgetDetail from './BudgetDetail';

export default function Budget({ budget, showBudgetDetail, toggleDetail }) {
	const { category, amount } = budget;
	return (
		<>
			<label
				className='modal-button flex flex-col w-1/4 border-2 border-primary m-2 rounded hover:cursor-pointer hover:border-info hover:text-info-content'
				onClick={toggleDetail}>
				<h3 className='w-full flex justify-center'>{category}</h3>
				<h3 className='w-full flex justify-center'>${amount}</h3>
			</label>
			<BudgetDetail
				budget={budget}
				showBudgetDetail={showBudgetDetail}
				toggleDetail={toggleDetail}
			/>
		</>
	);
}
