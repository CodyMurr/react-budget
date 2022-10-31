import React from 'react';

export default function BudgetItem({ amt, frequency }) {
	return (
		<>
			<span className='w-1/3 flex justify-between items-center text-lg font-bold'>
				${amt}&nbsp;/&nbsp;{frequency}
			</span>
		</>
	);
}
